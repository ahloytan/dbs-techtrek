import Head from 'next/head';
import { useState } from 'react';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ItineraryCard from '../components/ItineraryCard'
import Masonry from 'react-masonry-css';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
      })
    (({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
    }));

const Page = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


    return (
        <>
          <Head>
            <title>
              Template | DBS TechTrek
            </title>
          </Head>
          <div>
            <div style={{display: 'flex', justifyContent: 'center', width: '100%', marginTop: '30px'}}>
                <Typography variant="h3">My Itineraries</Typography>
            </div>
            <Container>
                <Masonry 
                    breakpointCols={{default: 3, 1100: 2, 700: 1}}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {/* {itineraries && itineraries.map((itinerary) => (
                        <ItineraryCard key={itinerary.id} itinerary={itinerary} />
                    ))} */}
                    <ItineraryCard />
                </Masonry>
            </Container>
        </div>
        </>

    )
}


Page.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );
  
  export default Page;