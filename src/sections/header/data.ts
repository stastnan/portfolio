import { type IconType } from "react-icons";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

interface Link {
  id: number;
  link: string;
  Icon: IconType;
}

const data: Link[] = [
  { id: 1, link: "https://www.linkedin.com/in/stastnan", Icon: FaLinkedin },
  { id: 2, link: "https://github.com/stastnan", Icon: AiFillGithub },
  {
    id: 3,
    link: "https://www.instagram.com/my.coding.journey.cz",
    Icon: AiOutlineInstagram,
  },
];

export default data;
