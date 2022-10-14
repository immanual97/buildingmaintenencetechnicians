from django.conf.urls import url
from users import views

from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    url(r'^admincustomer$',views.admincustomerApi),
    url(r'^admincustomer/([0-9]+)$',views.admincustomerApi),
    url(r'^customerupdate',views.admincustomerupdateApi),
    url(r'^adminadmin$',views.adminApi),
    url(r'^adminadmin/([0-9]+)$',views.adminApi),
    url(r'^adminservice$',views.adminserviceApi),
    url(r'^adminservice/([0-9]+)$',views.adminserviceApi),
    url(r'^admintechnician$',views.admintechnicianApi),
    url(r'^admintechnician/([0-9]+)$',views.admintechnicianApi),
    url(r'^adminlogin$',views.adminloginApi),
    url(r'^customerlogin$',views.customerloginApi),
    url(r'^technicianlogin$',views.technicianloginApi),
    url(r'^adminregister$',views.adminregisterApi),
    url(r'^customerregister$',views.customerregisterApi),
    url(r'^technicianregister$',views.technicianregisterApi),
    url(r'^technicianupdatestatus$',views.technicianupdatestatusApi),
    url(r'^workrequestregister$',views.workrequestregisterApi),
    url(r'^workrequestgetall$',views.workrequestgetallApi),
    url(r'^workrequestgetallbyuser$',views.workrequestgetallbyuserApi),
    url(r'^workrequestgetallbyuserstatus$',views.workrequestgetallbyuserstatusApi),
    url(r'^workrequestgetallbystatus$',views.workrequestgetallbystatusApi),
    url(r'^updateworkstatus$',views.updateworkstatusApi),
    url(r'^updatepayment$',views.updatepaymentApi),
    url(r'^updatecost$',views.updatecostApi),
    url(r'^updateacceptance$',views.updateacceptanceApi),
    url(r'^updaterating$',views.updateratingApi),
    url(r'^changeadminpassword',views.changeadminpasswordApi),
    url(r'^verifyadminpassword',views.verifyadminpasswordApi),

    url(r'^getallservices',views.getallservicesApi),
    url(r'^getalllocations',views.getalllocationsApi),
     url(r'^getalllslots',views.getallslotssApi),

    url(r'^changetechpassword',views.changetechpasswordApi),
    url(r'^verifytechpassword',views.verifytechpasswordApi),
    url(r'^workrequestgetallbytechnician/([0-9]+)$',views.workrequestgetallbytechnicianApi),
    url(r'^techidbyemail/(?P<email>[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4})$',views.TechIdApi),
    url(r'^getservicebyid/([0-9]+)$',views.getservicebyidApi),
    
    url(r'^verifycustpassword',views.verifycustpasswordApi),
    url(r'^changecupassword',views.changecupasswordApi),
    url(r'^custidbyemail/(?P<email>[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4})$',views.CustIdApi),
    url(r'^workrequestgetallbyuser/([0-9]+)$',views.workrequestgetallbyuserApi),
    url(r'^workrequestgetallbyusercompleted/([0-9]+)$',views.workrequestgetallbyusercompletedApi),
    url(r'^getcustomerbyid/([0-9]+)$',views.getcustomerbyidApi),
    url(r'^workrequestgetallbyusernotcompleted/([0-9]+)$',views.workrequestgetallbyusernotcompletedApi),
    url(r'^getalltechniciansbyservice/([A-Za-z]+)$',views.getalltechniciansbyserviceApi),

    url(r'^gettechcount',views.gettechcountApi),
    url(r'^getcustomcount',views.getcustomcountApi),
    url(r'^getworkreq',views.getworkreqApi),
    url(r'^getservicecount',views.getservicecountApi),

    url(r'^gettechnicianEarning/([0-9]+)$',views.gettechnicianEarningApi),
    url(r'^gettechnicianJobsCompleted/([0-9]+)$',views.gettechnicianJobsCompletedApi),
    url(r'^gettechnicianJobsNotStarted/([0-9]+)$',views.gettechnicianJobsNotStartedApi),
    url(r'^gettechnicianJobsRejected/([0-9]+)$',views.gettechnicianJobsRejectedApi),

    
    


    url(r'^searchcustomer/([0-9]+)$',views.getcustomerbyIdApi),
    url(r'^searchtechnician/([0-9]+)$',views.gettechnicianbyidApi),


    
    
    url(r'^adminadmin/savefile',views.Savefile)
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)