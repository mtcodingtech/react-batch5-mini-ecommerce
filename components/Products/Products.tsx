"use client";

import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import AddToCart from "../AddToCart";
import { useCategoryStore } from "@/store/useCategoryStore";
import { useProductsByCategory } from "@/hooks/useProductsByCategory";
import ProductCard from "./ProductCard";
import { Product } from "@/types/general-types";

function Products() {
  const { selectedCategory } = useCategoryStore();
  const { data: productsData, isLoading, isError } = useProductsByCategory();
  const products = productsData?.products || [];
  console.log(products);
  return (
    <>
      {selectedCategory && (
        <>
          {isLoading ? (
            <Box>
              <CircularProgress />
            </Box>
          ) : products.length > 0 ? (
            <Grid container spacing={2}>
             {
                products?.map((product: Product, index: number) => {
                    return(
                        <React.Fragment key={index}>
                            <ProductCard product={product} />
                        </React.Fragment>
                    )
                })
             }
            </Grid>
          ) : (
            <Typography>No products found in this category</Typography>
          )}
        </>
      )}
    </>
  );
}

export default Products;
