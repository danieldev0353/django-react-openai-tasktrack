# Generated by Django 4.1.7 on 2023-03-19 10:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0005_alter_tasks_due'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tasks',
            name='completed',
        ),
    ]
