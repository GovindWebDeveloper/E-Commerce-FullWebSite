import { Link } from "react-router-dom";
import {
  FaBorderAll,
  FaBagShopping,
  FaUserClock,
  FaLocationDot,
} from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
import { TbReport } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { GrGallery } from "react-icons/gr";

const adminMenuItems = [
  {
    key: "/admin",
    icon: <FaBorderAll />,
    label: <Link to="/admin">Dashboard</Link>,
  },
  {
    key: "/admin/orders",
    icon: <FaBagShopping />,
    label: <Link to="/admin/orders">Order Details</Link>,
  },
  {
    key: "/admin/category",
    icon: <BiSolidCategory />,
    label: <Link to="/admin/category">Product Category</Link>,
  },
  {
    key: "/admin/users",
    icon: <FaUserClock />,
    label: <Link to="/admin/users">Users Details</Link>,
  },
  {
    key: "/admin/report",
    icon: <TbReport />,
    label: <Link to="/admin/report">Reports</Link>,
  },
  {
    key: "/admin/gallery",
    icon: <GrGallery />,
    label: <Link to="/admin/gallery">Gallery</Link>,
  },
  {
    key: "/admin/location",
    icon: <FaLocationDot />,
    label: <Link to="/admin/location">Location</Link>,
  },
  {
    key: "/admin/setting",
    icon: <IoMdSettings />,
    label: <Link to="/admin/setting">Setting</Link>,
  },
];

export default adminMenuItems;
