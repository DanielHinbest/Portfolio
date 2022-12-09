from django.db import models
from datetime import date

class Post(models.Model):
    title = models.CharField(max_length=50, blank=False, null=False)
    content = models.TextField(blank=False, null=False)
    pub_date = models.DateField('date published', blank=False, default=date.today())
    edit_date = models.DateField('date edited', blank=True, null=True)
    source_code_url = models.URLField(max_length=100, blank=True, null=True)
    website_url = models.URLField(max_length=100, blank=True, null=True)
    is_draft = models.BooleanField(default=False)

    def __str__(self):
        return self.title
    