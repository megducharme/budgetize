from django.db import models
from datetime import datetime

class User(models.Model):
    first_name = models.CharField(max_length=55)
    last_name = models.CharField(max_length=55)


class TransactionType(models.Model):
    name = models.CharField(max_length=55)


class Location(models.Model):
    name = models.CharField(max_length=55)


class TransactionLocation(models.Model):
    location = models.ForeignKey(Location)
    transaction = models.ForeignKey('Transaction')


class Transaction(models.Model):
    amount = models.CharField(max_length=55)
    date = models.DateTimeField()
    user = models.ForeignKey(User, related_name='transactions')
