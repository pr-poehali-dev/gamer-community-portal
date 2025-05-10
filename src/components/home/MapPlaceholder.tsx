
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const MapPlaceholder = () => {
  return (
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
        <Link to="/auth">
          <Button className="bg-[#9b87f5] hover:bg-[#8a76e4]">
            Авторизуйтесь для доступа к карте
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MapPlaceholder;
