import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useRestaurant from "../utils/useRestaurant";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const theme = createTheme({});

export default function Body() {
  // eslint-disable-next-line no-unused-vars
  const [searchText, restaurants, setRestaurants] = useRestaurant();
  //   const isOnline = useOnline();

  // if (!isOnline) {
  //   return <h1>🔴Offline, please check your internet connection!!</h1>;
  // }
  if (!restaurants) {
    return <Shimmer />;
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        ></Box>
        <Container sx={{ py: 4, maxWidth: "1300px !important" }}>
          {/* End hero unit */}
          <Grid container spacing={0} rowSpacing={{ xs: 2, sm: 4, md: 8 }}>
            {restaurants?.length === 0 ? (
              <h1>No Restaurants Available Currently!</h1>
            ) : (
              restaurants.map((restaurant) => (
                <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
              ))
            )}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
