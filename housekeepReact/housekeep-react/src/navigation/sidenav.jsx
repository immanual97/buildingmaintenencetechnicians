import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

export const Sidenav = () => {
  const navigate = useNavigate();
  const navigation = (url) => {
    navigate(url);
  };
  function admin() {
    return sessionStorage.getItem('admin');
  }

  function customer() {
    return sessionStorage.getItem('customer');
  }
  function technician() {
    return sessionStorage.getItem('technician');
  }
  const logout = () => {
    console.log('clicked');
    sessionStorage.clear();
    navigation('/sign-in');
  };
  return (
    <div className='w-3/12 min-h-screen bg-white'>
      <div>
        {admin() && (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
              className='text-xl font-semibold px-8 hover:bg-gray-200 cursor-pointer'
            >
              <p className='text-xl font-semibold px-8 hover:bg-gray-200 cursor-pointer'>
                Reports
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p
                className='text-xl font-semibold px-8 py-3 hover:bg-gray-200 cursor-pointer'
                onClick={() => {
                  navigation('/admin-workrequestreport');
                }}
              >
                Work Request
              </p>
              <p
                className='text-xl font-semibold px-8 py-3 hover:bg-gray-200 cursor-pointer'
                onClick={() => {
                  navigation('/admin-customerreport');
                }}
              >
                Customer
              </p>
              <p
                className='text-xl font-semibold px-8 py-3 hover:bg-gray-200 cursor-pointer'
                onClick={() => {
                  navigation('/admin-workpendingreport');
                }}
              >
                Pending Works
              </p>
              <p
                className='text-xl font-semibold px-8 py-3 hover:bg-gray-200 cursor-pointer'
                onClick={() => {
                  navigation('/admin-workscompleted');
                }}
              >
                Works Completed
              </p>
              <p
                className='text-xl font-semibold px-8 py-3 hover:bg-gray-200 cursor-pointer'
                onClick={() => {
                  navigation('/admin-technicianreport');
                }}
              >
                Technician
              </p>
              <p
                className='text-xl font-semibold px-8 py-3 hover:bg-gray-200 cursor-pointer'
                onClick={() => {
                  navigation('/admin-paymentreport');
                }}
              >
                Payment Reports
              </p>
              <p
                className='text-xl font-semibold px-8 py-3 hover:bg-gray-200 cursor-pointer'
                onClick={() => {
                  navigation('/admin-profitreport');
                }}
              >
                Profit Reports
              </p>
            </AccordionDetails>
          </Accordion>
        )}

        {admin() && (
          <Accordion defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
              className='text-xl font-semibold px-8 hover:bg-gray-200 cursor-pointer'
            >
              <p className='text-xl font-semibold px-8 hover:bg-gray-200 cursor-pointer'>
                Admin Options
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p
                className='text-xl font-semibold px-8 py-3 hover:bg-gray-200 cursor-pointer'
                onClick={() => {
                  navigation('/admin-services');
                }}
              >
                Services
              </p>
              <p
                className='text-xl font-semibold px-8 py-3 hover:bg-gray-200 cursor-pointer'
                onClick={() => {
                  navigation('/admin-dashboard');
                }}
              >
                Dashboard
              </p>
              <p
                className='text-xl font-semibold px-8 py-3 hover:bg-gray-200 cursor-pointer'
                onClick={() => {
                  navigation('/admin-feedback');
                }}
              >
                Feedbacks
              </p>
            </AccordionDetails>
          </Accordion>
        )}

        {customer() && (
          <Accordion defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
              className='text-xl font-semibold px-8 hover:bg-gray-200 cursor-pointer'
            >
              <p className='text-xl font-semibold px-8 hover:bg-gray-200 cursor-pointer'>
                Customer
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p
                className='text-xl font-semibold px-8 py-3 hover:bg-gray-200 cursor-pointer'
                onClick={() => {
                  navigation('/newworkrequest');
                }}
              >
                New Work
              </p>
              <p
                className='text-xl font-semibold px-8 py-3 hover:bg-gray-200 cursor-pointer'
                onClick={() => {
                  navigation('/workstatus');
                }}
              >
                Status
              </p>
              <p
                className='text-xl font-semibold px-8 py-3 hover:bg-gray-200 cursor-pointer'
                onClick={() => {
                  navigation('/customerhistory');
                }}
              >
                History
              </p>
              <p
                className='text-xl font-semibold px-8 py-3 hover:bg-gray-200 cursor-pointer'
                onClick={() => {
                  navigation('/feedback');
                }}
              >
                Feedback
              </p>
            </AccordionDetails>
          </Accordion>
        )}

        {technician() && (
          <Accordion defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
              className='text-xl font-semibold px-8 hover:bg-gray-200 cursor-pointer'
            >
              <p className='text-xl font-semibold px-8 hover:bg-gray-200 cursor-pointer'>
                Technician
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p
                className='text-xl font-semibold px-8 py-3 hover:bg-gray-200 cursor-pointer'
                onClick={() => {
                  navigation('/technician-report');
                }}
              >
                View My Report
              </p>
              <p
                className='text-xl font-semibold px-8 py-3 hover:bg-gray-200 cursor-pointer'
                onClick={() => {
                  navigation('/acceptrejectjob');
                }}
              >
                Accept Work
              </p>
              <p
                className='text-xl font-semibold px-8 py-3 hover:bg-gray-200 cursor-pointer'
                onClick={() => {
                  navigation('/customerpayment');
                }}
              >
                Customer Payment
              </p>
              <p
                className='text-xl font-semibold px-8 py-3 hover:bg-gray-200 cursor-pointer'
                onClick={() => {
                  navigation('/setprice');
                }}
              >
                Set Price
              </p>
              <p
                className='text-xl font-semibold px-8 py-3 hover:bg-gray-200 cursor-pointer'
                onClick={() => {
                  navigation('/updateworkstatus');
                }}
              >
                Update Work Request
              </p>
            </AccordionDetails>
          </Accordion>
        )}

        {admin() && (
          <Accordion defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
              className='text-xl font-semibold px-8 hover:bg-gray-200 cursor-pointer'
            >
              <p className='text-xl font-semibold px-8 hover:bg-gray-200 cursor-pointer'>
                Users
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p
                className='text-xl font-semibold px-8 py-3 hover:bg-gray-200 cursor-pointer'
                onClick={() => {
                  navigation('/customerdetails');
                }}
              >
                Customers
              </p>
              <p
                className='text-xl font-semibold px-8 py-3 hover:bg-gray-200 cursor-pointer'
                onClick={() => {
                  navigation('/techniciandetails');
                }}
              >
                Technicians
              </p>
            </AccordionDetails>
          </Accordion>
        )}

        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
            className='text-xl font-semibold px-8 hover:bg-gray-200 cursor-pointer'
          >
            <p className='text-xl font-semibold px-8 hover:bg-gray-200 cursor-pointer'>
              Settings
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p
              className='text-xl font-semibold px-8 py-3 hover:bg-gray-200 cursor-pointer'
              onClick={() => {
                navigation('/changepassword');
              }}
            >
              Change Password
            </p>
            {customer() && (
              <p
                className='text-xl font-semibold px-8 py-3 hover:bg-gray-200 cursor-pointer'
                onClick={() => {
                  navigation('/changeaddress');
                }}
              >
                Change Address
              </p>
            )}
            <p
              className='text-xl font-semibold px-8 py-3 hover:bg-gray-200 cursor-pointer'
              onClick={() => {
                navigation('/changephonenumber');
              }}
            >
              Change Phone
            </p>
            <p
              className='text-xl font-semibold px-8 py-3 hover:bg-gray-200 cursor-pointer'
              onClick={logout}
            >
              Logout
              <LogoutIcon className='ml-4' />
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
