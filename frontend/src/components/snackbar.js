import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function CustomizedSnackbars({handleClose, isOpen, message, severity}) {
    return (
        <div>
            <Snackbar 
                open={isOpen} 
                autoHideDuration={2000} 
                onClose={handleClose} 
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert
                    onClose={handleClose}
                    severity={severity}
                    variant="filled"
                    sx={{ width: '100%', color: 'white' }}
                >
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}