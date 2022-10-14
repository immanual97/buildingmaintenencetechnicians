import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';

import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';


import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { AdloginComponent } from './components/adlogin/adlogin.component';
import { TcloginComponent } from './components/tclogin/tclogin.component';
import { RegisterComponent } from './components/register/register.component';
import { TcregisterComponent } from './components/tcregister/tcregister.component';
import { AdDashboardComponent } from './components/admin-controls/ad-dashboard/ad-dashboard.component';
import { AdTechnicianComponent } from './components/admin-controls/ad-technician/ad-technician.component';
import { AdServicesComponent } from './components/admin-controls/ad-services/ad-services.component';
import { AdWorkrequestComponent } from './components/admin-controls/ad-workrequest/ad-workrequest.component';
import { AdChangepasswordComponent } from './components/admin-controls/ad-changepassword/ad-changepassword.component';
import { TcChangepasswordComponent } from './components/technician-controls/tc-changepassword/tc-changepassword.component';
import { TcPaymentComponent } from './components/technician-controls/tc-payment/tc-payment.component';
import { TcAcceptanceComponent } from './components/technician-controls/tc-acceptance/tc-acceptance.component';
import { TcAddpriceComponent } from './components/technician-controls/tc-addprice/tc-addprice.component';
import { TcChangestatusComponent } from './components/technician-controls/tc-changestatus/tc-changestatus.component';
import { CuChangepasswordComponent } from './components/customer-controls/cu-changepassword/cu-changepassword.component';
import { CuAddressComponent } from './components/customer-controls/cu-address/cu-address.component';
import { CuWorkrequestComponent } from './components/customer-controls/cu-workrequest/cu-workrequest.component';
import { CuHistoryComponent } from './components/customer-controls/cu-history/cu-history.component';
import { CuStatusComponent } from './components/customer-controls/cu-status/cu-status.component';
import { AdAnalysisComponent } from './components/admin-controls/ad-analysis/ad-analysis.component';
import { CuIncompletedworkComponent } from './components/customer-controls/cu-incompletedwork/cu-incompletedwork.component';
import { CuPaymentComponent } from './components/customer-controls/cu-payment/cu-payment.component';
import { CuTransactionPendingComponent } from './components/customer-controls/cu-transaction-pending/cu-transaction-pending.component';
import { TcFindcustomerComponent } from './components/technician-controls/tc-findcustomer/tc-findcustomer.component';
import { TcEarningsComponent } from './components/technician-controls/tc-earnings/tc-earnings.component';
import { CuSearchtechnicianComponent } from './components/customer-controls/cu-searchtechnician/cu-searchtechnician.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    AdloginComponent,
    TcloginComponent,
    RegisterComponent,
    TcregisterComponent,
    AdDashboardComponent,
    AdTechnicianComponent,
    AdServicesComponent,
    AdWorkrequestComponent,
    AdChangepasswordComponent,
    TcChangepasswordComponent,
    TcPaymentComponent,
    TcAcceptanceComponent,
    TcAddpriceComponent,
    TcChangestatusComponent,
    CuChangepasswordComponent,
    CuAddressComponent,
    CuWorkrequestComponent,
    CuHistoryComponent,
    CuStatusComponent,
    AdAnalysisComponent,
    CuIncompletedworkComponent,
    CuPaymentComponent,
    CuTransactionPendingComponent,
    TcFindcustomerComponent,
    TcEarningsComponent,
    CuSearchtechnicianComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2OrderModule,
    NgxPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCdV1SfHiX2L6dH6IXe1spVcOnLeEQpBig'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
