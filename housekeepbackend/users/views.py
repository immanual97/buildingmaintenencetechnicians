from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.core.files.storage import default_storage
from rest_framework.utils import json
from django.db.models import Sum


from users.models import Customer, Service, Technician, Admin,WorkRequest,Location,Slots
from users.serializer import CustomerSerializer,ServiceSerializer,TechnicianSerializer,AdminSerializer,WorkRequestSerializer,AdminLoginSerializer,CustomerLoginSerializer
from users.serializer import TechnicianLoginSerializer, TechnicianUpdateStatusSerializer, WorkRequestUpdateWorkStatusSerializer,WorkRequestPaymentSerializer
from users.serializer import WorkRequestCostSerializer,WorkRequestAcceptanceSerializer,WorkRequestRatingSerializer,CustomerUpdateSerializer,TechnicianAdminUpdateSerializer
from users.serializer import AdminChangePasswordSerializer,TechnicianChangePasswordSerializer,CustomerChangePasswordSerializer,LocationSerializer,SlotsSerializer,WorkPostRequestSerializer,CustomerRegisterSerializer


# Create your views here.

@csrf_exempt
def admincustomerApi(request, id=0):
    if request.method=='GET':
        customers = Customer.objects.all()
        customer_serializer = CustomerSerializer(customers,many=True)
        return JsonResponse(customer_serializer.data,safe=False)
    elif request.method=='POST':
        customer_data = JSONParser().parse(request)
        customer_serializer = CustomerSerializer(data=customer_data)
        if customer_serializer.is_valid():
            customer_serializer.save()
            return JsonResponse("Added successfully", safe=False)
        else:
            return JsonResponse("Failed to add",safe=False)
    elif request.method=='PUT':
        customer_data = JSONParser().parse(request)
        customer = Customer.objects.get(cid=customer_data['cid'])
        customer_serializer = CustomerSerializer(customer, data=customer_data)
        if customer_serializer.is_valid():
            customer_serializer.save()
            return JsonResponse(1)
        else:
            return JsonResponse(0,safe=False)
    elif request.method=='DELETE':
        customer = Customer.objects.get(cid=id)
        customer.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def admincustomerupdateApi(request,id=0):
    if request.method=='PUT':
        customer_data = JSONParser().parse(request)
        customer = Customer.objects.get(cid=customer_data['cid'])
        customer_update_serializer = CustomerUpdateSerializer(customer, data=customer_data)
        if customer_update_serializer.is_valid():
            customer_update_serializer.save()
            return JsonResponse(1,safe=False)
        else:
            return JsonResponse(0,safe=False)



@csrf_exempt
def adminApi(request, id=0):
    if request.method=='GET':
        admins = Admin.objects.all()
        admin_serializer = AdminSerializer(admins,many=True)
        return JsonResponse(admin_serializer.data,safe=False)
    elif request.method=='POST':
        admin_data = JSONParser().parse(request)
        admin_serializer = AdminSerializer(data=admin_data)
        if admin_serializer.is_valid():
            admin_serializer.save()
            return JsonResponse("Added successfully", safe=False)
        else:
            return JsonResponse("Failed to add",safe=False)
    elif request.method=='PUT':
        admin_data = JSONParser().parse(request)
        admin = Admin.objects.get(aid=admin_data['aid'])
        admin_serializer = AdminSerializer(admin, data=admin_data)
        if admin_serializer.is_valid():
            admin_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        else:
            return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        admin = Admin.objects.get(aid=id)
        admin.delete()
        return JsonResponse("Deleted Successfully",safe=False)


