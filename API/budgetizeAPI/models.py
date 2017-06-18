from django.db import models


class User(models.Model):
    first_name = models.CharField(max_length=55)
    last_name = models.CharField(max_length=55)

    def __str__(self):
        return self.first_name


class TransactionType(models.Model):
    name = models.CharField(max_length=55)

    def __str__(self):
        return self.name


class Location(models.Model):
    name = models.CharField(max_length=55)

    def __str__(self):
        return self.name


class Transaction(models.Model):
    amount = models.CharField(max_length=55)
    date = models.DateField(auto_now_add=True, blank=True)
    user = models.ForeignKey(User, related_name='transactions')
    transaction_type = models.ForeignKey(TransactionType, related_name='transactions')
    is_recurring = models.BooleanField(default=False)


class TransactionLocation(models.Model):
    location = models.ForeignKey(Location)
    transaction = models.ForeignKey(Transaction)
