import { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { setSnackbarStatus } from '@/store/index';
import * as Yup from 'yup';
import { Button, SvgIcon, Dialog, Stack, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { editDestination } from '@/api/index.js';
import { format } from 'date-fns';

export default function FormDialogEdit({destinationDetails}) {
  const dispatch = useDispatch();
  const [isModalOpen, setModalStatus] = useState(false);
  const formik = useFormik({
    initialValues: {
      cost: destinationDetails.cost,
      name: destinationDetails.name,
      notes: destinationDetails.notes,
      submit: null
    },
    validationSchema: Yup.object({
      cost: Yup
        .number()
        .required('Cost is required'),
      name: Yup
        .string()
        .max(255)
        .required('Name is required'),
    }),
    onSubmit: async (values, helpers) => {
      try {
        let { cost, name, notes } = values;
        const result = await editDestination(destinationDetails.id, cost, name, notes);
        dispatch(setSnackbarStatus({ 'status': true, 'message': result.message, 'severity': result?.severity })); 
        closeModal();
        formik.resetForm({
          values: {
            cost: '',
            name: '',
            notes: '',
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
        Edit
      </Button>
      <Dialog
        open={isModalOpen}
        onClose={closeModal}
      >
        <form
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <DialogTitle>Edit Destination</DialogTitle>
          <DialogContent>
            <Stack spacing={3}>
                  <TextField
                    error={!!(formik.touched.cost && formik.errors.cost)}
                    fullWidth
                    helperText={formik.touched.cost && formik.errors.cost}
                    label="Cost"
                    name="cost"
                    type="number"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.cost}
                  />
                  <TextField
                    error={!!(formik.touched.name && formik.errors.name)}
                    fullWidth
                    helperText={formik.touched.name && formik.errors.name}
                    label="Name"
                    name="name"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="name"
                    value={formik.values.name}
                  />
                  <TextField
                    error={!!(formik.touched.notes && formik.errors.notes)}
                    fullWidth
                    helperText={formik.touched.notes && formik.errors.notes}
                    label="Notes"
                    name="notes"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.notes}
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
            <Button type="submit">Save</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}