@csrf_exempt
def adminserviceApi(request, id=0):
    if request.method=='GET':
        service = Service.objects.all()
        service_serializer = ServiceSerializer(service,many=True)
        return JsonResponse(service_serializer.data,safe=False)
    elif request.method=='POST':
        service_data = JSONParser().parse(request)
        service_serializer = ServiceSerializer(data=service_data)
        if service_serializer.is_valid():
            service_serializer.save()
            return JsonResponse("Added successfully", safe=False)
        else:
            return JsonResponse("Failed to add",safe=False)
    elif request.method=='PUT':
        service_data = JSONParser().parse(request)
        service = Service.objects.get(sid=service_data['sid'])
        service_serializer = ServiceSerializer(service, data=service_data)
        if service_serializer.is_valid():
            service_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        else:
            return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        service = Service.objects.get(sid=id)
        service.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def admintechnicianApi(request, id=0):
    if request.method=='GET':
        technician = Technician.objects.all()
        technician_serializer = TechnicianSerializer(technician,many=True)
        return JsonResponse(technician_serializer.data,safe=False)
    elif request.method=='POST':
        technician_data = JSONParser().parse(request)
        technician_serializer = TechnicianSerializer(data=technician_data)
        if technician_serializer.is_valid():
            technician_serializer.save()
            return JsonResponse("Added successfully", safe=False)
        else:
            return JsonResponse("Failed to add",safe=False)
    elif request.method=='PUT':
        technician_data = JSONParser().parse(request)
        technician = Technician.objects.get(tid=technician_data['tid'])
        technician_serializer = TechnicianAdminUpdateSerializer(technician, data=technician_data)
        if technician_serializer.is_valid():
            technician_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        else:
            return JsonResponse("Failed to Update",safe=False)
    elif request.method=='DELETE':
        technician = Technician.objects.get(tid=id)
        technician.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def adminloginApi(request,id=0):
    if request.method=='POST':
        admin_data = JSONParser().parse(request)
        adminlogin_serializer = AdminLoginSerializer(data=admin_data)
        if adminlogin_serializer.is_valid():
            if Admin.objects.filter(email=admin_data['email']).exists():
                admin = Admin.objects.get(email=admin_data['email'])
                if admin.password==admin_data['password']:
                    return JsonResponse(1,safe=False)
                else:
                    return JsonResponse(2,safe=False)
            else:
                return JsonResponse(3,safe=False)

@csrf_exempt
def customerloginApi(request,id=0):
    if request.method=='POST':
        customer_data = JSONParser().parse(request)
        customerlogin_serializer = CustomerLoginSerializer(data=customer_data)
        if customerlogin_serializer.is_valid():
            if Customer.objects.filter(email=customer_data['email']).exists():
                customer = Customer.objects.get(email=customer_data['email'])
                if customer.password==customer_data['password']:
                    return JsonResponse("Login successfully",safe=False)
                else:
                    return JsonResponse("Wrong password",safe=False)
            else:
                return JsonResponse("Wrong Id",safe=False)

@csrf_exempt
def technicianloginApi(request,id=0):
    if request.method=='POST':
        technician_data = JSONParser().parse(request)
        technicianlogin_serializer = TechnicianLoginSerializer(data=technician_data)
        if technicianlogin_serializer.is_valid():
            if Technician.objects.filter(email=technician_data['email']).exists():
                technician = Technician.objects.get(email=technician_data['email'])
                if technician.password==technician_data['password']:
                    return JsonResponse("Login successfully",safe=False)
                else:
                    return JsonResponse("Wrong password",safe=False)
            else:
                return JsonResponse("Wrong Id",safe=False)


@csrf_exempt
def TechIdApi(request,email=""):
    if request.method=='GET':
        technician = Technician.objects.get(email=email)
        id=technician.tid
        return JsonResponse(id, safe=False)


@csrf_exempt
def CustIdApi(request,email=""):
    if request.method=='GET':
        customer = Customer.objects.get(email=email)
        id=customer.cid
        return JsonResponse(id, safe=False)

@csrf_exempt
def adminregisterApi(request,id=0):
    if request.method=='POST':
        admin_data = JSONParser().parse(request)
        admin_serializer = AdminSerializer(data=admin_data)
        if Admin.objects.filter(email=admin_data['email']).exists():
            return JsonResponse("Email already exists", safe=False)
        elif admin_serializer.is_valid():
            admin_serializer.save()
            return JsonResponse("Added successfully", safe=False)
        else:
            return JsonResponse("Failed to add",safe=False)


@csrf_exempt
def getallservicesApi(request,id=0):
    if request.method=='GET':
        service = Service.objects.all()
        service_serializer = ServiceSerializer(service,many=True)
        return JsonResponse(service_serializer.data,safe=False)




@csrf_exempt
def getalllocationsApi(request,id=0):
    if request.method=='GET':
        location = Location.objects.all()
        loc_serializer = LocationSerializer(location,many=True)
        return JsonResponse(loc_serializer.data,safe=False)




@csrf_exempt
def getallslotssApi(request,id=0):
    if request.method=='GET':
        slots = Slots.objects.all()
        slots_serializer = SlotsSerializer(slots,many=True)
        return JsonResponse(slots_serializer.data,safe=False)



