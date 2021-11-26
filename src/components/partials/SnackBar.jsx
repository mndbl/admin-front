import { useState } from "react"
import { Snackbar, Alert } from '@mui/material'

export function SnackBar({ msgRcvd, severity }) {
    const [open, setOpen] = useState(true)
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: "center" }}
            open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                {msgRcvd}
            </Alert>
        </Snackbar>
    )
}
