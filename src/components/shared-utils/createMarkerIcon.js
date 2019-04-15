import React from "react";
import IconAirport from "../shared-components/place_types/IconAirport";
import IconDrink from "../shared-components/place_types/IconDrink";
import IconEat from "../shared-components/place_types/IconEat";
import IconGeneral from "../shared-components/place_types/IconGeneral";
import IconFitness from "../shared-components/place_types/IconFitness";
import IconLodging from "../shared-components/place_types/IconLodging";
import IconMoney from "../shared-components/place_types/IconMoney";
import IconMovies from "../shared-components/place_types/IconMovies";
import IconNature from "../shared-components/place_types/IconNature";
import IconRelax from "../shared-components/place_types/IconRelax";
import IconStore from "../shared-components/place_types/IconStore";
import IconStudy from "../shared-components/place_types/IconStudy";
import IconTranspo from "../shared-components/place_types/IconTranspo";

const iconTypes = {
  airport: className => <IconAirport className={className} />,
  drink: className => <IconDrink className={className} />,
  eat: className => <IconEat className={className} />,
  fitness: className => <IconFitness className={className} />,
  lodging: className => <IconLodging className={className} />,
  finance: className => <IconMoney className={className} />,
  movies: className => <IconMovies className={className} />,
  nature: className => <IconNature className={className} />,
  relax: className => <IconRelax className={className} />,
  store: className => <IconStore className={className} />,
  study: className => <IconStudy className={className} />,
  transpo: className => <IconTranspo className={className} />,
  general: className => <IconGeneral className={className} />
};

const groups = {
  airport: ["airport"],
  drink: ["bar", "night_club"],
  eat: ["bakery", "cafe", "restaurant"],
  fitness: ["gym"],
  lodging: ["lodging"],
  finance: ["atm", "bank", "accounting", "insurance_agency"],
  movies: ["movie_rental", "movie_theater"],
  nature: ["campground", "park", "rv_park"],
  relax: ["spa"],
  store: [
    "beauty_salon",
    "bicycle_store",
    "book_store",
    "clothing_store",
    "convenience_store",
    "department_store",
    "electronics_store",
    "furniture_store",
    "hardware_store",
    "home_goods_store",
    "jewelry_store",
    "liquor_store",
    "moving_company",
    "pet_store",
    "shoe_store",
    "shopping_mall",
    "store",
    "supermarket"
  ],
  study: ["library", "school"],
  transpo: [
    "bus_station",
    "subway_station",
    "taxi_stand",
    "train_station",
    "transit_station"
  ]
};

/**
 * create marker icon component
 * @param {string} type
 * @param {string} className
 * @returns {object} marker icon component
 */
const createIcon = (type, className) => {
  let result = null;
  for (let prop in groups) {
    if (groups[prop].includes(type)) {
      result = iconTypes[prop](className);
      break;
    }
  }
  if (result) return result;
  else return iconTypes.general(className);
};

export default createIcon;
