from django.contrib.auth.models import User, Group
#importing the User and Group models from the auth module made by django
from rest_framework import serializers
#from rest, import serializers
from budgetizeAPI.models import *


class UserSerializer(serializers.HyperlinkedModelSerializer):
    #HyperlinkedModelSerializer allows a user to click through the API and use primary keys and various other relationships - Hyperlinking is good RESTful design
    class Meta:
        model = User
        fields = ('first_name', 'last_name',)


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name',)


class TransactionTypeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TransactionType
        fields = ('name',)

class LocationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Location
        fields = ('name',)


class TransactionLocationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TransactionLocation
        fields = ('name',)


class TransactionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Transaction
        fields = ('amount', 'user', "transaction_type", "is_recurring")
