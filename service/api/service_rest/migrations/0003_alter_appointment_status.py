# Generated by Django 4.0.3 on 2023-10-23 21:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0002_alter_appointment_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='status',
            field=models.CharField(default='created', max_length=200),
        ),
    ]
