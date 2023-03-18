const CORSANYWHARE_URL = "https://cors-anywhere.herokuapp.com/";
export const IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/";

export const FETCH_RESTAURENTS_URL =
  CORSANYWHARE_URL +
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&page_type=DESKTOP_WEB_LISTING";

export const FETCH_MENU_URL =
  CORSANYWHARE_URL +
  "https://www.swiggy.com/dapi/menu/v4/full?lat=28.5355161&lng=77.3910265&menuId=";
