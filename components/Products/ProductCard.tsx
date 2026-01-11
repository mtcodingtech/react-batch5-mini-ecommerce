import { Card, CardContent, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import AddToCart from "../AddToCart";
import { Product } from "@/types/general-types";
import Link from "next/link";

interface ProductProps {
  product: Product;
}
function ProductCard({ product }: ProductProps) {
  const { thumbnail, title, price, id } = product;
  return (
    <Grid size={{ xs: 6, md: 3 }}>
      <Card>
        <Link href={`/product/${id}`}>
          <Image
            src={thumbnail}
            alt="img"
            width="500"
            height={500}
            className="h-40 object-contain"
          ></Image>
        </Link>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="subtitle1">{title}</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            $ {price}
          </Typography>
          <AddToCart product={product} />
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ProductCard;
