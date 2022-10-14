import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { Button, TextField } from '@mui/material';
import Alert from '@mui/material/Alert';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Footer } from '../../navigation/footer';
import { Header } from '../../navigation/header';
import { Sidenav } from '../../navigation/sidenav';

import {
  deleteCustomers,
  getAllCustomers,
  modifyCustomers,
} from '../profile.slice';

import { Cancel } from '@mui/icons-material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { useFormik } from 'formik';

export const CustomerDetails = () => {
  const [deletemodal, setDeletemodal] = useState(false);
  const [editmodal, setEditmodal] = useState(false);
  const [custid, setCustId] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [editsuccess, setEditSuccess] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCustomers());
  }, []);
  const customers = useSelector((state) => state.profile.CustomerDetails);

  const handleEditClick = (_event, _parms) => {
    console.log('Edit clicked');
    setEditmodal(true);
    setCustId(_parms.row.id);
    setFname(_parms.row.fname);
    setLname(_parms.row.lname);
    setEmail(_parms.row.email);
    console.log(_parms.row);
  };

  const handleDeleteClick = (_event, _parms) => {
    setId(_parms.row.id);
    setDeletemodal(true);
  };

  const handleDeleteCustomer = async () => {
    await dispatch(deleteCustomers(custid));
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setDeletemodal(false);
    }, 3000);
    dispatch(getAllCustomers());
  };

  const handleEditCustomer = async () => {
    const customer = formik.values;
    await dispatch(modifyCustomers(customer));
    setEditSuccess(true);
    setTimeout(() => {
      setEditSuccess(false);
      setEditmodal(false);
    }, 3000);
    dispatch(getAllCustomers());
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'fname', headerName: 'First name', width: 130 },
    { field: 'lname', headerName: 'Last name', width: 130 },
    {
      field: 'email',
      headerName: 'Email',
      width: 180,
    },
    {
      field: 'edit',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <Button
            variant={'contained'}
            onClick={(event) => {
              handleEditClick(event, params);
            }}
            color='primary'
          >
            <EditIcon className='' />
          </Button>
        );
      },
    },
    {
      field: 'disble',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <Button
            variant={'contained'}
            onClick={(event) => {
              handleDeleteClick(event, params);
            }}
            color='error'
          >
            <DeleteIcon className='' />
          </Button>
        );
      },
    },
  ];

  const detailsRows = customers?.map((customers_, index) => {
    return {
      id: customers_.cid,
      fname: customers_.fname,
      lname: customers_.lname,
      email: customers_.email,
    };
  });

  //formik is for validation
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      cid: custid,
      fname: fname,
      lname: lname,
      email: email,
    },
  });

  /* Handle error in the Email */
  const handleEmailError = (_fieldName) => {
    let pattern =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!formik.values.email.match(pattern)) {
      return true;
    }
  };

  /* Handle the helper text in Email */
  const handleEmailHelperText = (_helperText) => {
    let pattern =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!formik.values.email.match(pattern)) {
      return _helperText;
    }
  };

  return (
    <div className='w-full h-auto'>
      {/* <Header /> */}
      <Header />
      <div className='flex'>
        <Sidenav />
        <div className='w-9/12 px-5 pt-10 h-fit'>
          <div className='border-2 border-black p-10 pb-10'>
            <p className='text-xl text-center py-10 '>Customer Details</p>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={detailsRows}
                columns={columns}
                components={{
                  Toolbar: GridToolbar,
                }}
                disableSelectionOnClick
                pageSize={5}
                rowsPerPageOptions={[5]}
                initialState={{
                  sorting: {
                    sortModel: [{ field: 'id', sort: 'asc' }],
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {deletemodal && (
        <Dialog
          open={deletemodal}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title'>
            {'Confirm action'}
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={() => {
                setDeletemodal(false);
              }}
              sx={{
                mr: 1,
                display: {
                  position: 'absolute',
                  top: 12,
                  right: 0,
                  borderRadius: 50,
                  width: 50,
                  height: 50,
                },
              }}
            >
              <CloseOutlinedIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              Are you sure you want to delete customer?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/*Save button with Loading circular progress  */}
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ m: 1, position: 'relative' }}>
                <Button
                  onClick={handleDeleteCustomer}
                  type='submit'
                  className='bg-[red] disabled:opacity-75 disabled:text-white '
                  sx={{
                    bgcolor: '#2e3a91',
                    px: 4,
                    borderRadius: 6,
                    color: 'white',
                    py: 1,
                    '&:hover': { bgcolor: '#1976D2', color: 'white' },
                    '&:disabled': { bgcolor: '#6b74b3', color: 'white' },
                  }}
                >
                  <p className='font-normal text-base '>
                    <DeleteIcon
                      sx={{
                        fontSize: '20px',
                        marginRight: '3px',
                      }}
                    />
                    Delete
                  </p>
                </Button>
              </Box>

              <Button
                variant='outlined'
                onClick={() => {
                  setDeletemodal(false);
                }}
                sx={{
                  ml: 4,
                  borderRadius: 6,
                  color: 'black',
                  backgroundColor: '#ffffff',
                  borderColor: '#212121',
                  my: 1,

                  '&:hover': {
                    bgcolor: '#EEEEEE',
                    color: 'black',
                    borderColor: '#212121',
                  },
                }}
                endIcon={<Cancel />}
              >
                cancel
              </Button>
            </Box>
          </DialogActions>
          {success && <Alert>Deleted </Alert>}
        </Dialog>
      )}

      {editmodal && (
        <Dialog
          open={editmodal}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title'>
            {'Confirm action'}
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={() => {
                setEditmodal(false);
              }}
              sx={{
                mr: 1,
                display: {
                  position: 'absolute',
                  top: 12,
                  right: 0,
                  borderRadius: 50,
                  width: 50,
                  height: 50,
                },
              }}
            >
              <CloseOutlinedIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <div>
              <TextField
                label='First Name'
                name='fname'
                defaultValue={fname}
                onChange={formik.handleChange}
                size='small'
                variant='outlined'
                fullWidth
                sx={{ mb: 2, mt: 2 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                name='lname'
                defaultValue={lname}
                onChange={formik.handleChange}
                label='Last Name'
                size='small'
                variant='outlined'
                fullWidth
                sx={{ mb: 2 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label='Email'
                size='small'
                name='email'
                defaultValue={email}
                onChange={formik.handleChange}
                variant='outlined'
                fullWidth
                sx={{ mb: 2 }}
                InputLabelProps={{
                  shrink: true,
                }}
                helperText={handleEmailHelperText(
                  'Invalid Format Check All Characters'
                )}
                error={handleEmailError('email')}
              />
            </div>
          </DialogContent>
          <DialogActions>
            {/*Save button with Loading circular progress  */}
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ m: 1, position: 'relative' }}>
                <Button
                  onClick={handleEditCustomer}
                  type='submit'
                  className='bg-[red] disabled:opacity-75 disabled:text-white '
                  sx={{
                    bgcolor: '#2e3a91',
                    px: 4,
                    borderRadius: 6,
                    color: 'white',
                    py: 1,
                    '&:hover': { bgcolor: '#1976D2', color: 'white' },
                    '&:disabled': { bgcolor: '#6b74b3', color: 'white' },
                  }}
                >
                  <p className='font-normal text-base '>
                    <SaveIcon
                      sx={{
                        fontSize: '20px',
                        marginRight: '3px',
                      }}
                    />
                    Save
                  </p>
                </Button>
              </Box>

              <Button
                variant='outlined'
                onClick={() => {
                  setEditmodal(false);
                }}
                sx={{
                  ml: 4,
                  borderRadius: 6,
                  color: 'black',
                  backgroundColor: '#ffffff',
                  borderColor: '#212121',
                  my: 1,

                  '&:hover': {
                    bgcolor: '#EEEEEE',
                    color: 'black',
                    borderColor: '#212121',
                  },
                }}
                endIcon={<Cancel />}
              >
                cancel
              </Button>
            </Box>
          </DialogActions>
          {editsuccess && <Alert>Updated</Alert>}
        </Dialog>
      )}
    </div>
  );
};
