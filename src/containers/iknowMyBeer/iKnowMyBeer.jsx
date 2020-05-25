import React, { useState } from "react";
import {
  Card,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { SearchBar } from "../../components";

export const IKnowMyBeer = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = async () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component="img"
            alt="Beer"
            height="250"
            image="/i-know-my-beer-card.jpg"
            title="I Know My Beer"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              I know my beer!
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              This will let you search through 1000+ beers.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {open &&  <SearchBar open={open} handleClose={handleClose}/>}
    </>
  );
};

export default IKnowMyBeer;
