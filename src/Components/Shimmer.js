import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
const theme = createTheme({});

const Shimmer = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6
          }}
        ></Box>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* End hero unit */}
          <Grid container spacing={4} sx={{ my: 5 }}>
            {Array(20)
              .fill('')
              .map((e, index) => (
                <Grid item key={index} xs={12} sm={6} md={3} theme={theme}>
                  <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <Skeleton
                      sx={{ height: 250 }}
                      animation="wave"
                      variant="rectangular"
                    />
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default Shimmer;
