import React from "react";

import { uploadStyles } from "../../hooks/uploadStyles";

import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

export const PhotoUpload = (props) => {
    const classes = uploadStyles();
    return (
        <form className={classes.photoContainer}>
              <Button
                className={classes.photoBtn}
                variant="contained"
                component="label"
                startIcon={<CloudUploadIcon />}
              >
                <input
                  type="file"
                  accept=".jpeg,.jpg,.gif,.png"
                  id="file-upload"
                  ref={props.file}
                  onChange={props.upload}
                  style={{ display: "none" }}
                />
                Upload Photo
              </Button>
            </form>
    )
}