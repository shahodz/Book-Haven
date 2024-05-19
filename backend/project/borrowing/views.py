from django.shortcuts import render

# Create your views here.
def borrowedBooks(request):
    return render(request , 'borrowed_books.html')

def bookRenewal(request):
    return render(request , 'bookRenewal.html')

def renewalSuccess(request):
    return render(request , 'renewalSuccess.html')
