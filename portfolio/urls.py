from django.urls import path

from . import views

app_name = 'portfolio'
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('about/', views.about, name='about'),
    path('<int:pk>/', views.PostView.as_view(), name='view_post'),
    path('create/', views.CreatePostView.as_view(), name='create_post'),
    path('<int:post_id>/edit/', views.edit_post, name='edit_post'),
    path('<int:post_id>/delete/', views.delete_post, name='delete_post'),
    #path('<int:pk>/edit/', views.EditPostView.as_view(), name='edit_post'),
    #path('<int:pk>/delete/', views.DeletePostView.as_view(), name='delete_post'),
]