import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

const image = 
  {
    country_name: 1, // change to singapore
    url: "https://a.cdn-hotels.com/gdcs/production8/d1098/064a4e00-23ee-4137-8ec3-a0d27bca0782.jpg?impolicy=fcrop&w=800&h=533&q=medium",
  };

const ItineraryCard = ({ itinerary }) => {
  const handleClick = () => {
    console.log("clicked on itinerarycard");
  };


  return (
    <div>
      <Card sx={{ maxWidth: 345, borderRadius: 1, margin: "10px" }} elevation={3}>
        <CardActionArea onClick={handleClick}>
        <CardHeader
          action={
              <IconButton onClick={() => handleDelete()}>
                <DeleteOutlined />
              </IconButton>
          }
            title={itinerary.title} />
          <CardMedia component="img" height="194" image={image.url} alt="image" />
          <CardContent>
            <Typography variant="h6" color="text.secondary">
              Country:
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {itinerary.country_name}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Budget:
            </Typography>
            <Typography variant="body1" color="text.secondary">
              ${itinerary.budget}
            </Typography>
            <ul>
              {itinerary.destinations && <Typography variant="h6" color="text.secondary">Destinations:</Typography>}
              <Typography variant="body1" color="text.secondary">
                  {itinerary.destinations &&
                    itinerary.destinations.map((destination) => <li key={destination.id}>{destination.name}</li>)}
              </Typography>
            </ul>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ItineraryCard;
