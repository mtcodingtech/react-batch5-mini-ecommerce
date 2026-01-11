"use client";
import AddToCart from "@/components/AddToCart";
import { useProductById } from "@/hooks/useProductById";
import { Container, Grid, Skeleton, Typography } from "@mui/material";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

function ProductDatail() {
  const params = useParams();
  const id = typeof params?.id === "string" ? params.id : "";
  const { data: product, isLoading, isError } = useProductById(id);

 
  if (isLoading) return <Skeleton></Skeleton>;
  if (isError || !product) return <Typography>Product not found</Typography>;
  return (
    <Container maxWidth={"lg"}>
      <Grid container>
        <Grid size={{ xs: 12, md: 6 }}>
          <Image
            src={product.thumbnail}
            alt="img"
            width="500"
            height={500}
            className="h-40 object-contain"
          ></Image>
        </Grid>
        <Grid>
          <Typography variant="subtitle1">{product.title}</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            $ {product.price}
          </Typography>
          <AddToCart product={product} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDatail;
