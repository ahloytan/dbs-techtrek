import Head from 'next/head';
import {ArrowUpOnSquareIcon, ArrowDownOnSquareIcon} from '@heroicons/react/24/solid';
import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { DestinationCard } from 'src/sections/destinations/destination-card';
import { DestinationsSearch } from 'src/sections/destinations/destinations-search';
import { getAllDestinations, getAllCountries } from '@/api/index.js';
import { useEffect, useState } from 'react';
import DeleteDestinationFormDialog from '../sections/destinations/delete-destinations.js';
import CreateDestinationFormDialog from '../sections/destinations/create-destination.js';
import Snackbar from '@/components/snackbar.js';
import { useAuthContext } from 'src/contexts/auth-context';

const Page = () => {
  const {isAdmin} = useAuthContext();
  const [filteredDestinationsList, setFilteredDestinationsList] = useState([]);
  const [destinationsList, setDestinations] = useState([]);
  const [countriesList, setCountries] = useState([]);

  const fetchDestinations = async () => {
    const destinations = await getAllDestinations();
    const countries = await getAllCountries();
    if (destinations) {
      setDestinations(destinations);
      setFilteredDestinationsList(destinations)
    }

    if (countries) setCountries(countries);
  };

  const handleChildStateChange = (newState) => {
    let res = [];
    newState === '' ? res = destinationsList : res = filteredDestinationsList.filter((el) => el.name.toLowerCase().includes(newState))
    setFilteredDestinationsList(res);
  }

  useEffect(() => {
    fetchDestinations();
  }, []);


  return (
  <>
    <Head>
      <title>
        Destinations | DBS TechTrek 2024
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
                Destinations
              </Typography>
              <Stack
                alignItems="center"
                direction="row"
                spacing={1}
              >
                <Button
                  color="inherit"
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <ArrowUpOnSquareIcon />
                    </SvgIcon>
                  )}
                >
                  Import
                </Button>
                <Button
                  color="inherit"
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <ArrowDownOnSquareIcon />
                    </SvgIcon>
                  )}
                >
                  Export
                </Button>
              </Stack>
            </Stack>
            { 
              isAdmin && 
              <div>
                <DeleteDestinationFormDialog destinations={destinationsList} fetchDestinations={fetchDestinations}/>
                <CreateDestinationFormDialog countries={countriesList} fetchDestinations={fetchDestinations} />
              </div>
            }
          </Stack>
          <DestinationsSearch onChildStateChange={handleChildStateChange}/>
          <Grid
            container
            spacing={3}
          >
            {filteredDestinationsList.map((destination) => (
              <Grid
                xs={12}
                md={6}
                lg={4}
                key={destination.id}
              >
                <DestinationCard destination={destination} />
              </Grid>
            ))}
          </Grid>
          {/* <Box
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Pagination
              count={3}
              size="small"
            />
          </Box> */}
        </Stack>
        <Snackbar />
      </Container>
    </Box>
  </>
  )
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;