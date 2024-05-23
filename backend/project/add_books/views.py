from django.shortcuts import render,redirect
from books.models import Book



def add(request):
    if request.method == 'POST':
        bookname = request.POST.get('bookname')
        author = request.POST.get('author')
        description = request.POST.get('book_description')
        publisher = request.POST.get('Publisher')
        genre = request.POST.get('genre')
        language = request.POST.get('language')
        edition = request.POST.get('edition')
        publication = request.POST.get('date')
        isbn = request.POST.get('isbn')
        cover = request.POST.get('cover')

        
        if not Book.objects.filter(name=bookname).exists():
            Book.objects.create(
                name=bookname,
                author=author,
                description=description,
                publisher=publisher,
                genre=genre,
                language=language,
                edition=edition,
                year=publication,
                ISBN=isbn,
                image=cover
            )

        return redirect('addbooks')  # Redirect to the same page or another page after form submission

    return render(request, 'addApp/add_book.html')

 