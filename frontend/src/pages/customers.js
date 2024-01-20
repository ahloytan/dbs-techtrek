import { useCallback, useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography} from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CustomersTable } from 'src/sections/customer/customers-table';
import { CustomersSearch } from 'src/sections/customer/customers-search';
import { applyPagination } from 'src/utils/apply-pagination';
import { getAllCustomers } from '@/api/index.js';
import { mkConfig, generateCsv, download } from "export-to-csv";
import FormDialog from '../sections/customer/create-customer.js';
import Snackbar from '@/components/snackbar.js';
import { useSelector, useDispatch } from 'react-redux';
import { setSnackbarStatus } from '@/store/index';

const customers1 = [
  {
      "id": 1,
      "address": {
          "city": "Cleveland",
          "state": "Ohio",
          "street": "2849 Fulton Street",
          "country": "USA"
      },
      "avatar": "/assets/avatars/avatar-carson-darrin.png",
      "created_at": "2024-01-15T02:30:00.000Z",
      "email": "carson.darrin@devias.io",
      "name": "Carson Darrin",
      "phone_number": "304-428-3097"
  },
  {
      "id": 2,
      "address": {
          "city": "Atlanta",
          "state": "Georgia",
          "street": "1865 Pleasant Hill Road",
          "country": "USA"
      },
      "avatar": "/assets/avatars/avatar-fran-perez.png",
      "created_at": "2024-01-14T03:30:00.000Z",
      "email": "fran.perez@devias.io",
      "name": "Fran Perez",
      "phone_number": "712-351-5711"
  },
  {
      "id": 3,
      "address": {
          "city": "North Canton",
          "state": "Ohio",
          "street": "4894 Lakeland Park Drive",
          "country": "USA"
      },
      "avatar": "/assets/avatars/avatar-jie-yan-song.png",
      "created_at": "2024-01-14T06:30:00.000Z",
      "email": "jie.yan.song@devias.io",
      "name": "Jie Yan Song",
      "phone_number": "770-635-2682"
  },
  {
      "id": 4,
      "address": {
          "city": "Madrid",
          "street": "4158 Hedge Street",
          "country": "Spain"
      },
      "avatar": "/assets/avatars/dpgc.webp",
      "created_at": "2024-01-14T13:30:00.000Z",
      "email": "aloysiustan.2020@scis.smu.edu.sg",
      "name": "Aloysius Tan",
      "phone_number": "91234567"
  },
  {
      "id": 5,
      "address": {
          "city": "San Diego",
          "state": "California",
          "street": "75247",
          "country": "USA"
      },
      "avatar": "/assets/avatars/avatar-miron-vitold.png",
      "created_at": "2024-01-14T09:30:00.000Z",
      "email": "miron.vitold@devias.io",
      "name": "Miron Vitold",
      "phone_number": "972-333-4106"
  },
  {
      "id": 6,
      "address": {
          "city": "Berkeley",
          "state": "California",
          "street": "317 Angus Road",
          "country": "USA"
      },
      "avatar": "/assets/avatars/avatar-penjani-inyene.png",
      "created_at": "2024-01-14T07:30:00.000Z",
      "email": "penjani.inyene@devias.io",
      "name": "Penjani Inyene",
      "phone_number": "858-602-3409"
  },
  {
      "id": 7,
      "address": {
          "city": "Carson City",
          "state": "Nevada",
          "street": "2188 Armbrester Drive",
          "country": "USA"
      },
      "avatar": "/assets/avatars/avatar-omar-darboe.png",
      "created_at": "2024-01-14T01:30:00.000Z",
      "email": "omar.darobe@devias.io",
      "name": "Omar Darobe",
      "phone_number": "415-907-2647"
  },
  {
      "id": 8,
      "address": {
          "city": "Los Angeles",
          "state": "California",
          "street": "1798 Hickory Ridge Drive",
          "country": "USA"
      },
      "avatar": "/assets/avatars/avatar-siegbert-gottfried.png",
      "created_at": "2024-01-14T04:30:00.000Z",
      "email": "siegbert.gottfried@devias.io",
      "name": "Siegbert Gottfried",
      "phone_number": "702-661-1654"
  },
  {
      "id": 9,
      "address": {
          "city": "Murray",
          "state": "Utah",
          "street": "3934 Wildrose Lane",
          "country": "USA"
      },
      "avatar": "/assets/avatars/avatar-iulia-albu.png",
      "created_at": "2024-01-14T08:30:00.000Z",
      "email": "iulia.albu@devias.io",
      "name": "Iulia Albu",
      "phone_number": "313-812-8947"
  },
  {
      "id": 10,
      "address": {
          "city": "Salt Lake City",
          "state": "Utah",
          "street": "368 Lamberts Branch Road",
          "country": "USA"
      },
      "avatar": "/assets/avatars/avatar-nasimiyu-danai.png",
      "created_at": "2024-01-14T11:30:00.000Z",
      "email": "nasimiyu.danai@devias.io",
      "name": "Nasimiyu Danai",
      "phone_number": "801-301-7894"
  }
]

const useCustomers = (customersList, page, rowsPerPage) => {

  return useMemo(
    () => {
      return applyPagination(customersList, page, rowsPerPage);
    },
    [customersList, page, rowsPerPage]
  );
};

const useCustomerIds = (customers) => {
  return useMemo(
    () => {
      return customers.map((customer) => customer.id);
    },
    [customers]
  );
};

const Page = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const { status, message, severity } = useSelector((state) => state.app.snackBar);

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [customersList, setCustomers] = useState([]);
  const [filteredCustomersList, setFilteredCustomers] = useState([]);
  const customers = useCustomers(customers1, page, rowsPerPage);
  const customersIds = useCustomerIds(customers);
  const customersSelection = useSelection(customersIds);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const customers = await getAllCustomers();
  //     setCustomers(customers)
  //     setFilteredCustomers(customers)
  //   };
  
  //   fetchData();
  // }, []);

  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value);
    },
    []
  );

  const handleRowsPerPageChange = useCallback(
    (event) => {
      setRowsPerPage(event.target.value);
    },
    []
  );

  const handleChildStateChange = (newState) => {
    let res = [];
    if (newState === '') {
      res = customersList;
    } else {
      res = customers.filter((el) => {
        return el.name.toLowerCase().includes(newState);
      })
    }

    setFilteredCustomers(res);
  }

  const exportCustomerRecords = () => {
    const csvConfig = mkConfig({ useKeysAsHeaders: true });
    const csv = generateCsv(csvConfig)(customersList);
    download(csvConfig)(csv);
  }

  return (
    <>
      <Head>
        <title>
          Customers | DBS TechTrek
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
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4">
                  Customers
                </Typography>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowUpOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Import
                  </Button>
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    )}
                    onClick={exportCustomerRecords}
                  >
                    Export
                  </Button>
                </Stack>
              </Stack>
              <div>
                <FormDialog />
              </div>
            </Stack>
            <CustomersSearch onChildStateChange={handleChildStateChange}/>
            <CustomersTable
              count={customers.length}
              items={customers}
              onDeselectAll={customersSelection.handleDeselectAll}
              onDeselectOne={customersSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={customersSelection.handleSelectAll}
              onSelectOne={customersSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={customersSelection.selected}
            />
          </Stack>
          <Snackbar isOpen={status} handleClose={() => dispatch(setSnackbarStatus(false))} message={message} severity={severity ?? 'error'}/>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
