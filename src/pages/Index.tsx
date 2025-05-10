
import Header from "@/components/ui/Header";
import Hero from "@/components/home/Hero";
import ContentTabs from "@/components/home/ContentTabs";
import FeatureSection from "@/components/home/FeatureSection";
import Footer from "@/components/home/Footer";
import { Event } from "@/components/home/EventCard";

const Index = () => {
  // Данные для демонстрации
  // В реальном приложении эти данные будут загружаться с сервера
  const events: Event[] = [
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
      <Header />
      
      {/* Hero секция */}
      <Hero />
      
      {/* Основной контент */}
      <main className="container mx-auto px-4 py-12">
        <ContentTabs events={events} />
      </main>
      
      {/* Секция преимуществ */}
      <FeatureSection />
      
      {/* Футер */}
      <Footer />
    </div>
  );
};

export default Index;
