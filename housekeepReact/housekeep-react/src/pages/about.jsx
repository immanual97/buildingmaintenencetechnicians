import { Header } from '../navigation/header';
import { Footer } from '../navigation/footer';

export const About = () => {
  return (
    <div className='h-screen w-full'>
      <Header />
      <div>
        <div className='bg-blue-900'>
          <p className='text-white text-2xl text-center font-bold pt-20 pb-10'>
            About
          </p>
          <div className='pt-5 pl-5 pr-5'>
            <div className='block sm:flex w-full'>
              <div className='w-1/2 pb-12'>
                <div className='border-2 border-white px-9 py-9'>
                  <p className='text-xl text-white text-justify'>
                    This is developed by Immanual Jose as Final Project of IMCA
                    Degree. This is Building Maintenence and Management System.
                    User can contact technicians like painters, plumbers, or
                    electrician etc. The user can book work request to
                    technicians and they can accept or reject the work requets.
                    The technican will charge for your request and a small
                    percentage will be taken for as our servcie cost.The admin
                    can view various reports and download them.{' '}
                  </p>
                </div>
              </div>
              <div className='w-1/2 pl-6'>
                <div className='border-2 border-white'>
                  <div className='w-full h-80'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
