from django.contrib.auth.models import User, Group
#importing the User and Group models from the auth module made by django
from rest_framework import serializers
#from rest, import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    #HyperlinkedModelSerializer allows a user to click through the API and use primary keys and various other relationships - Hyperlinking is good RESTful design
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')
