"use client";
import { useCartStore } from "@/store/useCartStore";
import { DeleteOutline } from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

function CartPage() {
  const { cart, updateQuantity, removeItem, clearCart } = useCartStore();
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <>
      {cart.length === 0 ? (
        <>
          <Container>
            <Typography>Your cart is empty</Typography>
            <Link href={"/"}>
              <Button>Go to Shopping</Button>
            </Link>
          </Container>
        </>
      ) : (
        <Container maxWidth="lg">
          <Typography variant="h4">Your cart</Typography>
          <Stack spacing={4}>
            {cart.map((item) => {
              const itemTotal = item.price * item.quantity;
              return (
                <Box
                  key={item.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <Typography>{item.title}</Typography>
                    <Typography>Unit Price: {item.price}</Typography>
                  </Box>
                  <Stack direction={"row"} spacing={2}>
                    <Stack>
                      <ButtonGroup
                        variant="outlined"
                        aria-label="Basic button group"
                      >
                        <Button onClick={() => updateQuantity(item.id, "dec")}>
                          -
                        </Button>
                        <Button>{item.quantity}</Button>
                        <Button onClick={() => updateQuantity(item.id, "inc")}>
                          +
                        </Button>
                      </ButtonGroup>
                    </Stack>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography>{itemTotal.toFixed(2)}</Typography>
                      <IconButton onClick={() => removeItem(item.id)}>
                        <DeleteOutline></DeleteOutline>
                      </IconButton>
                    </Box>
                  </Stack>
                </Box>
              );
            })}
          </Stack>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ textAlign: "right" }}>
            <Typography variant="h5">
              Total: ${totalPrice.toFixed(2)}
            </Typography>
            <Button
              variant="contained"
              onClick={() => {
                alert("Order success");
                clearCart();
              }}
            >
              Pay Now
            </Button>
          </Box>
        </Container>
      )}
    </>
  );
}

export default CartPage;
