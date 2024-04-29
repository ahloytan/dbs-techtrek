import Head from 'next/head';
import { useRouter } from 'next/router'
import { Avatar, Box, Container, Card, CardHeader, CardContent, Typography, IconButton, Grid, CardMedia } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { useEffect, useState } from 'react';
import { getUserItineraries } from '@/api/index.js';
import { grey } from '@mui/material/colors';

const Page = () => {
  const [itineraries, setItineraries] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(()=> {
    const fetchItineraries = async () => {
      const itineraries = await getUserItineraries(id);
      if (itineraries) setItineraries(itineraries)
    }
    fetchItineraries();

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <Container maxWidth="xl">
              <Typography variant="h4">Itineraries</Typography>
              <Typography variant="h6" sx={{margin: '10px 0'}}>Customer: {itineraries[0]?.customers.name}</Typography>
              <Typography variant="subtitle">ID: {id}</Typography>
              {itineraries.length > 0 ? (
                <Grid container>
                  {itineraries && itineraries.map((itinerary) => {
                    return (
                      <Grid item xs={12} sm={6} lg={4} key={itinerary.id}>
                        <Card 
                          sx={{ maxWidth: 400, margin: '25px 10px', bgcolor: grey[100] }} 
                        >
                          <CardMedia
                            component="img"
                            image={"/assets/attractions/" + itinerary.title_image + ".jpg"}
                            alt={itinerary.title_image}
                            sx={{height: 200}}
                          />
                          <CardHeader
                            avatar={
                              <Avatar aria-label="recipe" 
                                src={'/assets/countries/' + itinerary.country.name +'.svg'} 
                                sx={{ width: 56, height: 38 }} 
                                variant='square'
                              >
                              </Avatar>
                            }
                            title={itinerary.title}
                            subheader={"Country: " + itinerary.country.name}
                          />
                          <CardContent>
                          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom variant="body2">
                            Budget: ${itinerary.budget}
                          </Typography>
                          </CardContent>
                        </Card>
                      </Grid>    
                    )
                  })}
                </Grid> 
              ) : (
                <>
                  <Box
                    sx={{
                      mb: 3,
                      textAlign: 'center'
                    }}
                  >
                    <img
                      alt="Under development"
                      src="/assets/errors/no-records-found.png"
                      style={{
                        display: 'inline-block',
                        maxWidth: '100%',
                        width: 500
                      }}
                    />
                  </Box>
                  <Typography
                    align="center"
                    sx={{ mb: 3 }}
                    variant="h3"
                  >
                    No records found! 
                  </Typography>
                </>
              )
            }
            </Container>
        </Box>
    </>
  )
}

Page.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );
  

export default Page