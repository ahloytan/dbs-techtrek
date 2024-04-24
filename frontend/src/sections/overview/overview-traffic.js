import PropTypes from 'prop-types';
import ComputerDesktopIcon from '@heroicons/react/24/solid/ComputerDesktopIcon';
import DeviceTabletIcon from '@heroicons/react/24/solid/DeviceTabletIcon';
import PhoneIcon from '@heroicons/react/24/solid/PhoneIcon';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Stack,
  SvgIcon,
  Typography,
  useTheme,
  CardMedia
} from '@mui/material';
import { Chart } from 'src/components/chart';

const useChartOptions = (labels) => {
  const theme = useTheme();

  return {
    chart: {
      background: 'transparent'
    },
    colors: [
      theme.palette.primary.main,
      theme.palette.success.main,
      theme.palette.warning.main
    ],
    dataLabels: {
      enabled: false
    },
    labels,
    legend: {
      show: false
    },
    plotOptions: {
      pie: {
        expandOnClick: false
      }
    },
    states: {
      active: {
        filter: {
          type: 'none'
        }
      },
      hover: {
        filter: {
          type: 'none'
        }
      }
    },
    stroke: {
      width: 0
    },
    theme: {
      mode: theme.palette.mode
    },
    tooltip: {
      fillSeriesColor: false
    }
  };
};

const iconMap = {
  0: (
    <SvgIcon>
      <ComputerDesktopIcon />
    </SvgIcon>
  ),
  1: (
    <SvgIcon>
      <DeviceTabletIcon />
    </SvgIcon>
  ),
  2: (
    <SvgIcon>
      <PhoneIcon />
    </SvgIcon>
  )
};

export const OverviewTraffic = (props) => {
  const { sx, trafficByCountry } = props;
  let donutSeries = [33, 33, 33];
  let chartSeries = [33, 33, 33];
  let labels = ['Others', 'Others', 'Others'];

  if (trafficByCountry && trafficByCountry.length > 0) {
    donutSeries = [];
    chartSeries = [];
    labels = [];
    
    trafficByCountry.forEach(({ total, percentage, name }) => {
      donutSeries.push(total);
      chartSeries.push(percentage);
      labels.push(name);
    });
  }

  const chartOptions = useChartOptions(labels);

  return (
    <Card sx={sx}>
      <CardHeader title="Traffic by Country (Top 3)" />
      <CardContent>
        <Chart
          height={300}
          options={chartOptions}
          series={donutSeries}
          type="donut"
          width="100%"
        />
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="center"
          spacing={2}
          sx={{ mt: 2 }}
        >
          
          {chartSeries && chartSeries.map((item, index) => {
            const label = labels[index];

            return (
              <Box
                key={label + index}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <CardMedia
                  component="img"
                  image={`/assets/countries/${label === 'Others' ? 'placeholder' : label}.svg`}
                  alt="sas"
                  sx={{width: 60}}
                />
                {/* {iconMap[index]} */}
                <Typography
                  sx={{ my: 1 }}
                  variant="h6"
                >
                  {label}
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="subtitle2"
                >
                  {item.toFixed(0)}%
                </Typography>
              </Box>
            );
          })}
        </Stack>
      </CardContent>
    </Card>
  );
};

OverviewTraffic.propTypes = {
  trafficByCountry: PropTypes.array,
  sx: PropTypes.object
};
