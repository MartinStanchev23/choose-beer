import React from "react";
import {
  Modal,
  Fade,
  Backdrop,
  CardContent,
  Card,
  Typography,
  CardMedia,
  Grid,
} from "@material-ui/core";

export default function BeerCard(props) {
  const { open, handleClose, beer } = props;
  const { abv, labels, nameDisplay, description, style } = beer;
  const image = labels?.contentAwareMedium || labels?.medium;
  const alcohol = abv && abv + "%"
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
        style={{
          overflow: "scroll",
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
            <Card style={{ maxWidth: "75vw" }}>
              <CardMedia
                component="img"
                alt="Beer"
                style={{
                  height: "25vh",
                  objectFit: image ? "contain" : "cover",
                }}
                image={image || "/default_card.jpg"}
                title={nameDisplay || "Random Beer Picture"}
              />
              <CardContent>
                <Typography component="h5" variant="h5">
                  {nameDisplay} {alcohol}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {description ||
                    style?.description ||
                    "Unforunately this beer does not have a description"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Fade>
      </Modal>
    </>
  );
}
