import { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { setSnackbarStatus } from '@/store/index';
import * as Yup from 'yup';
import { Button, SvgIcon, Select, MenuItem, Dialog, Stack, DialogActions, DialogContent, DialogTitle, TextField, Typography, InputLabel, FormControl } from '@mui/material';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { addCustomer } from '@/api/customers';

export default function FormDialog({fetchCustomers}) {
  const dispatch = useDispatch();
  const [isModalOpen, setModalStatus] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: 'test@test.com',
      name: 'test',
      avatar: 'dpgc',
      address: '{}',
      phoneNumber: '98765432',
      submit: null
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      name: Yup
        .string()
        .max(255)
        .required('Name is required'),
      address: Yup
        .string()
        .max(255)
        .required('Home address is required'),
      phoneNumber: Yup
        .string()
        .max(50)
        .required('Phone number is required'),
    }),
    onSubmit: async (values, helpers) => {
      try {
        let { email, name, avatar, address, phoneNumber } = values;
        const result = await addCustomer(address, avatar, email, name, phoneNumber);
        dispatch(setSnackbarStatus({ 'isOpen': true, 'message': result.message, 'severity': 'success' })); 
        closeModal();
        formik.resetForm({
          values: {
            email: '',
            name: '',
            avatar: '',
            address: '',
            phoneNumber: '',
          },
        });
        fetchCustomers();
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });

  const openModal = () => setModalStatus(true);
  const closeModal = () => setModalStatus(false);

  return (
    <>
      <Button 
        startIcon={(
            <SvgIcon fontSize="small">
                <PlusIcon />
            </SvgIcon>
        )}
        sx={{
            marginRight: "20px"
        }}
        variant="contained" 
        onClick={openModal}
      >
        Add
      </Button>
      <Dialog
        open={isModalOpen}
        onClose={closeModal}
      >
        <form
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <DialogTitle>New Customer</DialogTitle>
          <DialogContent>
            <Stack spacing={3}>
                  <TextField
                    error={!!(formik.touched.name && formik.errors.name)}
                    fullWidth
                    helperText={formik.touched.name && formik.errors.name}
                    label="Name"
                    name="name"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                  <TextField
                    error={!!(formik.touched.email && formik.errors.email)}
                    fullWidth
                    helperText={formik.touched.email && formik.errors.email}
                    label="Email Address"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="email"
                    value={formik.values.email}
                  />
                  <FormControl>
                    <InputLabel id="demo-simple-select-autowidth-label">Avatar</InputLabel>
                    <Select
                      fullWidth
                      value={formik.values.avatar}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      label="Avatar"
                      name="avatar"
                    >
                      <MenuItem value="dpgc">Dead Pixels Ghost Club</MenuItem>
                      <MenuItem value="khk">Koala Hash Klub</MenuItem>
                      <MenuItem value="herd">The Herd</MenuItem>
                      <MenuItem value="skult">Skultz</MenuItem>
                      <MenuItem value="hmky">Hedera Monkey</MenuItem>
                      <MenuItem value="adsc">After Dark Social Club</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    error={!!(formik.touched.address && formik.errors.address)}
                    fullWidth
                    helperText={formik.touched.address && formik.errors.address}
                    label="Address"
                    name="address"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.address}
                  />
                  <TextField
                    error={!!(formik.touched.phoneNumber && formik.errors.phoneNumber)}
                    fullWidth
                    helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                    label="Phone Number"
                    name="phoneNumber"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                  />
              </Stack>
              {formik.errors.submit && (
                <Typography
                  color="error"
                  sx={{ mt: 1 }}
                  variant="body2"
                >
                  {formik.errors.submit}
                </Typography>
              )}
          </DialogContent>
          <DialogActions>
            <Button onClick={closeModal}>Cancel</Button>
            <Button type="submit">Add</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}