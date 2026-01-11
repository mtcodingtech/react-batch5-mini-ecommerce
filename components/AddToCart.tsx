import { Button } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Product } from "@/types/general-types";
import { useCartStore } from "@/store/useCartStore";

interface AddToCardProps {
  product: Product;
}
function AddToCart({ product }: AddToCardProps) {
  const addToCart = useCartStore((state) => state.addToCart)
  const { cart } = useCartStore();
  console.log("cart", cart)
  return (
    <>
      <Button
        variant="outlined"
        startIcon={<ShoppingCartIcon fontSize="small" />}
        onClick={() => addToCart(product, 1)}
      >
        Add to Cart
      </Button>
    </>
  );
}

export default AddToCart;
