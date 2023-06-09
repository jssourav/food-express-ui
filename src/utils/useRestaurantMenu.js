import { useState, useEffect } from 'react';
import { FETCH_MENU_URL } from '../utils/constants';

const useRestaurantMenu = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo(resId);
  }, []);

  async function getRestaurantInfo (resId) {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    console.log(json);
    setRestaurant(json.data);
  }

  return restaurant;
};

export default useRestaurantMenu;
