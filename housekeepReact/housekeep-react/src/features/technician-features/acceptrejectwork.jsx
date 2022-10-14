import { Sidenav } from '../../navigation/sidenav';
import { Header } from '../../navigation/header';
import { Footer } from '../../navigation/footer';

export const AcceptRejectJob = () => {
  return (
    <div className='w-full h-auto'>
      <Header />
      <div className='flex'>
        <Sidenav />
        <div className='w-9/12 px-5 pt-10 h-fit'>
          <div className='border-2 border-black'>
            <p className='text-xl text-center py-10'>
              Job Requests to be Accepted
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
