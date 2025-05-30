import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function ModalComponente({ open, handleClose, title, text }) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        maxHeight: '80vh',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        overflowY: 'auto',
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography className='titleModal' id="modal-modal-title" variant="h6" component="h2">
                    {title}
                </Typography>

                {
                    text && Array.isArray(text) && text.length > 0 ? (
                        text.map((item, index) => (
                            <Typography key={index} id="modal-modal-description" sx={{ mt: 2 }} color="text.secondary">
                                {item}
                            </Typography>
                        ))
                    ) : (
                        <Typography id="modal-modal-description" sx={{ mt: 2 }} color="text.secondary">
                            No hay información disponible
                        </Typography>
                    )
                }
            </Box>
        </Modal>
    );
}

export default ModalComponente;
