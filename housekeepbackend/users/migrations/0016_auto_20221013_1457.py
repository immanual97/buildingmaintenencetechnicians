# Generated by Django 3.2.5 on 2022-10-13 09:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0015_alter_workrequest_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='customer',
            name='phone',
            field=models.CharField(max_length=14, null=True),
        ),
        migrations.AddField(
            model_name='technician',
            name='phone',
            field=models.CharField(max_length=14, null=True),
        ),
    ]