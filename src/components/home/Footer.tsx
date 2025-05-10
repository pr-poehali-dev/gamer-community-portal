
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] border-t border-[#2D3748] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-[#9b87f5] mb-4 md:mb-0">
            <Icon name="GamepadIcon" size={24} />
            <span className="font-bold text-lg">GamersUnite</span>
          </div>

          <nav className="flex gap-6 mb-4 md:mb-0">
            <Link to="/" className="text-gray-400 hover:text-[#9b87f5] transition-colors">
              Главная
            </Link>
            <Link to="/events" className="text-gray-400 hover:text-[#9b87f5] transition-colors">
              Мероприятия
            </Link>
            <Link to="/about" className="text-gray-400 hover:text-[#9b87f5] transition-colors">
              О нас
            </Link>
            <Link to="/rules" className="text-gray-400 hover:text-[#9b87f5] transition-colors">
              Правила
            </Link>
          </nav>

          <div className="text-gray-400 text-sm">
            © 2025 GamersUnite. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
