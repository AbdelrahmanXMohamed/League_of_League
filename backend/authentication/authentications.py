from rest_framework.authentication import TokenAuthentication
from rest_framework.exceptions import AuthenticationFailed
from  .models import MyToken

from datetime import timedelta
from django.utils import timezone
from django.conf import settings

#this return left time
def expires_in(token):
    time_elapsed = timezone.now() - token.created
    if token.is_remember_me:
        left_time=timedelta(seconds= 3.1558e+11) - time_elapsed 
    else:
        left_time = timedelta(seconds = settings.TOKEN_EXPIRED_AFTER_SECONDS) - time_elapsed
    return left_time

# token checker if token expired or not
def is_token_expired(token):
    return expires_in(token) < timedelta(seconds = 0)

# if token is expired new token will be established
# If token is expired then it will be removed
# and new one with different key will be created
def token_expire_handler(token):
    is_expired = is_token_expired(token)
    if is_expired:
        token.delete()
        token = MyToken.objects.create(user = token.user)
    return is_expired, token

class ExpiringTokenAuthentication(TokenAuthentication):
    """
    If token is expired then it will be removed
    and new one with different key will be created
    """
    model=MyToken

    def authenticate_credentials(self, key):
        try:
            token = MyToken.objects.get(key = key)
        except MyToken.DoesNotExist:
            raise AuthenticationFailed("Invalid Token")
        
        if not token.user.is_active:
            raise AuthenticationFailed("User is not active")
        if token.is_remember_me:
            return (token.user, token)
        is_expired, token = token_expire_handler(token)
        if is_expired:
            raise AuthenticationFailed("The Token is expired")
        
        return (token.user, token)