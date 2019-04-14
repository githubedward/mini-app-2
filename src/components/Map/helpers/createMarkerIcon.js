import IconAirport from "../map_icons/IconAirport";
import IconDrink from "../map_icons/IconDrink";
import IconEat from "../map_icons/IconEat";
import IconGeneral from "../map_icons/IconGeneral";
import IconFitness from "../map_icons/IconFitness";
import IconLodging from "../map_icons/IconLodging";
import IconMoney from "../map_icons/IconMoney";
import IconMovies from "../map_icons/IconMovies";
import IconNature from "../map_icons/IconNature";
import IconRelax from "../map_icons/IconRelax";
import IconStore from "../map_icons/IconStore";
import IconStudy from "../map_icons/IconStudy";
import IconTranspo from "../map_icons/IconTranspo";

const createIcon = {
  airport: ({ className }) => <IconAirport className={className} />,
  drink: ({ className }) => <IconDrink className={className} />,
  eat: ({ className }) => <IconEat className={className} />,
  fitness: ({ className }) => <IconFitness className={className} />,
  lodging: ({ className }) => <IconLodging className={className} />,
  money: ({ className }) => <IconMoney className={className} />,
  movies: ({ className }) => <IconMovies className={className} />,
  nature: ({ className }) => <IconNature className={className} />,
  relax: ({ className }) => <IconRelax className={className} />,
  store: ({ className }) => <IconStore className={className} />,
  study: ({ className }) => <IconStudy className={className} />,
  transpo: ({ className }) => <IconTranspo className={className} />,
  general: ({ className }) => <IconGeneral className={className} />
};

export default createIcon;
