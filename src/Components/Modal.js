import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { modalClose } from '../redux/Action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Form from '../features/Form';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {



    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.modalOpen)

    const handleClose = () => {
        dispatch(modalClose({ modal: false, selected: "" }))
    }

    return (
        <div>
            <Modal
                open={data.modal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                       <Form/>
                    </Typography>
                </Box>
            </Modal>
           
        </div>
    );
}
