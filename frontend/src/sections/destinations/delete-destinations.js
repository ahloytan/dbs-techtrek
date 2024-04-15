import { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { setSnackbarStatus } from '@/store/index';
import { Button, SvgIcon, Select, MenuItem, Dialog, Stack, DialogActions, DialogContent, DialogTitle, Typography, FormControl } from '@mui/material';
import TrashIcon from '@heroicons/react/24/solid/TrashIcon';
import { deleteDestinations } from '@/api/destinations';

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 250,
      width: 250,
    },
  },
};

export default function DeleteDestinationFormDialog({destinations, fetchDestinations}) {
  const dispatch = useDispatch();
  const [isModalOpen, setModalStatus] = useState(false);
  const formik = useFormik({
    initialValues: {
      selectedDestinations: [],
    },
    onSubmit: async (values, helpers) => {
      try {
        let { selectedDestinations } = values;
        const result = await deleteDestinations(selectedDestinations);
        dispatch(setSnackbarStatus({ 'isOpen': true, 'message': result.message, 'severity': 'success' })); 
        closeModal();
        formik.resetForm({
          values: {
            selectedDestinations: [],
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
        color='error'
        startIcon={(
          <SvgIcon fontSize="small">
            <TrashIcon />
          </SvgIcon>
        )}
        sx={{ "margin": "0px 15px 5px 0" }}
        variant="contained"
        onClick={openModal}
      >
        Delete
      </Button>
      <Dialog
        open={isModalOpen}
        onClose={closeModal}
      >
        <form
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <DialogTitle>Destinations</DialogTitle>
          <DialogContent sx={{ m: 1, width: 350 }}>
            <Stack spacing={3}>
              <FormControl>
                <Select
                  multiple
                  name="selectedDestinations"
                  value={formik.values.selectedDestinations}
                  onChange={formik.handleChange}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {destinations.map((destination) => (
                    <MenuItem
                      key={destination.id}
                      value={destination.id}
                    >
                      {destination.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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
            <Button type="submit">Confirm</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}