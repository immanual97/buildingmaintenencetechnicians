import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Footer } from '../navigation/footer';
import Alert from '@mui/material/Alert';

import { adminLogin } from '../features/profile.slice';

const validationSchema = yup.object({
  email: yup.string('').required('Required'),
  password: yup.string('').required('Required'),
});

export const AdminSignIn = () => {
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const navigate = useNavigate();
  const navigation = (url) => {
    navigate(url);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Login');

    const resp = await dispatch(adminLogin(formik.values));
    console.log('resp', resp.payload);

    if (resp.payload === 1) {
      sessionStorage.setItem('admin', true);
      sessionStorage.setItem('authenticated', true);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
      setTimeout(() => {
        navigation('/profile');
      }, 3000);
    } else {
      setFailure(true);
      setTimeout(() => {
        setFailure(false);
      }, 3000);
    }
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    handleSubmit,
  });

  return (
    <div className=' w-full bg-blue-800 '>
      <div className='min-h-screen pt-32 pb-32 py-5 text-center md:px-56 sm:px-40'>
        <p className='text-white text-2xl font-bold text-center mb-6 pt-1 '>
          We Welcome to our services. Please Sign in to access our services.
        </p>
        <div className='border-2 border-white bg-white rounded-3xl'>
          <p className='text-xl font-bold text-center text-black mb-5 mt-5'>
            Admin Sign In
          </p>
          <form onSubmit={handleSubmit}>
            <div className='flex mb-5'>
              <p className='text-black font-bold py-3 pr-12 pl-2'>Email</p>
              <TextField
                type='email'
                name='email'
                onChange={formik.handleChange}
                helperText={formik.errors.email}
                error={'email' in formik.errors}
                className='px-5 py-2 bg-white tetx-black w-3/4'
                label='Email'
                placeholder='email'
              />
            </div>
            <div className='flex mb-5'>
              <p className='text-black font-bold py-3 pr-5 pl-2'>Password</p>
              <TextField
                type='password'
                name='password'
                onChange={formik.handleChange}
                helperText={formik.errors.password}
                error={'password' in formik.errors}
                className='px-5 py-2 bg-white tetx-black w-3/4'
                label='Password'
                placeholder='Password'
              />
            </div>
            <div className='w-full mb-5 text-center'>
              <button
                disabled={
                  formik.values.email == '' || formik.values.password == ''
                }
                className='bg-blue-800 text-white px-4 py-2 rounded-full hover:bg-blue-500 disabled:bg-blue-300'
                onClick={handleSubmit}
              >
                Login
              </button>
              {success && (
                <Alert variant='filled' severity='success' className='my-2'>
                  Login Success
                </Alert>
              )}
              {failure && (
                <Alert variant='filled' severity='error' className='my-2'>
                  Login failed
                </Alert>
              )}
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
