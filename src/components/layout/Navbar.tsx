import { FaHome, FaHandshake, FaPoll, FaStickyNote } from "react-icons/fa";
import { IoIosAlarm } from "react-icons/io";
import NavButton from "./NavButton";
import { IconContext } from 'react-icons';

export default function Navbar() {
    return (
        <IconContext.Provider value={{ className: 'w-1/2 h-1/2', color: "var(--font-color)" }}>
            <div className="flex items-end w-full h-full absolute">
                <nav className="h-16 w-full bg-gradient-to-tl from-[var(--foreground-start)] to-[var(--foreground-end)] flex">
                    <NavButton href="/"><FaHome /></NavButton>
                    <NavButton href="/bets"><FaHandshake /></NavButton>
                    <NavButton href="/polls"><FaPoll /></NavButton>
                    <NavButton href="/notes"><FaStickyNote /></NavButton>
                    <NavButton href="/reminders"><IoIosAlarm /></NavButton>
                </nav>
            </div>
        </IconContext.Provider>
    )
}