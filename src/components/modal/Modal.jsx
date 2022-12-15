import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import { useDispatch, useSelector } from 'react-redux';
import { selectModal, closeModal } from '../../redux/slices/modalSlice';
import { selectProducts } from '../../redux/slices/productSlice';

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="down" ref={ref} {...props} />
));

const Modal = () => {
  const dispatch = useDispatch();
  const { isOpen, id } = useSelector(selectModal);
  const { items } = useSelector(selectProducts);

  const currentProduct = items.find((item) => item.id === id);

  const handleClose = () => {
    dispatch(closeModal());
  };

  console.count();

  if (!currentProduct) {
    return null;
  }

  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="modal-dialog-slide-description"
    >
      <DialogTitle>{currentProduct.name}</DialogTitle>
      <DialogContent>
        <DialogContentText id="modal-dialog-slide-description">
          {currentProduct.description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Закрыть</Button>
      </DialogActions>
    </Dialog>
  );
};

Transition.displayName = 'Modal slide down';

export default Modal;