@csrf_exempt
def getalltechniciansbyserviceApi(request,service=''):
    if request.method=='GET':
        technicians = Technician.objects.filter(service=service)
        tech_serializer = TechnicianSerializer(technicians,many=True)
        return JsonResponse(tech_serializer.data,safe=False)



@csrf_exempt
def gettechcountApi(request):
    if request.method=='GET':
        technicians = Technician.objects.count()
        return JsonResponse({"count": technicians})

@csrf_exempt
def getcustomcountApi(request):
    if request.method=='GET':
        customer = Customer.objects.count()
        return JsonResponse({"count": customer})

@csrf_exempt
def getworkreqApi(request):
    if request.method=='GET':
        work = WorkRequest.objects.count()
        return JsonResponse({"count": work})

@csrf_exempt
def getservicecountApi(request):
    if request.method=='GET':
        service = Service.objects.count()
        return JsonResponse({"count": service})


@csrf_exempt
def gettechnicianEarningApi(request,id):
    if request.method=='GET':
        works=WorkRequest.objects.filter(technician=id).filter(payed=True).aggregate(Sum('cost'))
        work_list=list(works.values())
        for n in work_list:
            total_earning = n
            return JsonResponse({"count":total_earning})

@csrf_exempt
def gettechnicianJobsCompletedApi(request,id):
    if request.method=='GET':
        works=WorkRequest.objects.filter(technician=id).filter(workstatus='Completed').count()
        return JsonResponse({"count":works})

@csrf_exempt
def gettechnicianJobsNotStartedApi(request,id):
    if request.method=='GET':
        works=WorkRequest.objects.filter(technician=id).filter(workstatus='Not Started').count()
        return JsonResponse({"count":works})

@csrf_exempt
def gettechnicianJobsRejectedApi(request,id):
    if request.method=='GET':
        works=WorkRequest.objects.filter(technician=id).filter(accepted=False).count()
        return JsonResponse({"count":works})



@csrf_exempt
def getcustomerbyidApi(request,id=0):
    if request.method=='GET':
        customer = Customer.objects.filter(cid=id)
        customer_serializer = CustomerSerializer(customer, many=True)
        return JsonResponse(customer_serializer.data, safe=False) 



@csrf_exempt
def gettechnicianbyidApi(request,id=0):
    if request.method=='GET':
        technician = Technician.objects.filter(tid=id)
        technician_serializer = TechnicianSerializer(technician, many=True)
        return JsonResponse(technician_serializer.data, safe=False) 







@csrf_exempt
def customerregisterApi(request,id=0):
    if request.method=='POST':
        customer_data = JSONParser().parse(request)
        customer_serializer = CustomerSerializer(data=customer_data)
        if Customer.objects.filter(email=customer_data['email']).exists():
            return JsonResponse("Email already exists", safe=False)
        elif customer_serializer.is_valid():
            customer_serializer.save()
            return JsonResponse("Added successfully", safe=False)
        else:
            return JsonResponse("Failed to add",safe=False)

@csrf_exempt
def technicianregisterApi(request,id=0):
    if request.method=='POST':
        technician_data = JSONParser().parse(request)
        technician_serializer = TechnicianSerializer(data=technician_data)
        if Technician.objects.filter(email=technician_data['email']).exists():
            return JsonResponse("Email already exists", safe=False)
        elif technician_serializer.is_valid():
            technician_serializer.save()
            return JsonResponse("Added successfully", safe=False)
        else:
            return JsonResponse("Failed to add",safe=False)

@csrf_exempt
def technicianupdatestatusApi(request,id=0):
    if request.method=='PUT':
        technician_data = JSONParser().parse(request)
        technician = Technician.objects.get(email=technician_data['email'])
        technicianstatusupdate_serializer = TechnicianUpdateStatusSerializer(technician, data=technician_data)
        if technicianstatusupdate_serializer.is_valid():
            technicianstatusupdate_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)

@csrf_exempt
def workrequestregisterApi(request,id=0):
    if request.method=='POST':
        workrequest_data = JSONParser().parse(request)
        print(workrequest_data)
        workrequest_serializer = WorkPostRequestSerializer(data=workrequest_data)
        print(workrequest_serializer)
        if workrequest_serializer.is_valid():
            workrequest_serializer.save()
            return JsonResponse("Added successfully", safe=False)
        else:
            return JsonResponse("Failed to add",safe=False)

