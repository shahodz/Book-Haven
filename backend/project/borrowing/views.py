from django.shortcuts import render,get_object_or_404,redirect
from django.contrib.auth.decorators import login_required
from books.models import Book
from django.contrib import messages

# Create your views here.
@login_required
def borrowedBooks(request):
    user = request.user # Get the current user
    borrowed_books = Book.objects.filter(borrowed_by=user) # Filter books borrowed by the current user
    # Pass the borrowed_books queryset as context data
    return render(request, 'borrowed_books.html', {'borrowed_books': borrowed_books})

@login_required
def return_book(request, book_id):
    # Retrieve the Book object with the specified book_id and borrowed by the current user
    book = get_object_or_404(Book, id=book_id, borrowed_by=request.user)
    # Update the attributes of the Book object to reflect that it has been returned
    book.borrowed_by = None
    book.borrowed_date = None
    book.due_date = None
    book.available = True
    book.save()
    # Redirect the user to the borrowedBooks page after returning the book
    return redirect('borrowedBooks')


def bookRenewal(request, book_id):
    # Retrieve the Book object with the specified book_id
    book = Book.objects.get(pk=book_id)

    if request.method == 'POST': # this indicating that the user has submitted the form.
        due_date = request.POST.get('due_date')  # Get the new due date from the POST data
        book.due_date = due_date # Update the due date of the book
        book.save()
         # Redirect the user to the renewal success page with the book_id as a parameter
        return redirect('renewal_success', book_id=book_id)  

    # If the request method is not POST , it means that the user is accessing the page
    # to view the form rather than submitting it.
    # So pass the book object as context data to pre-fill the form with the book details
    return render(request, 'bookRenewal.html', {'book': book})


def renewalSuccess(request , book_id):
    # Retrieve the Book object with the specified book_id from the database
    book = Book.objects.get(pk=book_id)
    #  Pass the book object as context data
    return render(request , 'renewalSuccess.html', {'book': book})
