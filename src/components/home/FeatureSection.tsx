
import Icon from "@/components/ui/icon";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="bg-[#1A1F2C] p-6 rounded-lg border border-[#3D4A61] text-center">
      <div className="w-16 h-16 bg-[#9b87f5]/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon name={icon} className="text-[#9b87f5]" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const FeatureSection = () => {
  const features = [
    {
      icon: "MapPin",
      title: "Локальные мероприятия",
      description: "Находите игровые события в вашем городе и районе без лишних усилий."
    },
    {
      icon: "Users",
      title: "Реальные знакомства",
      description: "Переносите онлайн дружбу в реальную жизнь, находите единомышленников."
    },
    {
      icon: "Shield",
      title: "Проверенные события",
      description: "Все мероприятия проверяются модераторами для обеспечения качества и безопасности."
    }
  ];

  return (
    <section className="bg-[#252d40] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Почему <span className="text-[#9b87f5]">GamersUnite</span>?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
