from django.urls import path
from .views import main_view

urlpatterns = [
    path('search/',main_view,name='user_result')
]