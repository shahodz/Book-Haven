from django.shortcuts import render
from django.http import JsonResponse
from books.models import Book
import json

def main_view(request):
    return render(request,'search.html')

def search_results(request):
        result = []
        search_input = request.POST.get('book')
        matching_books = []
        book_by_name = Book.objects.filter(name__icontains=search_input)
        book_by_author = Book.objects.filter(author__icontains=search_input)
        book_by_category = Book.objects.filter(genre__icontains=search_input)
        matching_books = book_by_name | book_by_category | book_by_author

        if len(search_input) > 0 and len(matching_books) > 0:
            for book in matching_books:
                book_detail = {
                    'id':book.id,
                    'name': book.name,
                    'image': book.image,
                    'author': book.author,
                    'description': book.description,
                }
                result.append(book_detail)
        elif len(matching_books)==0:
            result = "no book found"
        return JsonResponse({'data': result})


# Create your views here.
