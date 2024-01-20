import Head from "next/head";
import { useState } from "react";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { Box, Button, Container, Stack, SvgIcon, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Page = () => {
  const [itinerary, setItinerary] = useState("");
  const [budget, setBudget] = useState("");
  const [country, setCountry] = useState("");
  const [destination, setDestination] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // update the itinerary, budget, country, and destination in the database
    console.log("yes")
    const newItinerary = { 
        "title": itinerary,
        "budget": budget,
        "country": country,
        "destination": destination
    };
    console.log(newItinerary)
  };

  return (
    <>
      <Head>
        <h1>Create Itinerary</h1>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
        
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="itinerary">Itinerary:</label>
            <input
              type="text"
              id="itinerary"
              value={itinerary}
              onChange={(e) => setItinerary(e.target.value)}
            />
            <label htmlFor="budget">Budget:</label>
            <input
              type="text"
              id="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <label htmlFor="destination">Destination:</label>
            <input
              type="text"
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
