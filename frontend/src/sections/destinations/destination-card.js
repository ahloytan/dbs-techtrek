import PropTypes from 'prop-types';
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import ClockIcon from '@heroicons/react/24/solid/ClockIcon';
import { CardMedia, Box, Card, CardContent, Checkbox, Divider, Stack, SvgIcon, Typography } from '@mui/material';

export const DestinationCard = (props) => {
  const { destination } = props;

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      {/* <Checkbox /> */}
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pb: 3
          }}
        >
          <CardMedia
            component="img"
            image={"/assets/attractions/" + destination.image_name + ".jpg"}
            alt={destination.image_name}
            sx={{height: 200}}
          />
        </Box>
        <Typography
          align="center"
          gutterBottom
          variant="h5"
        >
          {destination.name}
        </Typography>
        <Typography
          align="center"
          variant="body1"
        >
          {destination.notes}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ p: 2 }}
      >
        <Stack
          alignItems="center"
          direction="row"
          spacing={1}
        >
          <SvgIcon
            color="action"
            fontSize="small"
          >
            <ClockIcon />
          </SvgIcon>
          <Typography
            color="text.secondary"
            display="inline"
            variant="body2"
          >
            Updated 2hr ago
          </Typography>
        </Stack>
        <Stack
          alignItems="center"
          direction="row"
          spacing={1}
        >
          <Typography
            color="text.secondary"
            display="inline"
            variant="body2"
          >
             Cost: {destination.cost}
          </Typography>
          <SvgIcon
            color="action"
            fontSize="small"
          >
            <CurrencyDollarIcon />
          </SvgIcon>
        </Stack>
      </Stack>
    </Card>
  );
};

DestinationCard.propTypes = {
  destination: PropTypes.object.isRequired
};
