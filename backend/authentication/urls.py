from django.urls import path
from .views import LoginAPIView, RegisterView, VerifyEmail,LogoutAPIView,ForgetPasswordView,ResetPassowordView,CheckValidUserView

urlpatterns = [
    path('register/',RegisterView.as_view(),name="register"),
    path('email-verify/',VerifyEmail.as_view(),name="email_verify"),
    path('login/',LoginAPIView.as_view(),name="login"),
    path('logout/',LogoutAPIView.as_view(),name="logout"),
    path('forget-password/',ForgetPasswordView.as_view(),name="forget_password"),
    path('reset-password/<uidb64>/<token>',CheckValidUserView.as_view(),name="reset_password"),
    path('reset/',ResetPassowordView.as_view(),name="reset")
]
