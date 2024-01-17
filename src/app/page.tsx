"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function Home() {
  const [amount, setAmount] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    if (typeof event.target.value === 'string') setAmount(event.target.value);
  };

  return (
    <Box
      className="box"
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Produto" variant="outlined" />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Quantidade</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={amount}
          label="Quantidade"
          onChange={handleChange}
        >
          <MenuItem value={10}>Dez</MenuItem>
          <MenuItem value={20}>Vinte</MenuItem>
          <MenuItem value={30}>Trinta</MenuItem>
        </Select>
      </FormControl>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" >
          Excluir
        </Button>
        <Button variant="contained" >
          Cadastrar
        </Button>
      </Stack>
    </Box>
  );
}
