import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

export const UploadDialog = (props) => {
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  return (
    <Dialog
      open={props.failed}
      TransitionComponent={Transition}
      keepMounted
      onClose={props.close}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">{"Upload Failed"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Oh no! The file you tried to upload appears to be too big—our
          tortoises were unable to process it! Please ensure that the file you
          uploaded is less than 200 kilobytes (KB) in size and is one of the
          supported types: .JPEG, .PNG, or .GIF.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.close} color="primary">
          Acknowledge
        </Button>
      </DialogActions>
    </Dialog>
  );
};
