# Generated by Django 4.1.4 on 2022-12-12 18:58

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0002_alter_post_edit_date_alter_post_source_code_url_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='edit_date',
        ),
        migrations.RemoveField(
            model_name='post',
            name='is_draft',
        ),
        migrations.AlterField(
            model_name='post',
            name='pub_date',
            field=models.DateField(default=datetime.datetime(2022, 12, 12, 18, 58, 36, 833029, tzinfo=datetime.timezone.utc), verbose_name='date published'),
        ),
    ]
