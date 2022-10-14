import { Routes, Route } from 'react-router-dom';
import React from 'react';

import { Home } from './pages/home';
import { SignIn } from './pages/signin';
import { TechSignIn } from './pages/tech-signin';
import { AdminSignIn } from './pages/admin-signin';
import { SignOut } from './pages/signout';
import { Contact } from './pages/contact';
import { About } from './pages/about';
import { Pagenotfound } from './pages/pagenotfound';
import { Register } from './pages/register';
import { Profile } from './features/profile';
import { ChangeAddress } from './features/settings/changeaddress';
import { ChangePassword } from './features/settings/changepassword';
import { ChangePhonenumber } from './features/settings/changephone';
import { CustomerDetails } from './features/users/customerdetails';
import { TechnicianDetails } from './features/users/techniciandetails';
import { CustomerHistory } from './features/customer-features/customerhistory';
import { NewWorkRequest } from './features/customer-features/newworkrequest';
import { WorkStatus } from './features/customer-features/status';
import { Feedback } from './features/customer-features/feedback';
import { AcceptRejectJob } from './features/technician-features/acceptrejectwork';
import { CustomerPayment } from './features/technician-features/customerpay';
import { SetPrice } from './features/technician-features/setprice';
import { UpdateWorkStatus } from './features/technician-features/updateworkstatus';
import { TechnicianReport } from './features/technician-features/technicianreport';
import { CustomerReport } from './features/admin-features/customerreport';
import { Dashboard } from './features/admin-features/dashboard';
import { AdminFeedback } from './features/admin-features/feedbacks';
import { PaymentReport } from './features/admin-features/paymentreport';
import { ProfitReport } from './features/admin-features/profitreport';
import { Services } from './features/admin-features/services';
import { TechnicianReportAdmin } from './features/admin-features/technicianreport';
import { WorkRequestReport } from './features/admin-features/workrequestreport';
import { WorksCompleted } from './features/admin-features/workscompleted';
import { WorkPendingReport } from './features/admin-features/workspending';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={
            <React.Suspense>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path='index'
          element={
            <React.Suspense>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path=''
          element={
            <React.Suspense>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path='pagenotfound'
          element={
            <React.Suspense>
              <Pagenotfound />
            </React.Suspense>
          }
        />
        <Route
          path='*'
          element={
            <React.Suspense>
              <Pagenotfound />
            </React.Suspense>
          }
        />
        <Route
          path='contact'
          element={
            <React.Suspense>
              <Contact />
            </React.Suspense>
          }
        />
        <Route
          path='register'
          element={
            <React.Suspense>
              <Register />
            </React.Suspense>
          }
        />
        <Route
          path='about'
          element={
            <React.Suspense>
              <About />
            </React.Suspense>
          }
        />
        <Route
          path='sign-in'
          element={
            <React.Suspense>
              <SignIn />
            </React.Suspense>
          }
        ></Route>
        <Route
          path='sign-out'
          element={
            <React.Suspense>
              <SignOut />
            </React.Suspense>
          }
        ></Route>
        <Route
          path='profile'
          element={
            <React.Suspense>
              <Profile />
            </React.Suspense>
          }
        ></Route>
        <Route
          path='changeaddress'
          element={
            <React.Suspense>
              <ChangeAddress />
            </React.Suspense>
          }
        ></Route>
        <Route
          path='changepassword'
          element={
            <React.Suspense>
              <ChangePassword />
            </React.Suspense>
          }
        ></Route>
        <Route
          path='changephonenumber'
          element={
            <React.Suspense>
              <ChangePhonenumber />
            </React.Suspense>
          }
        ></Route>
        <Route
          path='customerdetails'
          element={
            <React.Suspense>
              <CustomerDetails />
            </React.Suspense>
          }
        ></Route>
        <Route
          path='techniciandetails'
          element={
            <React.Suspense>
              <TechnicianDetails />
            </React.Suspense>
          }
        ></Route>
        <Route
          path='customerhistory'
          element={
            <React.Suspense>
              <CustomerHistory />
            </React.Suspense>
          }
        ></Route>
        <Route
          path='workstatus'
          element={
            <React.Suspense>
              <WorkStatus />
            </React.Suspense>
          }
        ></Route>
        <Route
          path='newworkrequest'
          element={
            <React.Suspense>
              <NewWorkRequest />
            </React.Suspense>
          }
        ></Route>
        <Route
          path='feedback'
          element={
            <React.Suspense>
              <Feedback />
            </React.Suspense>
          }
        ></Route>
        <Route
          path='acceptrejectjob'
          element={
            <React.Suspense>
              <AcceptRejectJob />
            </React.Suspense>
          }
        ></Route>
        <Route
          path='customerpayment'
          element={
            <React.Suspense>
              <CustomerPayment />
            </React.Suspense>
          }
        ></Route>
        <Route
          path='setprice'
          element={
            <React.Suspense>
              <SetPrice />
            </React.Suspense>
          }
        ></Route>
        <Route
          path='updateworkstatus'
          element={
            <React.Suspense>
              <UpdateWorkStatus />
            </React.Suspense>
          }
        ></Route>
        <Route
          path='technician-report'
          element={
            <React.Suspense>
              <TechnicianReport />
            </React.Suspense>
          }
        ></Route>

        <Route
          path='admin-customerreport'
          element={
            <React.Suspense>
              <CustomerReport />
            </React.Suspense>
          }
        ></Route>
        <Route
          path='admin-dashboard'
          element={
            <React.Suspense>
              <Dashboard />
            </React.Suspense>
          }
        ></Route>
        <Route
          path='admin-feedback'
          element={
            <React.Suspense>
              <AdminFeedback />
            </React.Suspense>
          }
        ></Route>
        <Route
          path='admin-paymentreport'
          element={
            <React.Suspense>
              <PaymentReport />
            </React.Suspense>
          }
        ></Route>
        <Route
          path='admin-profitreport'
          element={
            <React.Suspense>
              <ProfitReport />
            </React.Suspense>
          }
        ></Route>
        <Route
          path='admin-services'
          element={
            <React.Suspense>
              <Services />
            </React.Suspense>
          }
        ></Route>

        <Route
          path='admin-technicianreport'
          element={
            <React.Suspense>
              <TechnicianReportAdmin />
            </React.Suspense>
          }
        ></Route>

        <Route
          path='admin-workrequestreport'
          element={
            <React.Suspense>
              <WorkRequestReport />
            </React.Suspense>
          }
        ></Route>

        <Route
          path='admin-workscompleted'
          element={
            <React.Suspense>
              <WorksCompleted />
            </React.Suspense>
          }
        ></Route>

        <Route
          path='admin-workpendingreport'
          element={
            <React.Suspense>
              <WorkPendingReport />
            </React.Suspense>
          }
        ></Route>
        <Route
          path='techsignin'
          element={
            <React.Suspense>
              <TechSignIn />
            </React.Suspense>
          }
        ></Route>
        <Route
          path='adminsignin'
          element={
            <React.Suspense>
              <AdminSignIn />
            </React.Suspense>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
