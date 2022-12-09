from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from .forms import CreatePostForm
from django.views import generic

from .models import Post

# May change to DetailView
class IndexView(generic.ListView):
    template_name = 'portfolio/index.html'
    context_object_name = 'post_list'

    def get_queryset(self):
        return Post.objects.order_by('-pub_date')[:5]

def about(request):
    return HttpResponse("This will be the about me page")

class PostView(generic.DetailView):
    model = Post
    template_name = 'portfolio/view_post.html'

# Must be restricted access
class CreatePostView(generic.FormView):
    form_class = CreatePostForm
    template_name = 'portfolio/create_post.html'
    success_url = ''

# Must be restricted access. Should be similar to create post, class view
# class EditPostView(generic.FormView):
#     form_class = EditPostForm
#     template_name = 'portfolio/edit_post.html'
#     success_url = ''

def edit_post(request):
    return HttpResponse("This will be the edit post page")

# Must be restricted access. Will determine whether it's needed at a later time, should be class view
# class DeletePostView(generic.FormView):
#     form_class = DeletePostForm
#     template_name = 'portfolio/delete_post.html'
#     success_url = ''
def delete_post(request):
    return HttpResponse("This will be the delete post page")