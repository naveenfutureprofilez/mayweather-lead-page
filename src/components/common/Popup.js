import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(5),
    }
}));

export default function Popup(props) {

    const status = props && props.status;
    const [open, setOpen] = React.useState(status);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return <>
        <div>
            {props.text && <>
                <Button onClick={handleClickOpen} variant="outlined" className={`${props.btnclass} mainbtn`} onClick={handleClickOpen}>
                    {props.text}
                </Button>
            </> }
            <BootstrapDialog className={`${props.modalClass}`}
                onClose={handleClose}
                open={open} >
                {props.children}
                <Button className='closePop' onClick={handleClose}> <CloseIcon /></Button>
            </BootstrapDialog>
        </div>
    </>
}