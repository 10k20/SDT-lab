from django.db import models

# Create your models here.

class Record(models.Model):
    user_login = models.ForeignKey('User', related_name='user_records', on_delete=models.CASCADE)
    score = models.CharField(max_length=120)

    def __str__(self):
        return self.score

class User(models.Model):
    login = models.CharField(max_length=120)
    password = models.CharField(max_length=120)
    records = models.ManyToManyField(Record, blank=True)

    def __str__(self):
        return self.login