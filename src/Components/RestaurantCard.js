import { IMG_CDN_URL } from "../utils/constants";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
  },
});

const RestaurantCard = ({
  id,
  name,
  cuisines,
  cloudinaryImageId,
  deliveryTime,
  costForTwoString,
  avgRating,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardMedia
            component="img"
            image={IMG_CDN_URL + cloudinaryImageId}
            alt="random"
            sx={{ height: "221px" }}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              sx={{ fontSize: 17, fontWeight: 600 }}
            >
              {name}
            </Typography>
            <Typography sx={{ fontSize: 10 }}>
              {cuisines?.join(", ")}
            </Typography>
          </CardContent>
          <CardActions sx={{ ml: 1, justifyContent: "space-between" }}>
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
              {deliveryTime} MINS
            </Typography>
            <Typography size="small" sx={{ fontSize: 12 }}>
              &#x2022;
            </Typography>
            <Typography size="small" sx={{ fontSize: 12 }}>
              {costForTwoString}
            </Typography>
          </CardActions>
        </Card>
      </Grid>
    </ThemeProvider>
  );
};

export default RestaurantCard;
