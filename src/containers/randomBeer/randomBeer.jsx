import React, { useState } from "react";
import {
  Card,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { BeerCard } from "../../components/index";
import { getRandomBeer } from "../../api/index";

export const RandomBeer = () => {
  const [open, setOpen] = useState(false);
  const [beer, setBeer] = useState(null);

  const handleOpen = async () => {
    setBeer(await getRandomBeer());
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
            alt="Beers"
            height="250"
            image="/random-beer-card.jpg"
            title="Random Beer"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Random Beer?
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              This will get you a random beer.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {open && beer && <BeerCard open={open} handleClose={handleClose} beer={beer} />}
    </>
  );
};

export default RandomBeer;
