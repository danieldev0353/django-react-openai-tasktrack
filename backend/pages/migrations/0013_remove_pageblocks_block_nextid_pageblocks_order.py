# Generated by Django 4.1.7 on 2023-03-21 05:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0012_alter_pageblocks_block_content'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pageblocks',
            name='block_nextId',
        ),
        migrations.AddField(
            model_name='pageblocks',
            name='order',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]
