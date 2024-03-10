import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { setSnackbarStatus } from '@/store/index';
import { useSelector, useDispatch } from 'react-redux';

export default function CustomizedSnackbars() {
    const dispatch = useDispatch();
    const { isOpen, message, severity } = useSelector((state) => state.app.snackBar);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;   
        dispatch(setSnackbarStatus({ 'isOpen': false }));
    }

    return (
        <Snackbar 
            key={Math.random()}
            open={isOpen} 
            autoHideDuration={2000} 
            onClose={handleClose} 
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
            <Alert
                onClose={handleClose}
                severity={severity ?? 'error'}
                variant="filled"
                sx={{ width: '100%', color: 'white' }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
}