# Generated by Django 4.2.5 on 2023-09-29 18:57

import colorfield.fields
from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("tracker", "0005_alter_record_details"),
    ]

    operations = [
        migrations.AddField(
            model_name="category",
            name="color",
            field=colorfield.fields.ColorField(
                default="#FFFFFF", image_field=None, max_length=25, samples=None
            ),
        ),
    ]
