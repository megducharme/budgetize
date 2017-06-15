from django.db import models


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
    date = models.DateField()
    user = models.ForeignKey(User, related_name='transactions')
    transaction_type = models.ForeignKey(TransactionType, related_name='transactions')