@csrf_exempt
def workrequestgetallApi(request,id=0):
    if request.method=='GET':
        workrequest = WorkRequest.objects.all()
        workrequest_serializer = WorkRequestSerializer(workrequest,many=True)
        return JsonResponse(workrequest_serializer.data,safe=False)
        
@csrf_exempt
def workrequestgetallbyusercompletedApi(request,id=0):
    if request.method=='GET':
        workrequest = WorkRequest.objects.filter(user=id).filter(workstatus='Completed')
        workrequest_serializer = WorkRequestSerializer(workrequest, many=True)
        return JsonResponse(workrequest_serializer.data, safe=False)

@csrf_exempt
def workrequestgetallbyusernotcompletedApi(request,id=0):
    if request.method=='GET':
        workrequest = WorkRequest.objects.filter(user=id).exclude(workstatus='Completed')
        workrequest_serializer = WorkRequestSerializer(workrequest, many=True)
        return JsonResponse(workrequest_serializer.data, safe=False)



@csrf_exempt
def workrequestgetallbyuserApi(request,id=0):
    if request.method=='GET':
        workrequest = WorkRequest.objects.filter(user=id)
        workrequest_serializer = WorkRequestSerializer(workrequest, many=True)
        return JsonResponse(workrequest_serializer.data, safe=False)

@csrf_exempt
def getservicebyidApi(request,id=0):
    if request.method=='GET':
        service = Service.objects.get(sid=id)
        get_service =service.service
        return JsonResponse(get_service, safe=False)

@csrf_exempt
def workrequestgetallbytechnicianApi(request,id=0):
    if request.method=='GET':
        workrequest = WorkRequest.objects.filter(technician=id)
        workrequest_serializer = WorkRequestSerializer(workrequest, many=True)
        return JsonResponse(workrequest_serializer.data, safe=False)



@csrf_exempt
def workrequestgetallbyuserstatusApi(request,id=0):
    if request.method=='GET':
        workrequest_data = JSONParser().parse(request)
        workrequest = WorkRequest.objects.filter(user=workrequest_data['user']).filter(workstatus=workrequest_data['workstatus'])
        workrequest_serializer = WorkRequestSerializer(workrequest, many=True)
        return JsonResponse(workrequest_serializer.data, safe=False)

@csrf_exempt
def workrequestgetallbystatusApi(request,id=0):
    if request.method=='GET':
        workrequest_data = JSONParser().parse(request)
        workrequest = WorkRequest.objects.filter(workstatus=workrequest_data['workstatus'])
        workrequest_serializer = WorkRequestSerializer(workrequest, many=True)
        return JsonResponse(workrequest_serializer.data, safe=False)

@csrf_exempt
def updateworkstatusApi(request,id=0):
    if request.method=='PUT':
        workrequest_data = JSONParser().parse(request)
        workrequest = WorkRequest.objects.get(wid=workrequest_data['wid'])
        workrequest_serializer = WorkRequestUpdateWorkStatusSerializer(workrequest,data=workrequest_data)
        if workrequest_serializer.is_valid():
            workrequest_serializer.save()
            return JsonResponse("Update successfully", safe=False)
        else:
            return JsonResponse("Failed to Update",safe=False)

@csrf_exempt
def updatepaymentApi(request,id=0):
    if request.method=='PUT':
        workrequest_data = JSONParser().parse(request)
        workrequest = WorkRequest.objects.get(wid=workrequest_data['wid'])
        workrequest_serializer = WorkRequestPaymentSerializer(workrequest,data=workrequest_data)
        if workrequest_serializer.is_valid():
            workrequest_serializer.save()
            return JsonResponse("Update successfully", safe=False)
        else:
            return JsonResponse("Failed to Update",safe=False)

@csrf_exempt
def updatecostApi(request,id=0):
    if request.method=='PUT':
        workrequest_data = JSONParser().parse(request)
        workrequest = WorkRequest.objects.get(wid=workrequest_data['wid'])
        workrequest_serializer = WorkRequestCostSerializer(workrequest,data=workrequest_data)
        if workrequest_serializer.is_valid():
            workrequest_serializer.save()
            return JsonResponse("Update successfully", safe=False)
        else:
            return JsonResponse("Failed to Update",safe=False)

