import { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { setSnackbarStatus } from '@/store/index';
import * as Yup from 'yup';
import { Button, SvgIcon, Dialog, Stack, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { addCustomer } from '@/api/index.js';
import { format } from 'date-fns';

export default function FormDialog() {
  const dispatch = useDispatch();
  const [isModalOpen, setModalStatus] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      phoneNumber: '',
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
      phoneNumber: Yup
        .string()
        .max(50)
        .required('Phone number is required'),
    }),
    onSubmit: async (values, helpers) => {
      try {
        let { email, name, phoneNumber } = values;
        const createdAt = format(new Date(), 'yyyy-MM-dd HH-mm-ss');
        const avatar = '/assets/avatars/dpgc.webp';
        const address = "{}";
        const result = await addCustomer(address, avatar, createdAt, email, name, phoneNumber);
        dispatch(setSnackbarStatus({ 'status': true, 'message': result.message, 'severity': result?.severity })); 
        closeModal();
        formik.resetForm({
          values: {
            email: '',
            name: '',
            phoneNumber: '',
          },
        });
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
                  sx={{ mt: 10 }}
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