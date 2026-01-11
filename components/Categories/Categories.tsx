"use client";
import React from "react";
import Category from "./Category";
import { Container, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useCategories } from "@/hooks/useCategories";
import { CategoryType } from "@/types/general-types";
import { useCategoryStore } from "@/store/useCategoryStore";

function Categories() {
  const { data: categories, isLoading, isError } = useCategories();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  console.log("env>>", process.env.NEXT_PUBLIC_BASE_URL);
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          border: `1px solid ${grey[300]}`,
          my: 10,
          "&.MuiContainer-root": {
            px: 0,
          },
        }}
      >
        <Grid container>
          {categories
            ?.slice(0, 6)
            .map((category: CategoryType, index: number) => {
              return (
                <React.Fragment key={index}>
                  <Category category={category} index={index} />
                </React.Fragment>
              );
            })}
        </Grid>
      </Container>
    </>
  );
}

export default Categories;
