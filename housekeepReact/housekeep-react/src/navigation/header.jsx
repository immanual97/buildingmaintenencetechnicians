import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Logout } from '@mui/icons-material';
import { useState } from 'react';

export const Header = () => {
  const navigate = useNavigate();
  const navigation = (url) => {
    navigate(url);
  };

  const logout = () => {
    console.log('clicked');
    sessionStorage.clear();
    navigation('/sign-in');
  };

  function loggedin() {
    return sessionStorage.getItem('authenticated');
  }

  return (
    <div>
      <div className='bg-black w-full flex'>
        <p
          className='text-white px-8 py-4 hover:bg-white hover:text-black cursor-pointer'
          onClick={() => {
            navigation('/');
          }}
        >
          Home
        </p>
        <p
          className='text-white px-8 py-4 hover:bg-white hover:text-black cursor-pointer'
          onClick={() => {
            navigation('/contact');
          }}
        >
          Contacts
        </p>
        <p
          className='text-white px-8 py-4 hover:bg-white hover:text-black cursor-pointer'
          onClick={() => {
            navigation('/about');
          }}
        >
          About Us
        </p>
        {loggedin() && (
          <>
            <p
              className='text-white px-8 py-4 hover:bg-white hover:text-black cursor-pointer'
              onClick={() => {
                navigation('/profile');
              }}
            >
              <AccountCircleIcon className='mr-2' />
              Profile
            </p>
            <button
              className='text-white px-4 py-4 hover:bg-white hover:text-black cursor-pointer'
              onClick={logout}
            >
              <LogoutIcon className='mr-2' />
              Logout
            </button>
          </>
        )}

        {!loggedin() && (
          <p
            className='text-white px-4 py-4 hover:bg-white hover:text-black cursor-pointer'
            onClick={() => {
              navigation('/sign-in');
            }}
          >
            <LoginIcon className='mr-2' />
            Login
          </p>
        )}
      </div>
    </div>
  );
};
