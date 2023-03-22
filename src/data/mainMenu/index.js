import {
  HomeIconOutline,
  QuestionMarkCircleIconOutline,
  // InformationCircleIcon,
  // EyeIconMini,
} from "lib/@heroicons";
import { Invoices, Withdraw, Contact } from "components/svg";
import { URL_PATHS } from "data/routes";
export const MainMenuData = [
  {
    id: 1,
    name: "Home",
    icon: <HomeIconOutline />,
    link: URL_PATHS.HOME,
  },
  {
    id: 2,
    name: "Invoices",
    icon: <Invoices />,
    link: URL_PATHS.INVOICES.INDEX,
  },
  {
    id: 3,
    name: "Balance",
    icon: <Withdraw />,
    link: "#",
  },
  {
    id: 4,
    name: "Contacts",
    icon: <Contact />,
    link: "#",
  },
  {
    id: 5,
    name: "Help",
    icon: <QuestionMarkCircleIconOutline />,
    link: "#",
  },
];
