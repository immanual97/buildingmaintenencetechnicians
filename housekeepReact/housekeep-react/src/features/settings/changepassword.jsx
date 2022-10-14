import { Sidenav } from '../../navigation/sidenav';
import { Header } from '../../navigation/header';
import { Footer } from '../../navigation/footer';
import { TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
export const ChangePassword = () => {
  return (
    <div className='w-full h-auto'>
      <Header />
      <div className='flex'>
        <Sidenav />
        <div className='w-9/12 px-5 pt-10 h-auto'>
          <div className='border-2 border-black p-10 pb-10'>
            <p className='text-xl text-center py-10 '>Change Password</p>
            <div className='flex mb-10'>
              <p className='text-xl pl-14 pr-3 font-semibold py-2'>
                Current Password
              </p>
              <TextField
                type='password'
                className='px-5 py-1  bg-white tetx-black w-3/4'
                label='Current Password'
                placeholder='Current Password'
              />
            </div>
            <div className='flex mb-10'>
              <p className='text-xl  pl-14 pr-3 font-semibold mr-6 py-2'>
                New Password{' '}
              </p>
              <TextField
                type='password'
                className='px-5 py-1 bg-white tetx-black w-3/4'
                label='New Password'
                placeholder='New Password'
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
