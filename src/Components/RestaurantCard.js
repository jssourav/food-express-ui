import { IMG_CDN_URL } from "../utils/constants";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

const theme = createTheme({
  typography: {
    starRating: {
      color: "white",
      backgroundColor: "#48c479",
      height: "20px",
      width: "43px",
      padding: "2px 5px 0px 5px",
      fontWeight: "400",
      fontSize: "12px",
    },
    starRatingYellow: {
      color: "white",
      backgroundColor: "#db7c38",
      height: "20px",
      width: "43px",
      padding: "2px 5px 0px 5px",
      fontWeight: "400",
      fontSize: "12px",
    },
    quickView: {
      fontSize: "13px",
      left: "20px",
      right: "20px",
      top: "33px",
      position: "absolute",
      textAlign: "center",
      float: "none",
      display: "block",
      margin: " 0 auto",
      color: "#5d8ed5",
      textTransform: "uppercase",
      fontWeight: 600,
    },
  },
});

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  slaString,
  costForTwoString,
  avgRating,
}) => {
  const [showQuickView, setShowQuickView] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        sx={{
          "&:hover": {
            borderColor: "#d3d5df",
            boxShadow: "0 4px 7px 0 rgba(218,220,230,.6)",
          },
          height: "426px",
        }}
      >
        <Card
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "254px",
            margin: "auto",
          }}
          onMouseEnter={() => setShowQuickView(true)}
          onMouseLeave={() => setShowQuickView(false)}
        >
          <CardMedia
            component="img"
            image={IMG_CDN_URL + cloudinaryImageId}
            alt="random"
            sx={{ height: "160px", width: "254px" }}
          />
          <CardContent sx={{ flexGrow: 1, pl: 0, pr: 0 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              sx={{ fontSize: 17, fontWeight: 600 }}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                fontSize: 10,
              }}
            >
              {cuisines?.join(", ")}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              justifyContent: "space-between",
              p: 0,
              pl: 0,
              pr: 0,
              mr: 0,
              ml: 0,
            }}
          >
            <Typography
              size="small"
              variant={
                parseFloat(avgRating) > 3.9 ? "starRating" : "starRatingYellow"
              }
            >
              <StarIcon sx={{ fontSize: 11 }} />
              {avgRating}
            </Typography>
            <Typography size="small" sx={{ fontSize: 12 }}>
              &#x2022;
            </Typography>
            <Typography size="small" sx={{ fontSize: 12 }}>
              {slaString}
            </Typography>
            <Typography size="small" sx={{ fontSize: 12 }}>
              &#x2022;
            </Typography>
            <Typography size="small" sx={{ fontSize: 12 }}>
              {costForTwoString}
            </Typography>
          </CardActions>
          {showQuickView && (
            <CardContent
              sx={{
                position: "relative",
                marginBottom: "36px !important",
              }}
            >
              <Typography
                size="small"
                variant="quickView"
                sx={{ paddingTop: "12px", borderTop: "1px solid #e9e9eb" }}
              >
                Quick View
              </Typography>
            </CardContent>
          )}
        </Card>
      </Grid>
    </ThemeProvider>
  );
};

export default RestaurantCard;
