
import { useState } from "react";
import { Event } from "./EventCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EventsGrid from "./EventsGrid";
import MapPlaceholder from "./MapPlaceholder";
import FilterBar from "./FilterBar";

interface ContentTabsProps {
  events: Event[];
}

const ContentTabs = ({ events }: ContentTabsProps) => {
  const [selectedCity, setSelectedCity] = useState("all");
  
  // Фильтрация событий по городу
  const filteredEvents = selectedCity === "all" 
    ? events 
    : events.filter(event => event.location.includes(selectedCity));

  return (
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

        <FilterBar 
          onCityChange={setSelectedCity} 
          selectedCity={selectedCity}
        />
      </div>

      <TabsContent value="events" className="mt-0">
        <EventsGrid events={filteredEvents} />
      </TabsContent>

      <TabsContent value="map" className="mt-0">
        <MapPlaceholder />
      </TabsContent>
    </Tabs>
  );
};

export default ContentTabs;
