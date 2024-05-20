from django.shortcuts import render, get_object_or_404,redirect
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib import messages
from books.models import Book
import datetime
from django.contrib.auth.decorators import login_required


# Create your views here.
def bookdetails(request):
    render (request, 'booktemp.html')

def bookdetails(request, book_id):
    # Retrieve the book object using the book ID
    book = get_object_or_404(Book, pk=book_id)
    
    # Render the book detail template with the book object
    return render(request, 'booktemp.html', {'book': book})

@login_required
def borrow_book(request):
    if request.method == 'POST':
        book_id = request.POST.get('book_id')
        book = get_object_or_404(Book, id=book_id)
        if book.available:
            book.borrowed_by = request.user
            book.borrowed_date = datetime.date.today()
            book.due_date = book.borrowed_date + datetime.timedelta(days=14)
            book.available = False
            book.save()
            messages.success(request, 'Book borrowed successfully')
        else:
            messages.error(request, 'Book not available for borrowing')
    return redirect('borrowedBooks')