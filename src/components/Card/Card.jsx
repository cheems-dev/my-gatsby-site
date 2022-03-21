import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Styles
import Styles from "./Card.styles";

export default function CardSimple(props) {
  const { image, title } = props;
  return (
    <Styles>
      <Card sx={{ width: 320, borderRadius: "8px" }}>
        {image ?? (
          <CardMedia component="img" alt={title} height="auto" image={image} />
        )}
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: "center" }}
          >
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Styles>
  );
}
