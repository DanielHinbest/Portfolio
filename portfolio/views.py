from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("This will be the index page")

def about(request):
    return HttpResponse("This will be the about me page")

def view_post(request):
    return HttpResponse("This will be the view post page")

# Must be restricted access
def create_post(request):
    return HttpResponse("This will be the create new post page")

# Must be restricted access
def edit_post(request):
    return HttpResponse("This will be the edit post page")

# Must be restricted access. Will determine whether it's needed at a later time
def delete_post(request):
    return HttpResponse("This will be the delete post page")