
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardDescription,
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

// Типы для данных профиля
interface UserProfile {
  id: string;
  username: string;
  email: string;
  avatar: string;
  region?: string;
  games?: string[];
  steamId?: string;
  bio?: string;
  joinedDate?: string;
}

// Компонент для хедера с навигацией
const Header = () => (
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

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  // Данные для редактирования профиля
  const [editedProfile, setEditedProfile] = useState({
    username: "",
    email: "",
    region: "",
    steamId: "",
    bio: ""
  });

  // Имитация получения данных пользователя
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#1A1F2C] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#9b87f5] mx-auto"></div>
          <p className="mt-4 text-white">Загрузка профиля...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Редирект должен сработать до этого
  }

  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Сайдбар с информацией о профиле */}
          <div className="md:col-span-1">
            <Card className="bg-[#252d40] border-[#3D4A61]">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={user.avatar} alt={user.username} />
                    <AvatarFallback className="bg-[#1A1F2C]">{user.username.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-xl font-bold">{user.username}</CardTitle>
                <CardDescription className="flex justify-center items-center gap-1">
                  <Icon name="MapPin" size={14} /> {user.region || "Регион не указан"}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-2">Об игроке</h3>
                  <p className="text-sm">{user.bio || "Описание не добавлено"}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-2">Мои игры</h3>
                  <div className="flex flex-wrap gap-2">
                    {user.games && user.games.map(game => (
                      <Badge key={game} className="bg-[#9b87f5]">{game}</Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-2">Steam ID</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="SteamIcon" fallback="Gamepad2" size={16} /> 
                    {user.steamId || "Не подключен"}
                  </div>
                </div>
                
                <Separator className="bg-[#3D4A61]" />
                
                <div className="text-sm text-center text-gray-400">
                  На платформе с {user.joinedDate || "недавно"}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-[#3D4A61] hover:bg-[#3D4A61]"
                  onClick={handleLogout}
                >
                  <Icon name="LogOut" size={16} className="mr-2" /> Выйти
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Правая колонка с редактированием профиля и активностью */}
          <div className="md:col-span-2">
            <Tabs defaultValue="edit" className="w-full">
              <TabsList className="bg-[#1A1F2C] w-full grid grid-cols-3 mb-4">
                <TabsTrigger value="edit" className="data-[state=active]:bg-[#9b87f5]">
                  Редактировать профиль
                </TabsTrigger>
                <TabsTrigger value="events" className="data-[state=active]:bg-[#9b87f5]">
                  Мои мероприятия
                </TabsTrigger>
                <TabsTrigger value="create" className="data-[state=active]:bg-[#9b87f5]">
                  Создать мероприятие
                </TabsTrigger>
              </TabsList>
              
              {/* Вкладка редактирования профиля */}
              <TabsContent value="edit">
                <Card className="bg-[#252d40] border-[#3D4A61]">
                  <CardHeader>
                    <CardTitle>Настройки профиля</CardTitle>
                    <CardDescription>
                      Обновите информацию о себе и настройте свой игровой профиль
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleUpdateProfile} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="username">Имя пользователя</Label>
                          <Input 
                            id="username" 
                            value={editedProfile.username}
                            onChange={(e) => setEditedProfile({...editedProfile, username: e.target.value})}
                            className="bg-[#1A1F2C] border-[#3D4A61]"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input 
                            id="email" 
                            type="email"
                            value={editedProfile.email}
                            onChange={(e) => setEditedProfile({...editedProfile, email: e.target.value})}
                            className="bg-[#1A1F2C] border-[#3D4A61]"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="region">Регион</Label>
                          <Select 
                            value={editedProfile.region} 
                            onValueChange={(value) => setEditedProfile({...editedProfile, region: value})}
                          >
                            <SelectTrigger className="bg-[#1A1F2C] border-[#3D4A61]">
                              <SelectValue placeholder="Выберите регион" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#252d40] border-[#3D4A61]">
                              <SelectItem value="Москва">Москва</SelectItem>
                              <SelectItem value="Санкт-Петербург">Санкт-Петербург</SelectItem>
                              <SelectItem value="Казань">Казань</SelectItem>
                              <SelectItem value="Новосибирск">Новосибирск</SelectItem>
                              <SelectItem value="Екатеринбург">Екатеринбург</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="steamId">Steam ID</Label>
                          <div className="flex gap-2">
                            <Input 
                              id="steamId" 
                              value={editedProfile.steamId}
                              onChange={(e) => setEditedProfile({...editedProfile, steamId: e.target.value})}
                              className="bg-[#1A1F2C] border-[#3D4A61] flex-1"
                            />
                            <Button 
                              type="button" 
                              variant="outline" 
                              className="border-[#3D4A61] flex-shrink-0"
                              onClick={handleUpdateSteam}
                              disabled={isSaving || !editedProfile.steamId}
                            >
                              {isSaving ? 'Обновление...' : 'Обновить игры'}
                            </Button>
                          </div>
                          <p className="text-xs text-gray-400">Укажите Steam ID для автоматического импорта ваших игр</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="bio">О себе</Label>
                        <textarea 
                          id="bio" 
                          rows={4}
                          value={editedProfile.bio}
                          onChange={(e) => setEditedProfile({...editedProfile, bio: e.target.value})}
                          className="w-full px-3 py-2 rounded-md bg-[#1A1F2C] border border-[#3D4A61] text-sm"
                        />
                        <p className="text-xs text-gray-400">Расскажите о себе, своих игровых предпочтениях и опыте</p>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button 
                          type="submit" 
                          className="bg-[#9b87f5] hover:bg-[#8a76e4]"
                          disabled={isSaving}
                        >
                          {isSaving ? 'Сохранение...' : 'Сохранить профиль'}
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Вкладка с мероприятиями пользователя */}
              <TabsContent value="events">
                <Card className="bg-[#252d40] border-[#3D4A61]">
                  <CardHeader>
                    <CardTitle>Мои мероприятия</CardTitle>
                    <CardDescription>
                      Мероприятия, которые вы создали или в которых участвуете
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-[#1A1F2C] rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon name="Calendar" className="text-[#9b87f5]" size={24} />
                        </div>
                        <h3 className="text-lg font-medium mb-2">У вас пока нет мероприятий</h3>
                        <p className="text-sm text-gray-400 mb-4">
                          Создайте новое мероприятие или присоединитесь к существующему
                        </p>
                        <Button 
                          className="bg-[#9b87f5] hover:bg-[#8a76e4]"
                          onClick={() => document.querySelector('[data-value="create"]')?.click()}
                        >
                          <Icon name="Plus" size={16} className="mr-2" /> Создать мероприятие
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Вкладка создания нового мероприятия */}
              <TabsContent value="create">
                <Card className="bg-[#252d40] border-[#3D4A61]">
                  <CardHeader>
                    <CardTitle>Создать игровое мероприятие</CardTitle>
                    <CardDescription>
                      Пригласите других игроков присоединиться к вашей игре или мероприятию
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="event-title">Название мероприятия</Label>
                          <Input 
                            id="event-title" 
                            placeholder="Турнир по CS2"
                            className="bg-[#1A1F2C] border-[#3D4A61]"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="event-game">Игра</Label>
                          <Select>
                            <SelectTrigger className="bg-[#1A1F2C] border-[#3D4A61]">
                              <SelectValue placeholder="Выберите игру" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#252d40] border-[#3D4A61]">
                              {user.games?.map(game => (
                                <SelectItem key={game} value={game}>{game}</SelectItem>
                              ))}
                              <SelectItem value="other">Другая игра</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="event-type">Тип мероприятия</Label>
                          <Select>
                            <SelectTrigger className="bg-[#1A1F2C] border-[#3D4A61]">
                              <SelectValue placeholder="Выберите тип" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#252d40] border-[#3D4A61]">
                              <SelectItem value="casual">Обычная игра</SelectItem>
                              <SelectItem value="tournament">Турнир</SelectItem>
                              <SelectItem value="coaching">Тренировка/Обучение</SelectItem>
                              <SelectItem value="lan">LAN-вечеринка</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="event-date">Дата и время</Label>
                          <Input 
                            id="event-date" 
                            type="datetime-local"
                            className="bg-[#1A1F2C] border-[#3D4A61]"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="event-location">Место проведения</Label>
                          <Input 
                            id="event-location" 
                            placeholder="Онлайн или укажите адрес"
                            className="bg-[#1A1F2C] border-[#3D4A61]"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="event-participants">Максимум участников</Label>
                          <Input 
                            id="event-participants" 
                            type="number"
                            min="1"
                            defaultValue="5"
                            className="bg-[#1A1F2C] border-[#3D4A61]"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="event-skill">Требуемый уровень</Label>
                          <Select>
                            <SelectTrigger className="bg-[#1A1F2C] border-[#3D4A61]">
                              <SelectValue placeholder="Выберите уровень" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#252d40] border-[#3D4A61]">
                              <SelectItem value="any">Любой</SelectItem>
                              <SelectItem value="beginner">Начинающий</SelectItem>
                              <SelectItem value="intermediate">Средний</SelectItem>
                              <SelectItem value="advanced">Продвинутый</SelectItem>
                              <SelectItem value="professional">Профессиональный</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="event-description">Описание</Label>
                          <textarea 
                            id="event-description" 
                            rows={4}
                            placeholder="Опишите ваше мероприятие, требования к участникам и другие детали"
                            className="w-full px-3 py-2 rounded-md bg-[#1A1F2C] border border-[#3D4A61] text-sm"
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-end gap-4">
                        <Button 
                          type="button" 
                          variant="outline" 
                          className="border-[#3D4A61]"
                        >
                          Отмена
                        </Button>
                        <Button 
                          type="submit" 
                          className="bg-[#9b87f5] hover:bg-[#8a76e4]"
                        >
                          Создать мероприятие
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
