import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialStateObject = {
  loading: false,
  loginData: [],
  AdminLoginData: [],
  CustomerDetails: [],
  customer_data: [],
  EditCustomer: [],
  DeleteCustomerResponse: [],
  TechnicianDetails: [],
  technician_data: [],
  EditTechnician: [],
  DeleteTechnicianResponse: [],
  error: '',
};

export const adminLogin = createAsyncThunk(
  'profile/adminLogin',
  (loginData) => {
    return axios
      .post('http://127.0.0.1:8000/adminlogin', loginData)
      .then((response) => response.data);
  }
);

export const customerLogin = createAsyncThunk(
  'profile/customerLogin',
  (loginData) => {
    return axios
      .post('http://127.0.0.1:8000/customerlogin', loginData)
      .then((response) => response.data);
  }
);
export const technicianLogin = createAsyncThunk(
  'profile/technicianLogin',
  (loginData) => {
    return axios
      .post('http://127.0.0.1:8000/technicianlogin', loginData)
      .then((response) => response.data);
  }
);

export const getAllCustomers = createAsyncThunk(
  'profile/getAllCustomers',
  () => {
    return axios
      .get('http://127.0.0.1:8000/admincustomer')
      .then((response) => response.data);
  }
);

export const modifyCustomers = createAsyncThunk(
  'profile/modifyCustomers',
  (customer_data) => {
    return axios
      .put('http://127.0.0.1:8000/customerupdate', customer_data)
      .then((response) => response.data);
  }
);

export const deleteCustomers = createAsyncThunk(
  'profile/deleteCustomers',
  (id) => {
    return axios
      .delete('http://127.0.0.1:8000/admincustomer/' + id)
      .then((response) => response.data);
  }
);

export const getAllTechnicians = createAsyncThunk(
  'profile/getAllTechnicians',
  () => {
    return axios
      .get('http://127.0.0.1:8000/admintechnician')
      .then((response) => response.data);
  }
);

export const modifyTechnicians = createAsyncThunk(
  'profile/modifyTechnicians',
  (technician_data) => {
    return axios
      .put('http://127.0.0.1:8000/admintechnician', technician_data)
      .then((response) => response.data);
  }
);

export const deleteTechnician = createAsyncThunk(
  'profile/deleteTechnician',
  (id) => {
    return axios
      .delete('http://127.0.0.1:8000/admintechnician/' + id)
      .then((response) => response.data);
  }
);

const profileSlice = createSlice({
  name: 'profile',

  initialState: initialStateObject,
  extraReducers: (builder) => {
    /*adminLogin*/
    builder.addCase(adminLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(adminLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.AdminLoginData = action.payload;
      state.error = '';
    });
    builder.addCase(adminLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    /*customerLogin */
    builder.addCase(customerLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(customerLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.CustLoginData = action.payload;
      state.error = '';
    });
    builder.addCase(customerLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    /*technicianLogin */
    builder.addCase(technicianLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(technicianLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.TechLoginData = action.payload;
      state.error = '';
    });
    builder.addCase(technicianLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    /*customers*/
    builder.addCase(getAllCustomers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllCustomers.fulfilled, (state, action) => {
      state.loading = false;
      state.CustomerDetails = action.payload;
      state.error = '';
    });
    builder.addCase(getAllCustomers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    /*editCustomers customers*/
    builder.addCase(modifyCustomers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(modifyCustomers.fulfilled, (state, action) => {
      state.loading = false;
      state.EditCustomerResponse = action.payload;
      state.error = '';
    });
    builder.addCase(modifyCustomers.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    /*deleteCustomers */
    builder.addCase(deleteCustomers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteCustomers.fulfilled, (state, action) => {
      state.loading = false;
      state.DeleteCustomerResponse = action.payload;
      state.error = '';
    });
    builder.addCase(deleteCustomers.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    /*Technician*/
    builder.addCase(getAllTechnicians.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllTechnicians.fulfilled, (state, action) => {
      state.loading = false;
      state.TechnicianDetails = action.payload;
      state.error = '';
    });
    builder.addCase(getAllTechnicians.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    /*editTechnician*/
    builder.addCase(modifyTechnicians.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(modifyTechnicians.fulfilled, (state, action) => {
      state.loading = false;
      state.EditTechnician = action.payload;
      state.error = '';
    });
    builder.addCase(modifyTechnicians.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    /*deleteTechnician*/
    builder.addCase(deleteTechnician.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteTechnician.fulfilled, (state, action) => {
      state.loading = false;
      state.DeleteTechnicianResponse = action.payload;
      state.error = '';
    });
    builder.addCase(deleteTechnician.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default profileSlice.reducer;
