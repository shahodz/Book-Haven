from django.urls import path
from .views import main_view, search_results
from . import views
# project > books > urls.py
urlpatterns = [
    path('',main_view,name='main'),
    path('/results/',search_results,name='results'),
    path('view-books/', views.view_books, name='view_books'),
]