import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { Button, TextField } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Footer } from '../../navigation/footer';
import { Header } from '../../navigation/header';
import { Sidenav } from '../../navigation/sidenav';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import Alert from '@mui/material/Alert';
import {
  getAllTechnicians,
  modifyTechnicians,
  deleteTechnician,
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

export const TechnicianDetails = () => {
  const [deletemodal, setDeletemodal] = useState(false);
  const [editmodal, setEditmodal] = useState(false);
  const [techid, setTechId] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [status, setStatus] = useState('');
  const [rating, setRating] = useState('');
  const [success, setSuccess] = useState(false);
  const [editsuccess, setEditSuccess] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTechnicians());
  }, []);
  const technicians = useSelector((state) => state.profile.TechnicianDetails);

  const handleEditClick = (_event, _parms) => {
    console.log('Edit clicked');
    setEditmodal(true);
    setTechId(_parms.row.id);
    setFname(_parms.row.fname);
    setLname(_parms.row.lname);
    setEmail(_parms.row.email);
    setService(_parms.row.service);
    setStatus(_parms.row.status);
    setRating(_parms.row.rating);
  };

  const handleDeleteClick = (_event, _parms) => {
    setTechId(_parms.row.id);
    setDeletemodal(true);
  };

  const handleDeleteTechnician = async () => {
    console.log(techid);
    await dispatch(deleteTechnician(techid));
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setDeletemodal(false);
    }, 3000);
    dispatch(getAllTechnicians());
  };

  const handleEditTechnician = async () => {
    const technician = formik.values;
    console.log(technician);
    await dispatch(modifyTechnicians(technician));
    setEditSuccess(true);
    setTimeout(() => {
      setEditSuccess(false);
      setEditmodal(false);
    }, 3000);
    dispatch(getAllTechnicians());
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 30 },
    { field: 'fname', headerName: 'First name', width: 100 },
    { field: 'lname', headerName: 'Last name', width: 100 },
    {
      field: 'email',
      headerName: 'Email',
      width: 180,
    },
    { field: 'service', headerName: 'Service', width: 100 },
    { field: 'status', headerName: 'Status', width: 70 },
    { field: 'rating', headerName: 'Rating on 10', width: 70 },
    {
      field: 'edit',
      headerName: 'Action',
      width: 80,
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
      width: 80,
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

  const detailsRows = technicians?.map((technicians_, index) => {
    return {
      id: technicians_.tid,
      fname: technicians_.fname,
      lname: technicians_.lname,
      email: technicians_.email,
      service: technicians_.service,
      status: technicians_.status,
      rating: technicians_.overallrating,
    };
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      tid: techid,
      fname: fname,
      lname: lname,
      email: email,
      service: service,
      status: Number(status),
      overallrating: Number(rating),
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
      <Header />
      <div className='flex'>
        <Sidenav />
        <div className='w-9/12 px-5 pt-10 h-fit'>
          <div className='border-2 border-black p-10 pb-10'>
            <p className='text-xl text-center py-10 '>Technician Details</p>
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
                  onClick={handleDeleteTechnician}
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
              <TextField
                label='Service'
                size='small'
                name='service'
                defaultValue={service}
                onChange={formik.handleChange}
                variant='outlined'
                fullWidth
                sx={{ mb: 2 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label='Status'
                size='small'
                name='status'
                type='number'
                defaultValue={status}
                onChange={formik.handleChange}
                variant='outlined'
                fullWidth
                sx={{ mb: 2 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label='Overall Rating'
                size='small'
                name='overallrating'
                type='number'
                defaultValue={rating}
                onChange={formik.handleChange}
                variant='outlined'
                fullWidth
                sx={{ mb: 2 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </DialogContent>
          <DialogActions>
            {/*Save button with Loading circular progress  */}
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ m: 1, position: 'relative' }}>
                <Button
                  onClick={handleEditTechnician}
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
