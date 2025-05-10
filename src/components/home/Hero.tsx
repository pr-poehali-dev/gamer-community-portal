
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
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
            <Link to="/events">
              <Button
                size="lg"
                className="bg-[#9b87f5] hover:bg-[#8a76e4] text-lg px-8 py-6"
              >
                Найти мероприятия
              </Button>
            </Link>
            <Link to="/auth">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 hover:bg-white/10 text-lg px-8 py-6"
              >
                Создать событие
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
