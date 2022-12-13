from django.http import HttpResponse
from .forms import PostForm
from django.views.generic import CreateView, UpdateView, DeleteView, DetailView, ListView
from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpResponseRedirect
from django.urls import reverse

from .models import Post

# May change to DetailView
class IndexView(ListView):
    template_name = 'portfolio/index.html'
    context_object_name = 'post_list'

    def get_queryset(self):
        return Post.objects.order_by('-pub_date')[:5]

class PostView(DetailView):
    model = Post
    template_name = 'portfolio/view_post.html'

class CreatePostView(LoginRequiredMixin, CreateView):
    login_url = '/'
    redirect_field_name = 'access_denied'
    form_class = PostForm
    template_name = 'portfolio/post_form.html'
    success_url = '/'

class EditPostView(LoginRequiredMixin, UpdateView):
    login_url = '/'
    redirect_field_name = 'access_denied'
    model = Post
    form_class = PostForm
    template_name = 'portfolio/post_form.html'
    success_url = '/'

class DeletePostView(LoginRequiredMixin, DeleteView):
    login_url = '/'
    redirect_field_name = 'access_denied'
    model = Post
    template_name = 'portfolio/delete_post.html'
    success_url = '/'

def about(request):
    return HttpResponse("This will be the about me page")

@login_required(login_url='/')
def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse('portfolio:index'))