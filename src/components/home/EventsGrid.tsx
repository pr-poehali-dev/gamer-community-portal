
import EventCard, { Event } from "./EventCard";

interface EventsGridProps {
  events: Event[];
}

const EventsGrid = ({ events }: EventsGridProps) => {
  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">Мероприятия не найдены</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventsGrid;
