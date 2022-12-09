from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('', views.about, name='about'),
    path('', views.view_post, name='view_post'),
    path('', views.create_post, name='create_post'),
    path('', views.edit_post, name='edit_post'),
    path('', views.delete_post, name='delete_post'),
]