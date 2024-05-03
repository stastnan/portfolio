import { type IconType } from "react-icons";
import { CiMail } from "react-icons/ci";
import { FaReact } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";
import { PiProjectorScreenChartLight } from "react-icons/pi";

interface Section {
  id: number;
  Icon: IconType;
  link: string;
}

export const data: Section[] = [
  { id: 1, link: "home", Icon: IoHomeOutline },
  { id: 2, link: "about", Icon: GoPerson },
  { id: 3, link: "technologies", Icon: FaReact },
  { id: 4, link: "portfolio", Icon: PiProjectorScreenChartLight },
  { id: 5, link: "contact", Icon: CiMail },
];
