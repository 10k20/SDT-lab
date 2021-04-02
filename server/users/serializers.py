from rest_framework import serializers

from .models import User, Record

class RecordSerializer(serializers.ModelSerializer):
    user_login = serializers.CharField(source='user_login.login')
    class Meta:
        model = Record
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    records = RecordSerializer(read_only=True, many=True)
    class Meta:
        model = User
        fields = ['login', 'password', 'records']