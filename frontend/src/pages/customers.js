import { useCallback, useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography, Grid} from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { ItineraryDestinationsTable } from '@/sections/itinerary/itinerary-destinations-table.js';
// import { CustomersSearch } from 'src/sections/customer/destinations-search';
import { applyPagination } from 'src/utils/apply-pagination';
import { getAllDestinations } from '@/api/index.js';
import { mkConfig, generateCsv, download } from "export-to-csv";
import FormDialog from '../sections/itinerary/create-itinerary.js';
import FormDialogEdit from '../sections/itinerary/edit-itinerary.js';
import Snackbar from '@/components/snackbar.js';
import { useSelector, useDispatch } from 'react-redux';
import { setSnackbarStatus } from '@/store/index';

const useCustomers = (destinationsList, page, rowsPerPage) => {

  return useMemo(
    () => {
      return applyPagination(destinationsList, page, rowsPerPage);
    },
    [destinationsList, page, rowsPerPage]
  );
};

const useCustomerIds = (destinations) => {
  return useMemo(
    () => {
      return destinations.map((destinations) => destinations.id);
    },
    [destinations]
  );
};

const Page = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const { status, message, severity } = useSelector((state) => state.app.snackBar);

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [destinationsList, setDestinations] = useState([]);
  const [filteredDestinationsList, setfilteredDestinations] = useState([]);
  const destinations = useCustomers(filteredDestinationsList, page, rowsPerPage);
  // const destinationsIds = useCustomerIds(destinations);
  // const destinationsSelection = useSelection(destinationsIds);

  useEffect(() => {
    const fetchData = async () => {
      const destinations = await getAllDestinations();
      console.log(destinations, 'XDD');
      setDestinations(destinations)
      setfilteredDestinations(destinations)
    };
  
    fetchData();
  }, []);

  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value);
    },
    []
  );

  const handleRowsPerPageChange = useCallback(
    (event) => {
      setRowsPerPage(event.target.value);
    },
    []
  );

  const handleChildStateChange = (newState) => {
    let res = [];
    if (newState === '') {
      res = destinationsList;
    } else {
      res = destinations.filter((el) => {
        return el.name.toLowerCase().includes(newState);
      })
    }

    setfilteredDestinations(res);
  }

  const exportCustomerRecords = () => {
    const csvConfig = mkConfig({ useKeysAsHeaders: true });
    const csv = generateCsv(csvConfig)(destinationsList);
    download(csvConfig)(csv);
  }

  return (
    <>
      <Head>
        <title>
          Customers | DBS TechTrek
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4">
                  Itinerary Title
                </Typography>
                <Typography>
                  Budget: budget
                </Typography>
              </Stack>
            </Stack>
            {/* <CustomersSearch onChildStateChange={handleChildStateChange}/> */}
            <Stack spacing={2}>
              <Grid container ml={-2} spacing={4}>
                <Grid item>
                  <Typography variant="h5">Destinations</Typography>

                </Grid>
                <Grid item>
                  <FormDialog />
                  <FormDialogEdit />
                </Grid>
              </Grid>
              <ItineraryDestinationsTable
                count={destinations.length}
                items={destinations}
                // onDeselectAll={customersSelection.handleDeselectAll}
                // onDeselectOne={customersSelection.handleDeselectOne}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
                // onSelectAll={customersSelection.handleSelectAll}
                // onSelectOne={customersSelection.handleSelectOne}
                page={page}
                rowsPerPage={rowsPerPage}
                // selected={customersSelection.selected}
              />
            </Stack>

          </Stack>
          <Snackbar isOpen={status} handleClose={() => dispatch(setSnackbarStatus(false))} message={message} severity={severity ?? 'error'}/>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
