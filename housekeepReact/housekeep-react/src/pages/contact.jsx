import { Header } from '../navigation/header';
import { Footer } from '../navigation/footer';
export const Contact = () => {
  return (
    <div className='h-screen w-full'>
      <Header />
      <div>
        <div className='bg-blue-900'>
          <p className='text-white text-2xl text-center font-bold pt-20 pb-10'>
            Contact Us
          </p>
          <div className='pt-5'>
            <div className='flex pl-5 pr-5'>
              <div className='w-1/2'>
                <div className='border-2 border-white px-3 py-6 mb-24'>
                  <p className='text-xl text-white text-justify'>
                    This is developed by Immanual Jose as Final Project of IMCA
                    Degree. This is Building Maintenence and Management System.
                    User can contact technicians like painters, plumbers, or
                    electrician etc. The user can book work request to
                    technicians and they can accept or reject the work requets.
                    The technican will charge for your request and a small
                    percentage will be taken for as our servcie cost.{' '}
                  </p>
                </div>
              </div>
              <div className='w-1/2 pl-5'>
                <div className='border-2 border-white'>
                  <p className='text-xl text-white font-semibold text-center px-3 py-9'>
                    You can contact us
                  </p>
                  <p className='px-3 py-3 text-xl text-white text-center'>
                    Mail : imca-130@scmsgroup.org
                  </p>
                  <p className='px-3 py-6 text-xl text-white text-center'>
                    Address: SSTM, Muttom , Aluva
                  </p>
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
