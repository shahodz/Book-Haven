from django.urls import include, path
from .views import admin_dashboard,adminprofile

urlpatterns = [
    path('admindashboard/',admin_dashboard,name='admindashboard'),
    path('adminprofile/',adminprofile,name='adminprofile'),
    path('search/',include('books.urls')),
    
]