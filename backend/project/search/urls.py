from django.urls import path
from .views import main_view, search_results
# project > books > urls.py
urlpatterns = [
    path('',main_view,name='main'),
    path('/results/',search_results,name='results'),
]