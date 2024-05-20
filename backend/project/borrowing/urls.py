from django.urls import path
from . import views

urlpatterns = [
    path('borrowedBooks' , views.borrowedBooks , name='borrowedBooks'),
    path('bookRenewal/renewalSuccess/<int:book_id>/', views.renewalSuccess, name='renewal_success'),
    path('return/<int:book_id>/', views.return_book, name='return_book'),
    path('bookRenewal/<int:book_id>/', views.bookRenewal, name='bookRenewal'),
]