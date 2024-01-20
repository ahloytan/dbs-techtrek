import Head from "next/head";
import { useState, useCallback, useEffect } from "react";
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
import { DestinationsTable } from "@/sections/itinerary/destination-table";
import { getAllDestinations } from "@/api";

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
  const [expanded, setExpanded] = useState(false);
  const [destinations, setdestinations] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const fetchData = async () => {
    const des = await getAllDestinations();
    setdestinations(des);
  };

  useEffect(() => {
    
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
        <title>Destination | DBS TechTrek</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <div style={{ display: "flex", width: "100%", marginBottom: "40px" }}>
          <Typography variant="h4">Destinations</Typography>
          <DestinationsTable
            count={destinations.length}
            items={destinations}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleRowsPerPageChange}
            page={page}
            rowsPerPage={rowsPerPage}
          />
        </div>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
