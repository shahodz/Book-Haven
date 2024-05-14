from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib import messages
from books.models import Book

# Create your views here.
def bookdetails(request):
    render (request, 'booktemp.html')

def bookdetails(request, book_id):
    # Retrieve the book object using the book ID
    book = get_object_or_404(Book, pk=book_id)
    
    # Render the book detail template with the book object
    return render(request, 'booktemp.html', {'book': book})
