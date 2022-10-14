import Imag1 from '../assets/img/img1.jpg';
import Imag2 from '../assets/img/s1.png';
import Imag3 from '../assets/img/s3.png';
import Imag4 from '../assets/img/s4.png';
import Imag5 from '../assets/img/img2.jpg';
import Imag6 from '../assets/img/img4.jpg';
import { Header } from '../navigation/header';
import { Footer } from '../navigation/footer';
export const Home = () => {
  return (
    <div className='w-full'>
      <Header />
      <div className='w-full block md:flex'>
        <img src={Imag1} className='md:w-1/2 w-full'></img>
        <p className='text-white font-bold text-2xl bg-blue-800 px-3 py-8 text-justify my-auto'>
          Many homeowners will say that it is hard to find a reliable,
          professional home repair person. With nearly 200 locations across the
          State, you can trust your local. Our team of home improvement
          professionals to care for your home. There are many reasons why
          calling us is the best choice for when anything needs to be done at
          your home.
        </p>
      </div>
      <div className=''>
        <div className='bg-black text-center text-white px-3 py-3'>
          <p className='text-3xl'>Only few steps to follow </p>
        </div>
      </div>
      <div className=' grid grid-cols-3 mb-5 mt-5'>
        <div className='mx-auto'>
          <img src={Imag2} alt='' />
          <h3 className='font-bold text-2xl text-center'>
            Choose your Service
          </h3>
        </div>

        <div className='mx-auto'>
          <img className='' src={Imag3} alt='' />
          <h3 className='font-bold text-2xl text-center'>Make work Request</h3>
        </div>

        <div className='mx-auto'>
          <img className='' src={Imag4} alt='' />
          <h3 className='font-bold text-2xl text-center'>Complete Service</h3>
        </div>
      </div>

      <div>
        <h2 className='bg-blue-800 text-3xl font-bold text-white px-3 py-4 mt-5 mb-5 text-center'>
          Choose Techncian on the basis of Rating
        </h2>

        <div className='w-full'>
          <div className='w-full lg:flex md:flex'>
            <p className='text-white font-bold text-2xl bg-blue-800 px-3 py-8 text-justify my-auto'>
              we have a responsive, professional approach to customer service or
              because we hire quality technicians with an average 10 years’
              experience in the field. Maybe it’s because our technicians are
              accountable to us and to you . Maybe it’s because we have a
              variety of skills for all types of work. We’re the go-to solution
              for homeowners who need skilled labor and reliability to get
              things done quickly and correctly. We also guarantee our
              workmanship.
            </p>

            <img className='md:w-1/2 w-full' src={Imag5} alt='' />
          </div>
        </div>
      </div>

      <div>
        <h2 className='text-white font-bold text-3xl bg-blue-800 px-3 py-8 text-center my-auto mb-5 mt-5 '>
          We will accept your request and send a Technician
        </h2>
      </div>

      <div className='w-full lg:flex md:flex sm:bloc k'>
        <div className='lg:w-1/2 md:w-1/2 h-full sm:w-full w-full'>
          <img className='img-center' src={Imag6} alt='' />
        </div>

        <div className='lg:w-1/2 md:w-1/2 h-auto sm:w-full w-full my-auto'>
          <p className='text-white font-bold text-3xl bg-blue-800 px-8 py-8 text-justify rounded-full  '>
            How We work?
          </p>
          <div className='pl-14'>
            <p className='text-blue-800 font-bold text-2xl  px-3 py-8 text-justify ml-5 '>
              1.Scheduling
            </p>
            <p className='text-blue-800 font-bold text-2xl  px-3 py-8 text-justify ml-5'>
              2.Arrival
            </p>
            <p className='text-blue-800 font-bold text-2xl  px-3 py-8 text-justify ml-5 '>
              3.Work
            </p>
            <p className='text-blue-800 font-bold text-2xl  px-3 py-8 text-justify ml-5'>
              4.Payment
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
