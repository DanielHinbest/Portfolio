from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=50, blank=False)
    content = models.TextField(blank=False)
    pub_date = models.DateField('date published', blank=False)
    edit_date = models.DateField('date edited', blank=True)
    source_code_url = models.URLField(max_length=100, blank=True)
    website_url = models.URLField(max_length=100, blank=True)
    is_draft = models.BooleanField(default=False)

    def __str__(self):
        return self.title
    