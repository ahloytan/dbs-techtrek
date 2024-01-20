import { useEffect } from "react";
import Head from "next/head";
import { getItineraries } from "../api/index";
import { Box, Grid, Container } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import ItineraryCard from "../components/ItineraryCard";
import { Typography } from "@mui/material";

const itinerariesList = [
  {
    id: 1,
    country_name: 1,
    user_id: 1,
    budget: 500,
    title: "Sightseeing in Singapore",
    destinations: ["MBS", "Singapore Zoo", "Chinatown"],
  },
  {
    id: 2,
    country_name: 1,
    user_id: 1,
    budget: 500,
    title: "Test in Singapore",
    destinations: ["MBS", "Singapore Zoo", "Chinatown"],
  },
  {
    id: 3,
    country_name: 1,
    user_id: 1,
    budget: 500,
    title: "Test2 in Singapore",
    destinations: ["MBS", "Singapore Zoo", "Chinatown"],
  },
  {
    id: 4,
    country_name: 1,
    user_id: 1,
    budget: 500,
    title: "Test2 in Singapore",
    destinations: ["MBS", "Singapore Zoo", "Chinatown"],
  },
  {
    id: 5,
    country_name: 1,
    user_id: 1,
    budget: 500,
    title: "Test2 in Singapore",
    destinations: ["MBS", "Singapore Zoo", "Chinatown"],
  },
];

const Page = () => {
//   useEffect(() => {
//     const itineraries = getItineraries();
//   }, []);

  return (
    <>
      <Head>
        <title>Itineraries | DBS TechTrek</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
        <div style={{ display: "flex", width: "100%", marginBottom: "40px" }}>
          <Typography variant="h4">My Itineraries</Typography>
        </div>
        <Grid container spacing={2}>
          <Grid
          sx={{ display: "flex", flexWrap: "wrap" }}
          >
            {itinerariesList &&
              itinerariesList.map((itinerary) => (
                    <ItineraryCard key={itinerary.id} itinerary={itinerary} />
              ))}
          </Grid>
        </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
