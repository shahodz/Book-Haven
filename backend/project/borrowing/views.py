from django.shortcuts import render

# Create your views here.
def borrowedBooks(request):
    return render(request , 'borrowed_books.html')
