from django.shortcuts import render,get_object_or_404,redirect
from django.contrib.auth.decorators import login_required
from books.models import Book
from django.contrib import messages

# Create your views here.
@login_required
def borrowedBooks(request):
    user = request.user
    borrowed_books = Book.objects.filter(borrowed_by=user)
    return render(request, 'borrowed_books.html', {'borrowed_books': borrowed_books})

@login_required
def return_book(request, book_id):
    book = get_object_or_404(Book, id=book_id, borrowed_by=request.user)
    book.borrowed_by = None
    book.borrowed_date = None
    book.due_date = None
    book.available = True
    book.save()
    return redirect('borrowedBooks')


def bookRenewal(request, book_id):
    book = Book.objects.get(pk=book_id)

    if request.method == 'POST':
        due_date = request.POST.get('due_date')
        book.due_date = due_date
        book.save()
        return redirect('renewal_success', book_id=book_id)  # Redirect to the renewal success page

    # Pre-fill the form with the book details
    return render(request, 'bookRenewal.html', {'book': book})


def renewalSuccess(request , book_id):
    book = Book.objects.get(pk=book_id)
    return render(request , 'renewalSuccess.html', {'book': book})
