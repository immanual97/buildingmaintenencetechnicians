import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../navigation/footer';

export const Register = () => {
  const navigate = useNavigate();
  const navigation = (url) => {
    navigate(url);
  };
  const [user, setUser] = useState('');
  const handleChange = (event) => {
    setUser(event.target.value);
  };
  return (
    <div className='h-screen w-full'>
      <div className='bg-blue-800 pt-10 pb-20 py-5 px-20'>
        <p className='text-white text-2xl font-bold text-center mb-5'>
          We Welcome to our services. Please Register and Sign in to access our
          services.
        </p>
        <div className='border-2 border-white bg-white rounded-3xl'>
          <p className='text-xl font-bold text-center text-black mb-5 mt-5'>
            Register
          </p>
          <div className='flex mb-5'>
            <p className='text-black font-bold py-3 pr-20 pl-2'>User Type :</p>
            <Select
              labelId='demo-simple-select-label'
              className='w-3/4'
              id='demo-simple-select'
              defaultValue={'customer'}
              onChange={handleChange}
            >
              <MenuItem value={'customer'}>customer</MenuItem>
              <MenuItem value={'technician'}>technician</MenuItem>
            </Select>
          </div>
          <div className='flex mb-5'>
            <p className='text-black font-bold py-3 pr-28 pl-2'>Email :</p>
            <TextField
              type='email'
              className='px-5 py-2 bg-white text-black w-3/4'
              label='Email'
              placeholder='email'
            />
          </div>
          <div className='flex mb-5'>
            <p className='text-black font-bold py-3 pr-16 pl-2 mr-2'>
              First Name :
            </p>
            <TextField
              type='text'
              className='pr-5 py-2 bg-white text-black w-3/4'
              label='First Name'
              placeholder='first name'
            />
          </div>
          <div className='flex mb-5'>
            <p className='text-black font-bold py-3 pr-16 pl-2 mr-2'>
              Last Name :
            </p>
            <TextField
              type='text'
              className='pr-5 py-2 bg-white text-black w-3/4'
              label='Last Name'
              placeholder='last name'
            />
          </div>
          <div className='flex mb-5'>
            <p className='text-black font-bold py-3 pr-20 pl-2'>Password :</p>
            <TextField
              type='password'
              className='px-5 py-2 bg-white tetx-black w-3/4'
              label='Password'
              placeholder='Password'
            />
          </div>
          <div className='flex mb-5'>
            <p className='text-black font-bold py-3 pr-5 pl-2'>
              {' '}
              Confirm Password :
            </p>
            <TextField
              type='password'
              className='px-5 py-2 bg-white tetx-black w-3/4'
              label='Password'
              placeholder='Password'
            />
          </div>
          <div className='w-full mb-5 text-center '>
            <button className='bg-blue-800 text-white px-4 py-2 rounded-full hover:bg-blue-500 '>
              Register
            </button>
            <button
              className='bg-blue-800 text-white px-4 py-2 rounded-full hover:bg-blue-500 ml-2'
              onClick={() => {
                navigation('/sign-in');
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
