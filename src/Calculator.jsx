import { Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { audRate, cadRate, eurRate, gbpRate, goldPrice } from "./constants";

const Calculator = ({ currentCurrency }) => {
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  useEffect(() => {
    const changePrice = (currency) => {
      switch (currency) {
        case "EUR": {
          return (amount * goldPrice * eurRate).toFixed(2);
        }
        case "GBP": {
          return (amount * goldPrice * gbpRate).toFixed(2);
        }
        case "AUD": {
          return (amount * goldPrice * audRate).toFixed(2);
        }
        case "CAD": {
          return (amount * goldPrice * cadRate).toFixed(2);
        }
        default: {
          return (amount * goldPrice).toFixed(2);
        }
      }
    };
    const newPrice = changePrice(currentCurrency);
    setPrice(newPrice);
  }, [amount, currentCurrency]);

  return (
    <Box display="flex" p={2}>
      <TextField
        label="Amount"
        sx={{ minWidth: "100px", mr: 2 }}
        variant="outlined"
        value={amount}
        onChange={handleAmountChange}
      />
      <TextField
        label="Price"
        sx={{ minWidth: "100px" }}
        variant="outlined"
        value={`${currentCurrency}: ${price}`}
        disabled
      />
    </Box>
  );
};

export default Calculator;
