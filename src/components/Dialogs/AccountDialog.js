import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

export const AccountDialog = (props) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.close}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        Change Account Information
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          You are now able to change your account information. Please enter your
          new desired information into the boxes. If you leave a box empty, the
          related information will remain unchanged.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Change Display Name"
          type="text"
          onChange={props.nameChange}
          value={props.name}
          fullWidth
        />
        <TextField
          margin="dense"
          name="about"
          rows={8}
          label="Tell us a little about yourself!"
          type="text"
          onChange={props.aboutChange}
          value={props.about}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.close} color="primary">
          Cancel
        </Button>
        <Button onClick={props.submit} color="primary">
          Confirm Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};
