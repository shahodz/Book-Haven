from django.urls import path
from . import views

urlpatterns = [
    path('borrowedBooks' , views.borrowedBooks , name='borrowedBooks')
]