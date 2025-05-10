import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Users, Calendar, GamepadIcon } from "lucide-react";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  const events = [
    {
      id: 1,
      title: "Турнир по CS:GO",
      description:
        "Локальный турнир 5x5 с призовым фондом. Начинающие и профессионалы приглашаются!",
      location: "Москва, Компьютерный клуб Cyberspot",
      date: "15 мая, 18:00",
      participants: 8,
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    },
    {
      id: 2,
      title: "Совместная игра в Dota 2",
      description:
        "Ищем игроков для создания команды. Опыт не важен, главное — желание учиться и побеждать!",
      location: "Санкт-Петербург, Игровой центр Matrix",
      date: "16 мая, 19:30",
      participants: 4,
      image:
        "https://images.unsplash.com/photo-1548686304-89d188a80029?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    },
    {
      id: 3,
      title: "Ночь настольных игр",
      description:
        "Классические и новые настольные игры. Приходите с друзьями или находите новых!",
      location: "Казань, Антикафе TimeOut",
      date: "17 мая, 20:00",
      participants: 12,
      image:
        "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      {/* Навигационная панель */}
      <header className="border-b border-[#2D3748] bg-[#1A1F2C]/95 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-[#9b87f5]">
            <Icon name="GamepadIcon" size={28} />
            <span className="font-bold text-xl">GamersUnite</span>
          </div>

          <div className="flex gap-4 items-center">
            <nav className="hidden md:flex gap-6">
              <a href="#" className="hover:text-[#9b87f5] transition-colors">
                Главная
              </a>
              <a href="#" className="hover:text-[#9b87f5] transition-colors">
                Мероприятия
              </a>
              <a href="#" className="hover:text-[#9b87f5] transition-colors">
                Карта
              </a>
              <a href="#" className="hover:text-[#9b87f5] transition-colors">
                О нас
              </a>
            </nav>
            <Link to="/auth">
              <Button
                variant="outline"
                className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white"
              >
                Войти
              </Button>
            </Link>
            <Link to="/auth?tab=register">
              <Button className="bg-[#9b87f5] hover:bg-[#8a76e4]">
                Регистрация
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero секция */}
      <section className="py-16 bg-gradient-to-b from-[#1A1F2C] to-[#252d40] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Найдите <span className="text-[#9b87f5]">игровое сообщество</span>{" "}
              рядом с вами
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Присоединяйтесь к локальным игровым событиям, находите соратников
              и противников в вашем городе!
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#9b87f5] hover:bg-[#8a76e4] text-lg px-8 py-6"
              >
                Найти мероприятия
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 hover:bg-white/10 text-lg px-8 py-6"
              >
                Создать событие
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Основной контент */}
      <main className="container mx-auto px-4 py-12">
        <Tabs defaultValue="events" className="w-full">
          <div className="flex justify-between items-center mb-8">
            <TabsList className="bg-[#252d40]">
              <TabsTrigger
                value="events"
                className="data-[state=active]:bg-[#9b87f5]"
              >
                Мероприятия
              </TabsTrigger>
              <TabsTrigger
                value="map"
                className="data-[state=active]:bg-[#9b87f5]"
              >
                Карта
              </TabsTrigger>
            </TabsList>

            <div className="flex gap-4 items-center">
              <select className="bg-[#252d40] p-2 rounded-md border border-[#3D4A61]">
                <option>Все города</option>
                <option>Москва</option>
                <option>Санкт-Петербург</option>
                <option>Казань</option>
              </select>
              <Button size="sm" variant="outline" className="border-[#3D4A61]">
                Фильтры
              </Button>
            </div>
          </div>

          <TabsContent value="events" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <Card
                  key={event.id}
                  className="bg-[#252d40] border-[#3D4A61] overflow-hidden hover:shadow-lg hover:shadow-[#9b87f5]/10 transition-all hover:-translate-y-1"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 flex items-center gap-1">
                      <Icon name="MapPin" size={14} />
                      {event.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300 mb-4">
                      {event.description}
                    </p>
                    <div className="flex justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Icon name="Calendar" size={14} />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Users" size={14} />
                        {event.participants} участников
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#9b87f5] hover:bg-[#8a76e4]">
                      Присоединиться
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="map" className="mt-0">
            <div className="bg-[#252d40] rounded-md border border-[#3D4A61] p-4 h-[600px] flex items-center justify-center">
              <div className="text-center">
                <div className="text-[#9b87f5] mb-4">
                  <Icon name="MapIcon" size={64} />
                </div>
                <h3 className="text-xl font-medium mb-2">
                  Интерактивная карта
                </h3>
                <p className="text-gray-400 max-w-md mb-4">
                  Здесь вы сможете увидеть все игровые мероприятия на карте и
                  найти ближайшие к вам игровые сообщества.
                </p>
                <Button className="bg-[#9b87f5] hover:bg-[#8a76e4]">
                  Авторизуйтесь для доступа к карте
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Секция преимуществ */}
      <section className="bg-[#252d40] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Почему <span className="text-[#9b87f5]">GamersUnite</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1A1F2C] p-6 rounded-lg border border-[#3D4A61] text-center">
              <div className="w-16 h-16 bg-[#9b87f5]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" className="text-[#9b87f5]" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Локальные мероприятия
              </h3>
              <p className="text-gray-400">
                Находите игровые события в вашем городе и районе без лишних
                усилий.
              </p>
            </div>

            <div className="bg-[#1A1F2C] p-6 rounded-lg border border-[#3D4A61] text-center">
              <div className="w-16 h-16 bg-[#9b87f5]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" className="text-[#9b87f5]" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Реальные знакомства
              </h3>
              <p className="text-gray-400">
                Переносите онлайн дружбу в реальную жизнь, находите
                единомышленников.
              </p>
            </div>

            <div className="bg-[#1A1F2C] p-6 rounded-lg border border-[#3D4A61] text-center">
              <div className="w-16 h-16 bg-[#9b87f5]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="text-[#9b87f5]" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Проверенные события
              </h3>
              <p className="text-gray-400">
                Все мероприятия проверяются модераторами для обеспечения
                качества и безопасности.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-[#1A1F2C] border-t border-[#2D3748] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 text-[#9b87f5] mb-4 md:mb-0">
              <Icon name="GamepadIcon" size={24} />
              <span className="font-bold text-lg">GamersUnite</span>
            </div>

            <nav className="flex gap-6 mb-4 md:mb-0">
              <a
                href="#"
                className="text-gray-400 hover:text-[#9b87f5] transition-colors"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#9b87f5] transition-colors"
              >
                Мероприятия
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#9b87f5] transition-colors"
              >
                О нас
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#9b87f5] transition-colors"
              >
                Правила
              </a>
            </nav>

            <div className="text-gray-400 text-sm">
              © 2025 GamersUnite. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
