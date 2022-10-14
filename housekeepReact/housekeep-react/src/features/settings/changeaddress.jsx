import { Sidenav } from '../../navigation/sidenav';
import { Header } from '../../navigation/header';
import { Footer } from '../../navigation/footer';
import SaveIcon from '@mui/icons-material/Save';
import { TextField } from '@mui/material';
export const ChangeAddress = () => {
  return (
    <div className='w-full min-h-screen'>
      <Header />
      <div className='flex'>
        <Sidenav />
        <div className='w-9/12 px-5 pt-10 h-fit'>
          <div className='border-2 border-black p-10 pb-10'>
            <p className='text-xl text-center py-10 '>Change Address</p>
            <div className='flex mb-10'>
              <p className='text-xl pl-10 font-semibold py-2 pr-5'>
                Current Address
              </p>
              <TextField
                type='text'
                className='px-5 py-2 bg-white tetx-black w-3/4'
                label='Current Address'
                placeholder='Current Address'
                disabled
              />
            </div>
            <div className='flex mb-10'>
              <p className='text-xl pl-10 pr-5 font-semibold mr-6 py-2'>
                New Address{' '}
              </p>
              <TextField
                type='text'
                className='px-5 py-2 bg-white tetx-black w-3/4'
                label='New Address'
                placeholder='New Address'
              />
            </div>
            <button
              className='bg-blue-800 text-white px-4 py-3 ml-48 rounded-full hover:bg-blue-500 disabled:bg-blue-300 text-xl'
              disabled={true}
            >
              <SaveIcon className='mr-2' />
              Save
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
