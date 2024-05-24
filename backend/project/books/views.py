from django.shortcuts import render,redirect,get_object_or_404
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib import messages
from django.core.serializers import serialize
from django.contrib.auth.decorators import login_required
from books.models import Book
from django.db.models import Q
import json
import datetime
# Create your views here.

# def view_books(request):
#     books = Book.objects.all()
#     categories = ["Historical", "Romance", "Mystery", "Children's Literature", "Self Help", "Science Fiction"]
#     return render(request, 'viewbooks.html', {'books': books, 'categories': categories})

def view_books(request):
    books = Book.objects.all().values('id', 'name', 'author', 'genre', 'image', 'available')
    genre_list = []
    for book in books:
        genre = book['genre']
        if genre:  
            normalized_genre = genre.strip().title()  
            if normalized_genre not in genre_list: 
                genre_list.append(normalized_genre)
    books_json = json.dumps(list(books))
    categories_json = json.dumps(genre_list)
    return render(request, 'viewbooks.html', {'books': books_json, 'categories': categories_json})

@login_required # Ensures that only authenticated users can access this view
def borrow_book2(request):
    if request.method == 'POST':
        book_id = request.POST.get('book_id') # Get the book_id from the POST data
        book = get_object_or_404(Book, id=book_id) # Get the Book object with the given book_id
        
        if book.available:
            # Update book attributes to reflect that it has been borrowed
            book.borrowed_by = request.user
            book.borrowed_date = datetime.date.today()
            book.due_date = book.borrowed_date + datetime.timedelta(days=14)
            book.available = False
            book.save()
            messages.success(request, 'Book borrowed successfully.')
        else:
            messages.error(request, 'Book not available for borrowing.')

        # Redirect the user to the borrowedBooks page after borrowing
        return redirect('borrowedBooks')