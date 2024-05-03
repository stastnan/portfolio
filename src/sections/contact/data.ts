import { type IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

interface Contact {
  id: number;
  Icon: IconType;
  link: string;
}

const data: Contact[] = [
  { id: 1, Icon: HiOutlineMail, link: "mailto:nik.stastna@gmail.com" },
  { id: 3, Icon: FaLinkedin, link: "https://www.linkedin.com/in/stastnan" },
  { id: 2, Icon: FaTelegram, link: "https://t.me/stastnan" },
];

export default data;
