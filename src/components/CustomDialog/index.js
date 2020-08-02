import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import PropTypes from "prop-types";
import "./styles.css";

export const CustomDialog = ({
  isOpen,
  handleClose,
  handleConfirm,
  title,
  subtitle,
  children,
}) => {
  CustomDialog.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleConfirm: PropTypes.func,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    children: PropTypes.element,
  };

  return (
    <>
      <Dialog
        fullWidth
        maxWidth="md"
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{subtitle}</DialogContentText>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Fechar
          </Button>
          <Button onClick={handleConfirm} color="secondary">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
