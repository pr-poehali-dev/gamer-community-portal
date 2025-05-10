
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface MyEventsTabProps {
  onShowCreateTab: () => void;
}

const MyEventsTab = ({ onShowCreateTab }: MyEventsTabProps) => {
  return (
    <Card className="bg-[#252d40] border-[#3D4A61]">
      <CardHeader>
        <CardTitle>Мои мероприятия</CardTitle>
        <CardDescription>
          Мероприятия, которые вы создали или в которых участвуете
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-[#1A1F2C] rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Calendar" className="text-[#9b87f5]" size={24} />
            </div>
            <h3 className="text-lg font-medium mb-2">У вас пока нет мероприятий</h3>
            <p className="text-sm text-gray-400 mb-4">
              Создайте новое мероприятие или присоединитесь к существующему
            </p>
            <Button 
              className="bg-[#9b87f5] hover:bg-[#8a76e4]"
              onClick={onShowCreateTab}
            >
              <Icon name="Plus" size={16} className="mr-2" /> Создать мероприятие
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MyEventsTab;
