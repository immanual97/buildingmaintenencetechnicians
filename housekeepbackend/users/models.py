from django.db import models
from django.db.models.deletion import CASCADE
import datetime

# Create your models here.

class Customer(models.Model):
    cid = models.AutoField(primary_key=True)
    fname = models.CharField(max_length=250)
    lname = models.CharField(max_length=300)
    email = models.CharField(max_length=300)
    password = models.CharField(max_length=250)
    address = models.CharField(max_length=650,null=True)
    phone = models.CharField(max_length=14,null=True)


class Service(models.Model):
    sid = models.AutoField(primary_key=True)
    service = models.CharField(max_length=300)

class Location(models.Model):
    lid = models.AutoField(primary_key=True)
    locations = models.CharField(max_length=300)


class Technician(models.Model):
    tid = models.AutoField(primary_key=True)
    fname = models.CharField(max_length=250)
    lname = models.CharField(max_length=300)
    email = models.CharField(max_length=300)
    password = models.CharField(max_length=250)
    service = models.CharField(max_length=300)
    status = models.IntegerField()
    overallrating = models.IntegerField()
    phone = models.CharField(max_length=14,null=True)

class Admin (models.Model):
    aid = models.AutoField(primary_key=True)
    fname = models.CharField(max_length=250)
    lname = models.CharField(max_length=300)
    email = models.CharField(max_length=300)
    password = models.CharField(max_length=250)


class WorkRequest(models.Model):
    wid = models.AutoField(primary_key=True)
    user = models.ForeignKey(Customer,related_name='username',on_delete=CASCADE)
    technician = models.ForeignKey(Technician,default=1,on_delete=models.DO_NOTHING)
    service = models.CharField(max_length=300)
    date = models.CharField(null=True, max_length=200, blank=True)
    slot= models.CharField(default='10:00 to 11:00',max_length=200)
    accepted = models.BooleanField(default=False)
    workstatus = models.CharField(max_length=200)
    cost = models.IntegerField()
    payed = models.BooleanField(default=False)
    rating = models.IntegerField()

class Book(models.Model):
    bid = models.AutoField(primary_key=True)
    customer = models.ForeignKey(Customer,on_delete=CASCADE)
    technician = models.ForeignKey(Technician,default=1,on_delete=models.DO_NOTHING)
    date = models.DateField()
    slot = models.CharField(default='',max_length=200)

class Slots(models.Model):
    slotid = models.AutoField(primary_key=True)
    slots = models.CharField(max_length=200)
