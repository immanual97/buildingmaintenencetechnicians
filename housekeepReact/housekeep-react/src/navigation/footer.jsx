import { useNavigate } from 'react-router-dom';
export const Footer = () => {
  const navigate = useNavigate();
  const navigation = (url) => {
    navigate(url);
  };

  function loggedin() {
    return sessionStorage.getItem('authenticated');
  }
  return (
    <div>
      <div className='bg-black w-full flex'>
        <p
          className='text-white px-3 py-4  cursor-pointer text-sm'
          onClick={() => {
            navigation('/');
          }}
        >
          home
        </p>

        {loggedin() && (
          <p
            className='text-white px-3 py-4  cursor-pointer text-sm'
            onClick={() => {
              navigation('/profile');
            }}
          >
            profile
          </p>
        )}

        <div className='text-white py-4 text-sm ml-auto flex'>
          <p className='text-xl text-white'>©</p>
          <p className='text-xl  text-white'>immanual jose</p>
        </div>
        <p className='text-white py-4 text-sm ml-auto'>2017 - 2022</p>
        <p className='text-white py-4 text-sm ml-auto float-right px-4'>
          1.0.0
        </p>
      </div>
    </div>
  );
};
