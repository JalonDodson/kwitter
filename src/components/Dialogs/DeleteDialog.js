import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export const DeleteDialog = (props) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.close}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Delete Account</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you would like to delete your account? Please keep in
          mind that this action is irreversible and all data associated with
          your account will be destroyed.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.close} color="primary">
          Cancel
        </Button>
        <Button onClick={props.confirm} color="primary">
          Delete Account
        </Button>
      </DialogActions>
    </Dialog>
  );
};
