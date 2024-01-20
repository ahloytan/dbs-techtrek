import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { getInitials } from 'src/utils/get-initials';
import FormDialogEdit from './edit-itinerary.js';


export const ItineraryDestinationsTable = (props) => {
  const {
    count = 0,
    items = [],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => {},
    onRowsPerPageChange,
    onSelectAll,
    onSelectOne,
    page = 0,
    rowsPerPage = 0,
    selected = []
  } = props;

  const selectedSome = (selected.length > 0) && (selected.length < items.length);
  const selectedAll = (items.length > 0) && (selected.length === items.length);

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  {/* <Checkbox
                    checked={selectedAll}
                    indeterminate={selectedSome}
                    onChange={(event) => {
                      if (event.target.checked) {
                        onSelectAll?.();
                      } else {
                        onDeselectAll?.();
                      }
                    }}
                  /> */}
                </TableCell>
                <TableCell>
                  ID
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Country Name
                </TableCell>
                <TableCell>
                  Cost
                </TableCell>
                <TableCell>
                  Notes
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((destination) => {
                const isSelected = selected.includes(destination.id);
                // const createdAt = format(parseISO(destination.created_at), 'dd/MM/yyyy');

                return (
                  <TableRow
                    hover
                    key={destination.id}
                    selected={isSelected}
                  >
                    <TableCell padding="checkbox">
                      {/* <Checkbox
                        checked={isSelected}
                        onChange={(event) => {
                          if (event.target.checked) {
                            onSelectOne?.(destination.id);
                          } else {
                            onDeselectOne?.(destination.id);
                          }
                        }}
                      /> */}
                    </TableCell>
                    <TableCell>
                      {destination.id}
                    </TableCell>
                    <TableCell>
                      {destination.name}
                    </TableCell>
                    <TableCell>
                      {destination.countryName}
                    </TableCell>
                    <TableCell>
                      {destination.cost}
                    </TableCell>
                    <TableCell>
                      {destination.notes}
                    </TableCell>
                    <TableCell>
                      <FormDialogEdit key={destination.id} destinationDetails={{'id': destination.id, 'cost': destination.cost, 'notes': destination.notes}}/>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

ItineraryDestinationsTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array
};
