
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  
  // Получаем выбранную вкладку из URL-параметра tab
  const getDefaultTab = () => {
    const tab = searchParams.get("tab");
    return tab === "register" ? "register" : "login";
  };

  // Обработчик входа в систему
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Имитация запроса авторизации
    setTimeout(() => {
      setIsLoading(false);
      // В реальном приложении здесь будет запрос к API и сохранение токена
      localStorage.setItem("user", JSON.stringify({ 
        id: "1",
        username: "gamer123",
        email: "user@example.com",
        avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }));
      navigate("/profile");
    }, 1000);
  };

  // Обработчик регистрации
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Имитация запроса регистрации
    setTimeout(() => {
      setIsLoading(false);
      // В реальном приложении здесь будет запрос к API и сохранение токена
      localStorage.setItem("user", JSON.stringify({ 
        id: "1",
        username: "gamer123",
        email: "user@example.com",
        avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }));
      navigate("/profile");
    }, 1000);
  };

  return {
    isLoading,
    handleLogin,
    handleRegister,
    getDefaultTab
  };
};
