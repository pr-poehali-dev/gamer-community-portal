
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserProfile, EditedProfile } from "@/types/user";

export const useProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [editedProfile, setEditedProfile] = useState<EditedProfile>({
    username: "",
    email: "",
    region: "",
    steamId: "",
    bio: ""
  });

  // Загрузка данных пользователя
  useEffect(() => {
    const userJson = localStorage.getItem("user");
    
    if (!userJson) {
      navigate("/auth");
      return;
    }
    
    try {
      // Загрузка пользователя из localStorage (в реальном приложении будет запрос к API)
      const userData = JSON.parse(userJson);
      
      // Расширяем данные пользователя для демонстрации
      const extendedUser: UserProfile = {
        ...userData,
        region: "Москва",
        games: ["CS2", "Dota 2", "Baldur's Gate 3", "Cyberpunk 2077"],
        steamId: "gamer123",
        bio: "Заядлый геймер со стажем. Люблю соревновательные игры и хорошие синглплееры. Ищу команду для CS2 и Dota 2.",
        joinedDate: "Май 2025"
      };
      
      setUser(extendedUser);
      setEditedProfile({
        username: extendedUser.username,
        email: extendedUser.email,
        region: extendedUser.region || "",
        steamId: extendedUser.steamId || "",
        bio: extendedUser.bio || ""
      });
      
      setIsLoading(false);
    } catch (error) {
      console.error("Ошибка при загрузке профиля:", error);
      navigate("/auth");
    }
  }, [navigate]);

  // Обработчик выхода
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  // Обработчик обновления профиля
  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Имитация запроса к API
    setTimeout(() => {
      if (user) {
        const updatedUser = { ...user, ...editedProfile };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setUser(updatedUser);
      }
      setIsSaving(false);
    }, 800);
  };

  // Обработчик обновления стим-профиля
  const handleUpdateSteam = () => {
    setIsSaving(true);
    
    // Имитация запроса к API Steam
    setTimeout(() => {
      if (user) {
        const updatedGames = [
          "CS2", "Dota 2", "Baldur's Gate 3", "Cyberpunk 2077", 
          "Elden Ring", "The Witcher 3"
        ];
        const updatedUser = { ...user, games: updatedGames };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setUser(updatedUser);
      }
      setIsSaving(false);
    }, 1200);
  };

  return {
    user,
    isLoading,
    isSaving,
    editedProfile,
    setEditedProfile,
    handleLogout,
    handleUpdateProfile,
    handleUpdateSteam
  };
};
