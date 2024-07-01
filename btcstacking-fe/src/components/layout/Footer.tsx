import Link from "next/link";
import DiscordIcon from "../icons/DiscordIcon";
import HomeIcon from "../icons/HomeIcon";
import TelegramIcon from "../icons/TelegramIcon";
import XSocialIcon from "../icons/XSocialIcon";

export default function Footer() {
  return (
    <footer className="mt-[335px] pb-[50px]">
      <div className="w-fit mx-auto">
        <p className="text-white text-center mb-[26px]">Terms of Use</p>
        <div className="grid grid-cols-4 gap-[62px]">
          {FOOTER_NAVIGATION.map((item) => (
            <Link key={item.id} href={item.href}>
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

const FOOTER_NAVIGATION = [
  {
    id: 1,
    href: "/",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    href: "/",
    icon: <XSocialIcon />,
  },
  {
    id: 3,
    href: "/",
    icon: <TelegramIcon />,
  },
  {
    id: 4,
    href: "/",
    icon: <DiscordIcon />,
  },
];
