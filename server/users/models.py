from django.db import models
from django.contrib.auth.models import AbstractBaseUser

# Create your models here.

class Record(models.Model):
    user_login = models.ForeignKey('User', related_name='user_records', on_delete=models.CASCADE)
    score = models.CharField(max_length=120)

    def __str__(self):
        return self.score


class User(AbstractBaseUser):
    login = models.CharField(max_length=120, unique=True)
    password = models.CharField(max_length=120)
    records = models.ManyToManyField(Record, blank=True)
    USERNAME_FIELD = "login"
    def __str__(self):
        return self.login