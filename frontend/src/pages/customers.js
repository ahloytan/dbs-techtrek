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
import { useAuthContext } from 'src/contexts/auth-context';

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
  const {isAdmin} = useAuthContext();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [customersList, setCustomers] = useState([]);
  const [filteredCustomersList, setFilteredCustomers] = useState([]);
  const customers = useCustomers(filteredCustomersList, page, rowsPerPage);
  const customersIds = useCustomerIds(customers);
  const customersSelection = useSelection(customersIds);

  const fetchCustomers = async () => {
    const customers = await getAllCustomers();
    if (customers) {
      setCustomers(customers);
      setFilteredCustomers(customers);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

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
    newState === '' ? res = customersList : res = customers.filter((el) => el.name.toLowerCase().includes(newState))
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
              { 
                isAdmin &&               
                <div>
                  <FormDialog fetchCustomers={fetchCustomers}/>
                </div>
              }
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
          <Snackbar />
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