@csrf_exempt
def updateacceptanceApi(request,id=0):
    if request.method=='PUT':
        workrequest_data = JSONParser().parse(request)
        workrequest = WorkRequest.objects.get(wid=workrequest_data['wid'])
        workrequest_serializer = WorkRequestAcceptanceSerializer(workrequest,data=workrequest_data)
        if workrequest_serializer.is_valid():
            workrequest_serializer.save()
            return JsonResponse("Update successfully", safe=False)
        else:
            return JsonResponse("Failed to Update",safe=False)

@csrf_exempt
def updateratingApi(request,id=0):
    if request.method=='PUT':
        workrequest_data = JSONParser().parse(request)
        workrequest = WorkRequest.objects.get(wid=workrequest_data['wid'])
        workrequest_serializer = WorkRequestRatingSerializer(workrequest,data=workrequest_data)
        if workrequest_serializer.is_valid():
            workrequest_serializer.save()
            return JsonResponse("Update successfully", safe=False)
        else:
            return JsonResponse("Failed to Update",safe=False)


@csrf_exempt
def changeadminpasswordApi(request,id=0):
    if request.method=='PUT':
        adminpcdata = JSONParser().parse(request)
        if Admin.objects.filter(email=adminpcdata['email']).exists():
            changep = Admin.objects.get(email=adminpcdata['email'])  
            changepserializer = AdminChangePasswordSerializer(changep,data=adminpcdata)
            if changepserializer.is_valid():
                changepserializer.save()
                return JsonResponse("Password Changed", safe=False)
            else:
                return JsonResponse("Failed to Update",safe=False)
        else:
            return JsonResponse("Wrong mail id",safe=False)

@csrf_exempt
def verifyadminpasswordApi(request,id=0):
    if request.method=='POST':
        adminvpcdata = JSONParser().parse(request)
        changep = Admin.objects.get(email=adminvpcdata['email'])
        if adminvpcdata['password'] == changep.password:
            return JsonResponse("Password Found",safe=False)
        else:
            return JsonResponse(" Password Miss Match Found", safe=False)
        
@csrf_exempt
def changetechpasswordApi(request,id=0):
    if request.method=='PUT':
        techpcdata = JSONParser().parse(request)
        if Technician.objects.filter(email=techpcdata['email']).exists():
            changep = Technician.objects.get(email=techpcdata['email'])  
            changepserializer = TechnicianChangePasswordSerializer(changep,data=techpcdata)
            if changepserializer.is_valid():
                changepserializer.save()
                return JsonResponse("Password Changed", safe=False)
            else:
                return JsonResponse("Failed to Update",safe=False)
        else:
            return JsonResponse("Wrong mail id",safe=False)



@csrf_exempt
def getcustomerbyIdApi(request,id=0):
    if request.method=='GET':
        customer = Customer.objects.filter(cid=id)
        customer_serializer = CustomerSerializer(customer, many=True)
        return JsonResponse(customer_serializer.data, safe=False)



@csrf_exempt
def verifytechpasswordApi(request,id=0):
    if request.method=='POST':
        techvpcdata = JSONParser().parse(request)
        changep = Technician.objects.get(email=techvpcdata['email'])
        if techvpcdata['password'] == changep.password:
            return JsonResponse("Password Found",safe=False)
        else:
            return JsonResponse(" Password Miss Match Found", safe=False)


@csrf_exempt
def verifycustpasswordApi(request,id=0):
    if request.method=='POST':
        cuvpcdata = JSONParser().parse(request)
        changep = Customer.objects.get(email=cuvpcdata['email'])
        if cuvpcdata['password'] == changep.password:
            return JsonResponse("Password Found",safe=False)
        else:
            return JsonResponse(" Password Miss Match Found", safe=False)      

@csrf_exempt
def changecupasswordApi(request,id=0):
    if request.method=='PUT':
        custpcdata = JSONParser().parse(request)
        if Customer.objects.filter(email=custpcdata['email']).exists():
            changep = Customer.objects.get(email=custpcdata['email'])  
            changepserializer = CustomerChangePasswordSerializer(changep,data=custpcdata)
            if changepserializer.is_valid():
                changepserializer.save()
                return JsonResponse("Password Changed", safe=False)
            else:
                return JsonResponse("Failed to Update",safe=False)
        else:
            return JsonResponse("Wrong mail id",safe=False)

@csrf_exempt
def Savefile(request):
    file=request.FILES['file']
    file_name=default_storage.save(file.name,file)
    return JsonResponse(file_name,safe=False)




