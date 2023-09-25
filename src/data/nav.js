import { AiFillPieChart } from "react-icons/ai"
import { BsFillTicketFill, BsPersonLinesFill } from "react-icons/bs"
import { BiSolidContact } from "react-icons/bi"
import { FcIdea } from "react-icons/fc"
import { MdArticle } from "react-icons/md"

export const sideNav = [
    {
        name: 'Overview',
        icon:  <AiFillPieChart size={22} />,
        path: '/'
    },
    {
        name: 'Ticket',
        icon:  <BsFillTicketFill size={22} />,
        path: '/ticket',
    },
    {
        name: 'Idea',
        icon: <FcIdea size={22} />,
        path: '/idea',
    },
    {
        name: 'Contacts',
        icon: <BiSolidContact size={22} />,
        path: '/contacts',
    },
    {
        name: 'Agents',
        icon: <BsPersonLinesFill size={22} />,
        path: '/agents',
    },
    {
        name: 'Articles',
        icon: <MdArticle size={22} />,
        path: '/articles',
    }
]