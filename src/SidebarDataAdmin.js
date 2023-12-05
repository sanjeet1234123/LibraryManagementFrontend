
import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
	{
		title: "Back To Home",
		path: "/admin",
		icon: <AiIcons.AiFillHome />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
	},
	{
		title: "Issue Registry",
		path: "/issue",
		icon: <IoIcons.IoIosCreate />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
	},
	{
		title: "User Requests",
		path: "/getrequest",
		icon: <IoIcons.IoIosMailUnread />,
	},
	{
		title: "Approve Request",
		path: "/updaterequest",
		icon: <IoIcons.IoMdCheckbox />,
	},
	{
		title: "Add Book",
		path: "/addbook",
		icon: <IoIcons.IoIosBook />,
	},
	{
		title: "Delete Book",
		path: "/deletebook",
		icon: <FaIcons.FaEnvelopeOpenText />,

		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
	},
	{
		title: "Update Book",
		path: "/updatebook",
		icon: <IoIcons.IoIosBook />,
	},
	{
		title: "Book Details",
		path: "/booksdetails",
		icon: <IoIcons.IoMdJournal />,
	},
    {
		title: "Update User",
		path: "/updateuser",
		icon: <IoIcons.IoIosPeople />,
	},
	
	

];
