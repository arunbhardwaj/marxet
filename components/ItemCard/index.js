import { Card, CardHeader, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import Link from "next/link";

import CardImage from "./CardImage.js";
import CardDescription from "./CardDescription.js";
import UsernameButton from "./UsernameButton.js";

const ItemCard = ({ children, id }) => {

  return (
    <Link href={`/products/${id}`}>
      <Card raised sx={{ width: "15vw", cursor: "pointer" }}>
        {children}
        <CardImage />
        <CardDescription />
        <UsernameButton />
      </Card>
    </Link>
  );
};

export default ItemCard;
