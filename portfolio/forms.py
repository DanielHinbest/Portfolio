from django import forms
from django.forms import ModelForm
from .models import Post

class CreatePostForm(ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'content', 'source_code_url', 'website_url']