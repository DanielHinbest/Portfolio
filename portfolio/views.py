from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .forms import PostForm
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
class CreatePostView(generic.CreateView):
    form_class = PostForm
    template_name = 'portfolio/post_form.html'
    success_url = '/'

# Must be restricted access. Should be similar to create post, class view
class EditPostView(generic.UpdateView):
    model = Post
    form_class = PostForm
    template_name = 'portfolio/post_form.html'
    success_url = '/'

# Must be restricted access. Will determine whether it's needed at a later time, should be class view
class DeletePostView(generic.DeleteView):
    model = Post
    template_name = 'portfolio/delete_post.html'
    success_url = '/'