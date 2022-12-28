from django.db import models
from django.utils import timezone

class Post(models.Model):
    title = models.CharField(max_length=50, blank=False, null=False)
    content = models.TextField(blank=False, null=False)
    technologies_used = models.CharField(max_length=50, blank=False, null=False)
    pub_date = models.DateField('date published', blank=False, default=timezone.now())
    program_date = models.DateField('date created', blank=False, default=timezone.now())
    source_code_url = models.URLField(max_length=100, blank=True, null=True)
    website_url = models.URLField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.title
    