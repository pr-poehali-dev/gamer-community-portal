
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface Event {
  id: number;
  title: string;
  description: string;
  location: string;
  date: string;
  participants: number;
  image: string;
}

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <Card className="bg-[#252d40] border-[#3D4A61] overflow-hidden hover:shadow-lg hover:shadow-[#9b87f5]/10 transition-all hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{event.title}</CardTitle>
        <CardDescription className="text-gray-400 flex items-center gap-1">
          <Icon name="MapPin" size={14} />
          {event.location}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-300 mb-4">{event.description}</p>
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
        <Link to="/auth" className="w-full">
          <Button className="w-full bg-[#9b87f5] hover:bg-[#8a76e4]">
            Присоединиться
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
