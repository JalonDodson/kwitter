import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

export const PasswordDialog = (props) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.close}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Change Password</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter your new password here, then press "Change Password" to
          continue, or "Cancel" to abort.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="password"
          label="New Password"
          type="password"
          onChange={props.handle}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.close} color="primary">
          Cancel
        </Button>
        <Button onClick={props.confirm} color="primary">
          Change Password
        </Button>
      </DialogActions>
    </Dialog>
  );
};
