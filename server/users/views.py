from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from django_filters import rest_framework as filters

from .models import User, Record
from .serializers import UserSerializer, RecordSerializer
# Create your views here.

class RecordViewSet(viewsets.ModelViewSet):
    serializer_class = RecordSerializer
    queryset = Record.objects.all().order_by('-score')

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('login','password')

