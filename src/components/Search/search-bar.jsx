import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextField, Modal, Backdrop, Fade, Grid, Box } from "@material-ui/core";
import { getBeer } from "../../api/index";
import { BeerCard } from "../BeerCard/beer-card"

const styles = {
  root: {
    width: "100%",
    "& label": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
  input: {
    color: "white",
    borderColor: "white",
  },
};

export const SearchBar = (props) => {
  const { open, handleClose, classes } = props;
  const [searchByName, setSearchByName] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const beer = await getBeer({ name: searchByName });
    handleClose();
  };

  const handleChange = (event) => {
    setSearchByName(event.target.value);
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="center"
            style={{
              minHeight: "100vh",
              maxWidth: "50vw",
              margin: "auto",
              outline: "none",
            }}
          >
            <Grid item xs={12}>
              <Box bgcolor="text.secondary" p={2}>
                <form onSubmit={handleSubmit}>
                  <TextField
                    className={classes.root}
                    label="Beer name"
                    name="beer"
                    onChange={handleChange}
                    variant="outlined"
                    InputProps={{
                      className: classes.input,
                    }}
                  />
                </form>
              </Box>
            </Grid>
          </Grid>
        </Fade>
      </Modal>
    </>
  );
};

export default withStyles(styles)(SearchBar);
