
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

interface HeaderProps {
  transparent?: boolean;
}

const Header = ({ transparent = false }: HeaderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Проверка авторизации пользователя
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);

    // Добавление обработчика прокрутки
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`${isScrolled || !transparent ? 'bg-[#1A1F2C]/95' : 'bg-transparent'} 
        border-b border-[#2D3748]/50 backdrop-blur-sm sticky top-0 z-10 transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 text-[#9b87f5]">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="GamepadIcon" size={28} />
            <span className="font-bold text-xl">GamersUnite</span>
          </Link>
        </div>
        
        <div className="flex gap-4 items-center">
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="hover:text-[#9b87f5] transition-colors">Главная</Link>
            <Link to="/events" className="hover:text-[#9b87f5] transition-colors">Мероприятия</Link>
            <Link to="/map" className="hover:text-[#9b87f5] transition-colors">Карта</Link>
            {isLoggedIn && (
              <Link to="/profile" className="hover:text-[#9b87f5] transition-colors">Профиль</Link>
            )}
          </nav>
          
          {isLoggedIn ? (
            <Link to="/profile">
              <Button className="bg-[#9b87f5] hover:bg-[#8a76e4]">
                Мой профиль
              </Button>
            </Link>
          ) : (
            <>
              <Link to="/auth">
                <Button variant="outline" className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white">
                  Войти
                </Button>
              </Link>
              <Link to="/auth?tab=register">
                <Button className="bg-[#9b87f5] hover:bg-[#8a76e4]">
                  Регистрация
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
