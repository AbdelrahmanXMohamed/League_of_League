from django.urls import path
from .views import LoginAPIView, RegisterView, VerifyEmail,LogoutAPIView,ForgetPasswordView,ResetPassowordView

urlpatterns = [
    path('register/',RegisterView.as_view(),name="register"),
    path('email-verify/',VerifyEmail.as_view(),name="email_verify"),
    path('login/',LoginAPIView.as_view(),name="login"),
    path('logout/',LogoutAPIView.as_view(),name="logout"),
    path('forget-password/',ForgetPasswordView.as_view(),name="forget_password"),
    path('reset-password/',ResetPassowordView.as_view(),name="reset_password"),
]
