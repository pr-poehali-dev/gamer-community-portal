
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const ProfileHeader = () => (
  <header className="border-b border-[#2D3748] bg-[#1A1F2C]/95 backdrop-blur-sm sticky top-0 z-10">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2 text-[#9b87f5]">
        <Link to="/">
          <Icon name="GamepadIcon" size={28} />
        </Link>
        <span className="font-bold text-xl">GamersUnite</span>
      </div>
      
      <div className="flex gap-4 items-center">
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-[#9b87f5] transition-colors">Главная</Link>
          <Link to="/events" className="hover:text-[#9b87f5] transition-colors">Мероприятия</Link>
          <Link to="/map" className="hover:text-[#9b87f5] transition-colors">Карта</Link>
          <Link to="/profile" className="text-[#9b87f5] transition-colors font-medium">Профиль</Link>
        </nav>
      </div>
    </div>
  </header>
);

export default ProfileHeader;
