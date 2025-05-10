
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { UserProfile } from "@/types/user";

interface ProfileSidebarProps {
  user: UserProfile;
  onLogout: () => void;
}

const ProfileSidebar = ({ user, onLogout }: ProfileSidebarProps) => {
  return (
    <Card className="bg-[#252d40] border-[#3D4A61]">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src={user.avatar} alt={user.username} />
            <AvatarFallback className="bg-[#1A1F2C]">{user.username.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
        </div>
        <CardTitle className="text-xl font-bold">{user.username}</CardTitle>
        <CardDescription className="flex justify-center items-center gap-1">
          <Icon name="MapPin" size={14} /> {user.region || "Регион не указан"}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-400 mb-2">Об игроке</h3>
          <p className="text-sm">{user.bio || "Описание не добавлено"}</p>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-400 mb-2">Мои игры</h3>
          <div className="flex flex-wrap gap-2">
            {user.games && user.games.map(game => (
              <Badge key={game} className="bg-[#9b87f5]">{game}</Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-400 mb-2">Steam ID</h3>
          <div className="flex items-center gap-2 text-sm">
            <Icon name="SteamIcon" fallback="Gamepad2" size={16} /> 
            {user.steamId || "Не подключен"}
          </div>
        </div>
        
        <Separator className="bg-[#3D4A61]" />
        
        <div className="text-sm text-center text-gray-400">
          На платформе с {user.joinedDate || "недавно"}
        </div>
        
        <Button 
          variant="outline" 
          className="w-full border-[#3D4A61] hover:bg-[#3D4A61]"
          onClick={onLogout}
        >
          <Icon name="LogOut" size={16} className="mr-2" /> Выйти
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProfileSidebar;
