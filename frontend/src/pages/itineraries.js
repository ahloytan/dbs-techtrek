import { useEffect } from 'react'
// import { usePostContext } from '../hooks/usePostContext'
// import { useAuthContext } from '../hooks/useAuthContext'
import Head from 'next/head';
import { getItineraries } from '../api/index'
import { Box, Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import ItineraryCard from '../components/ItineraryCard'
// import { Container } from '@mui/material'
// import Masonry from 'react-masonry-css';
import { Typography } from '@mui/material';
import CreateItinerary from './createItinerary.js'

const itinerariesList = [{'id': 1, 'country_name': 1, 'user_id': 1, 'budget': 500, 'title': 'Sightseeing in Singapore'},
                    {'id': 2, 'country_name': 1, 'user_id': 1, 'budget': 800, 'title': 'Singapore Adventure'}]

const Page = () => {

    useEffect(() => {
        // turn off axios call for now
        // const itineraries = getItineraries()
    }, [])

    return (
        <>
            <Head>
                <title>
                Itineraries | DBS TechTrek
                </title>
            </Head>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
            >
                <div style={{display: 'flex', width: '100%', marginBottom: '40px'}}>
                    <Typography variant="h4">My Itineraries</Typography>
                    <CreateItinerary />
                </div>
                
                <Grid container spacing={2}>
                    <Grid sx={{display: 'flex'}}>
                            {itinerariesList && itinerariesList.map((itinerary) => (
                                <ItineraryCard key={itinerary.id} itinerary={itinerary} />
                            ))}
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

Page.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );
  
export default Page;
