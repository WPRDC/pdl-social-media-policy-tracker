# Generated by Django 4.2.5 on 2023-09-29 15:56

import colorfield.fields
from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("tracker", "0003_alter_category_slug_alter_citation_id_and_more"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="record",
            options={"ordering": ["-date"]},
        ),
        migrations.AddField(
            model_name="platform",
            name="background_color",
            field=colorfield.fields.ColorField(
                default="#FFFFFF", image_field=None, max_length=25, samples=None
            ),
        ),
        migrations.AddField(
            model_name="platform",
            name="text_color",
            field=colorfield.fields.ColorField(
                default="#FFFFFF", image_field=None, max_length=25, samples=None
            ),
        ),
    ]
