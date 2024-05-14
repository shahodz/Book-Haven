from django.urls import include, path
from .views import user_dashboard,userprofile

urlpatterns = [
    path('userdashboard/',user_dashboard,name='userdashboard'),
    path('search',include('books.urls')),
    path('userprofile/',userprofile,name='userprofile'),
    
]