
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserProfile } from "@/types/user";

interface CreateEventFormProps {
  user: UserProfile;
}

const CreateEventForm = ({ user }: CreateEventFormProps) => {
  return (
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
  );
};

export default CreateEventForm;
