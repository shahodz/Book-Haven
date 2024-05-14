from django.urls import path
from .views import bookdetails

urlpatterns = [
    # Define a path that takes a book ID as a variable
    path('books/<int:book_id>/', bookdetails, name='book_detail'),
]
