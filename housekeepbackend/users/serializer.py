#from django.db.models import fields
from rest_framework import serializers
from users.models import Customer,Technician,Admin,Service,WorkRequest,Location,Slots

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('cid','fname','lname','email','password','address','phone')

class CustomerRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('fname','lname','email','password')


class CustomerEmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('cid','email')

class CustomerUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('cid','fname','lname','email','address','phone')

class CustomerLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('email','password')


class TechnicianSerializer(serializers.ModelSerializer):
    class Meta:
        model = Technician
        fields = ('tid','fname','lname','email','password','service','status','overallrating','phone')

class TechnicianLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Technician
        fields = ('email','password')


class TechnicianAdminUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Technician
        fields = ('tid','fname','lname','email','service','status','overallrating')

class TechnicianUpdateStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Technician
        fields = ('email','status')


class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = ('aid','fname','lname','email','password')

class AdminLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = ('email','password')


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ('sid','service')


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ('lid','locations')

class SlotsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Slots
        fields = ('slotid','slots')


class WorkRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkRequest
        fields = ('wid','user','technician','service','date','slot','accepted','workstatus','cost','payed','rating')


class WorkPostRequestSerializer(serializers.ModelSerializer):
    #username = CustomerEmailSerializer(source='email',read_only=True,many=True)
    class Meta:
        model = WorkRequest
        fields = ('user','technician','service','date','slot','accepted','workstatus','cost','payed','rating')



class WorkRequestUpdateWorkStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkRequest
        fields = ('wid','workstatus')

class WorkRequestPaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkRequest
        fields = ('wid','payed')

class WorkRequestCostSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkRequest
        fields = ('wid','cost')

class WorkRequestAcceptanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkRequest
        fields = ('wid','accepted')

class WorkRequestRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkRequest
        fields = ('wid','rating')

class AdminChangePasswordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields =('email','password')

class CustomerChangePasswordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields =('email','password')

class TechnicianChangePasswordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Technician
        fields =('email','password')

class CustomerChangePasswordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields =('email','password')
