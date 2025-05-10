
import { Button } from "@/components/ui/button";

interface FilterBarProps {
  onCityChange: (city: string) => void;
  selectedCity: string;
}

const FilterBar = ({ onCityChange, selectedCity }: FilterBarProps) => {
  return (
    <div className="flex gap-4 items-center">
      <select 
        className="bg-[#252d40] p-2 rounded-md border border-[#3D4A61]"
        value={selectedCity}
        onChange={(e) => onCityChange(e.target.value)}
      >
        <option value="all">Все города</option>
        <option value="Москва">Москва</option>
        <option value="Санкт-Петербург">Санкт-Петербург</option>
        <option value="Казань">Казань</option>
      </select>
      <Button size="sm" variant="outline" className="border-[#3D4A61]">
        Фильтры
      </Button>
    </div>
  );
};

export default FilterBar;
