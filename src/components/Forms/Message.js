import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { messageStyles } from "../../hooks/messageStyles";

export const Message = (props) => {
    const classes = messageStyles();
    return (
        <>
          <form onSubmit={props.submit}>
            <TextField
              label="What's on your mind?"
              multiline
              rows={4}
              placeholder="Here's what I'm thinking..."
              variant="filled"
              InputProps={{
                className: classes.multilineColor,
              }}
              onKeyDown={props.enter}
              onBlur={props.handle}
            />
            <Button type="submit" className={classes.btn}>
              Post Message
            </Button>
          </form>
          </>
    )
}