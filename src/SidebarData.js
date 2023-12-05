
import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
	{
		title: "Back To Home",
		path: "/home",
		icon: <AiIcons.AiFillHome />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
	},
	{
		title: "Raise Request",
		path: "/request",
		icon: <IoIcons.IoIosBook />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
	},
	{
		title: "Your Request",
		path: "/contact",
		icon: <FaIcons.FaHistory />,
	},
	{
		title: "Book Events",
		path: "/events",
		icon: <FaIcons.FaEnvelopeOpenText />,

		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
	},
    {
		title: "Contact Us",
		path: "/support",
		icon: <FaIcons.FaPhone />,
	},
	{
		title: "Support",
		path: "/support",
		icon: <IoIcons.IoMdHelpCircle />,
	},
];
