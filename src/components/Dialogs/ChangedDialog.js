import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

export const ChangedDialog = (props) => {
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  return (
    <Dialog
      open={props.changed}
      TransitionComponent={Transition}
      keepMounted
      onClose={props.closed}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        {"Password successfully changed!"}
      </DialogTitle>
      <DialogActions>
        <Button onClick={props.closed} color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};
