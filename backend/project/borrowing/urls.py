from django.urls import path
from . import views

urlpatterns = [
    path('borrowedBooks' , views.borrowedBooks , name='borrowedBooks'),
    path('bookRenewal' , views.bookRenewal , name='bookRenewal'),
    path('renewalSuccess' , views.renewalSuccess , name='renewalSuccess'),
]