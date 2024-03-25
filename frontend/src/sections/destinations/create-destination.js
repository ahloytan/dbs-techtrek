import { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { setSnackbarStatus } from '@/store/index';
import * as Yup from 'yup';
import { Button, SvgIcon, Select, MenuItem, Dialog, Stack, DialogActions, DialogContent, DialogTitle, TextField, Typography, InputLabel, FormControl } from '@mui/material';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { addDestination } from '@/api/index.js';

export default function CreateDestinationFormDialog({countries, fetchDestinations}) {
  const dispatch = useDispatch();
  const [isModalOpen, setModalStatus] = useState(false);
  const formik = useFormik({
    initialValues: {
      country: 1,
      cost: 0,
      name: 'somewhere over the rainbow',
      notes: 'blue birds fly',
      imageName: 'placeholder',
      submit: null
    },
    validationSchema: Yup.object({
      country: Yup.number()
      .required('Country is required!')
      .test(
        'Is positive?', 
        'ERROR: The number must be greater than 0!', 
        (value) => value > 0
      ),
      name: Yup
        .string()
        .max(255)
        .required('Name is required'),
      cost: Yup.number()
        .required('Cost is required!')
        .test(
          'Is positive?', 
          'ERROR: The number must be greater than 0!', 
          (value) => value > 0
        )
    }),
    onSubmit: async (values, helpers) => {
      try {
        let { country, cost, name, notes, imageName } = values;
        const result = await addDestination(country, cost, name, notes, imageName);
        dispatch(setSnackbarStatus({ 'isOpen': true, 'message': result.message, 'severity': 'success' })); 
        closeModal();
        formik.resetForm({
          values: {
            country: '',
            cost: 0,
            name: '',
            notes: '',
            imageName: '',
          },
        });
        fetchDestinations();
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
          <DialogTitle>New Destination</DialogTitle>
          <DialogContent>
            <Stack spacing={3}>
              <FormControl>
                <InputLabel id="demo-simple-select-autowidth-label">Country</InputLabel>
                <Select
                  fullWidth
                  value={formik.values.country}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  label="Country"
                  name="country"
                  error={!!(formik.touched.country && formik.errors.country)}
                >
                  {countries.map((country) => (
                    <MenuItem
                      key={country.id}
                      value={country.id}
                    >
                      {country.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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
                error={!!(formik.touched.cost && formik.errors.cost)}
                fullWidth
                helperText={formik.touched.cost && formik.errors.cost}
                label="Cost"
                name="cost"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="number"
                value={formik.values.cost}
                inputProps={{ inputMode: 'numeric' }}
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
              <TextField
                disabled
                error={!!(formik.touched.imageName && formik.errors.imageName)}
                fullWidth
                helperText={formik.touched.imageName && formik.errors.imageName}
                label="Image"
                name="phoneNumber"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.imageName}
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