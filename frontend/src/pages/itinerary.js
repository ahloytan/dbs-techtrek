import { useCallback, useEffect, useMemo, useState } from "react";
import Head from "next/head";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import { Box, Button, Container, Stack, SvgIcon, Typography, Grid } from "@mui/material";
import { useSelection } from "src/hooks/use-selection";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { ItineraryDestinationsTable } from "@/sections/itinerary/itinerary-destinations-table.js";
// import { CustomersSearch } from 'src/sections/customer/destinations-search';
import { applyPagination } from "src/utils/apply-pagination";
import { getAllDestinations, getItinerary } from "@/api/index.js";
import { mkConfig, generateCsv, download } from "export-to-csv";
import FormDialog from "../sections/itinerary/create-itinerary.js";
import Snackbar from "@/components/snackbar.js";
import { useSelector, useDispatch } from "react-redux";
import { setSnackbarStatus } from "@/store/index";

const useCustomers = (destinationsList, page, rowsPerPage) => {
  return useMemo(() => {
    return applyPagination(destinationsList, page, rowsPerPage);
  }, [destinationsList, page, rowsPerPage]);
};

const useCustomerIds = (destinations) => {
  return useMemo(() => {
    return destinations.map((destinations) => destinations.id);
  }, [destinations]);
};

const Page = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const { status, message, severity } = useSelector((state) => state.app.snackBar);

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [itinerary, setItinerary] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const itinerary = await getItinerary();
      setItinerary(itinerary);
    };
    fetchData();
  }, []);

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const handleRowsPerPageChange = useCallback((event) => {
    setRowsPerPage(event.target.value);
  }, []);

  return (
    <>
      <Head>
        <title>Itinerary | DBS TechTrek</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        {itinerary && (
          <Container maxWidth="xl">
            <Stack spacing={3}>
              <Stack direction="row" justifyContent="space-between" spacing={4}>
                <Stack spacing={1}>
                  <Typography variant="h4">Title: {itinerary.title}</Typography>
                  <Typography>Budget: {itinerary.budget}</Typography>
                </Stack>
              </Stack>
              <Stack spacing={2}>
                <Grid container ml={-2} spacing={4}>
                  <Grid item>
                    <Typography variant="h5">Destinations</Typography>
                  </Grid>
                  <Grid item>{/* <FormDialog /> */}</Grid>
                </Grid>
                <ItineraryDestinationsTable
                  count={itinerary.destinations.length}
                  items={itinerary.destinations}
                  onPageChange={handlePageChange}
                  onRowsPerPageChange={handleRowsPerPageChange}
                  page={page}
                  rowsPerPage={rowsPerPage}
                />
              </Stack>
            </Stack>
            <Snackbar
              isOpen={status}
              handleClose={() => dispatch(setSnackbarStatus(false))}
              message={message}
              severity={severity ?? "error"}
            />
          </Container>
        )}
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
