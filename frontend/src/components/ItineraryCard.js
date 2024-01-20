import { useState } from 'react';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from '@mui/material';

const ItineraryCard = ({ itinerary }) => {
    const handleClick = () => {
        console.log('clicked on itinerarycard')
    }

    return (
        <div>
      <Card sx={{ maxWidth: 345, borderRadius: 2, margin: '10px' }} elevation={3}>
        <CardActionArea onClick={handleClick}>
            <CardHeader
            //   action={
            //     <>
            //       <IconButton onClick={() => handleDelete()}>
            //         <DeleteOutlined />
            //       </IconButton>

            //       <IconButton
            //         onClick={handleClick}
            //       >
            //         <EditOutlined />
            //       </IconButton>
            //       <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            //         <MenuItem onClick={handleEditTitle}>Edit Title</MenuItem>
            //         <MenuItem onClick={handleEditContent}>Edit Content</MenuItem>
            //       </Menu>
            //     </>
            //   }
            title={itinerary.title}
            />
            <CardMedia
                component="img"
                height="194"
                image="https://a.cdn-hotels.com/gdcs/production8/d1098/064a4e00-23ee-4137-8ec3-a0d27bca0782.jpg?impolicy=fcrop&w=800&h=533&q=medium"
                alt="image"
            />
            <CardContent>
            <Typography variant="body1" color="text.secondary">
                Country: {itinerary.country_name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
                Budget: {itinerary.budget}
            </Typography>
            </CardContent>
        </CardActionArea>
      </Card>
    </div>
    )
}

export default ItineraryCard;