from django.urls import path
from .views import bookdetails
from . import views

urlpatterns = [
    # Define a path that takes a book ID as a variable
    path('books/<int:book_id>/', bookdetails, name='book_detail'),
    path('borrowing/borrow/', views.borrow_book, name='borrow_book'),
]
