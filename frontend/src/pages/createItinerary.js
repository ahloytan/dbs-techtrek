import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { setSnackbarStatus } from "@/store/index";
import * as Yup from "yup";
import {
  Button,
  SvgIcon,
  Dialog,
  Stack,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { createItinerary, getAllCountries } from "../api/index";

export default function CreateItinerary() {
  const dispatch = useDispatch();
  const [isModalOpen, setModalStatus] = useState(false);
  const [countries, setCountries] = useState([]);
  const formik = useFormik({
    initialValues: {
      country: "",
      budget: 0,
      title: "",
      submit: null,
    },
    validationSchema: Yup.object({
      //   cost: Yup.number().required("Cost is required"),
      //   name: Yup.string().max(255).required("Name is required"),
      budget: Yup.number().required("Cost is required"),
      title: Yup.string().max(255).required("Name is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        // console.log(values, "XDD1");
        let { country, budget, title } = values;
        console.log(country, budget, title, 'XDD123')
        const result = await createItinerary(country, budget, title);
        dispatch(
          setSnackbarStatus({ status: true, message: result.message, severity: result?.severity })
        );
        closeModal();
        formik.resetForm({
          values: {
            country: "",
            budget: 0,
            title: "",
          },
        });
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  const openModal = () => setModalStatus(true);
  const closeModal = () => setModalStatus(false);

  // Manually set data for now, to be removed
  useEffect(() => {
    getCountries();
  }, []);
  const getCountries = () => {
    // Todo - retrieve countries from backend using axios
    // 
    // const allCountries = await getAllCountries();
    // setCountries(allCountries);
    // 

    // For now, use dummy data
    setCountries([
      {
        id: 1,
        name: "Singapore",
      },
      {
        id: 2,
        name: "Malaysia",
      },
      {
        id: 3,
        name: "Thailand",
      }
    ]);
  };

  return (
    <>
      <Button
        startIcon={
          <SvgIcon fontSize="small">
            <PlusIcon />
          </SvgIcon>
        }
        sx={{
          marginRight: "20px",
        }}
        variant="contained"
        onClick={openModal}
      >
        Add Itinerary
      </Button>
      <Dialog open={isModalOpen} onClose={closeModal}>
        <form noValidate onSubmit={formik.handleSubmit}>
          <DialogTitle>New Itinerary</DialogTitle>
          <DialogContent>
            <Stack spacing={3}>
              <Select
                labelId="demo-simple-select-label"
                id="country"
                value={formik.values.country}
                label="Country"
                name="country"
                onChange={formik.handleChange}
              >
                {countries.length !== 0 ? (
                  countries.map((country) => (
                    <MenuItem value={country.id} key={country.id}>
                      {country.name}
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem value={0}>No countries found</MenuItem>
                )}
              </Select>
              <TextField
                error={!!(formik.touched.budget && formik.errors.budget)}
                fullWidth
                helperText={formik.touched.budget && formik.errors.budget}
                label="Budget"
                name="budget"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.budget}
              />
              <TextField
                error={!!(formik.touched.title && formik.errors.title)}
                fullWidth
                helperText={formik.touched.title && formik.errors.title}
                label="Title"
                name="title"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.title}
              />
            </Stack>
            {formik.errors.submit && (
              <Typography color="error" sx={{ mt: 10 }} variant="body2">
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
