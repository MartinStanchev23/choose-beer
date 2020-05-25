import React from "react";
import {Card, Typography, CardActionArea, CardMedia, CardContent} from "@material-ui/core"

export const FindMyBeer = () => {
  return (
    <>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Beers"
            height="250"
            image="/find-my-beer-card.jpg"
            title="Find My Beer"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Find my beer?
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              This will start a quiz to find your perfect match.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default FindMyBeer;
