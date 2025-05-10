
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserProfile, EditedProfile } from "@/types/user";

interface EditProfileFormProps {
  user: UserProfile;
  onUpdateProfile: (e: React.FormEvent) => void;
  editedProfile: EditedProfile;
  setEditedProfile: React.Dispatch<React.SetStateAction<EditedProfile>>;
  onUpdateSteam: () => void;
  isSaving: boolean;
}

const EditProfileForm = ({ 
  user, 
  onUpdateProfile, 
  editedProfile, 
  setEditedProfile,
  onUpdateSteam,
  isSaving
}: EditProfileFormProps) => {
  return (
    <Card className="bg-[#252d40] border-[#3D4A61]">
      <CardHeader>
        <CardTitle>Настройки профиля</CardTitle>
        <CardDescription>
          Обновите информацию о себе и настройте свой игровой профиль
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onUpdateProfile} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="username">Имя пользователя</Label>
              <Input 
                id="username" 
                value={editedProfile.username}
                onChange={(e) => setEditedProfile({...editedProfile, username: e.target.value})}
                className="bg-[#1A1F2C] border-[#3D4A61]"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email"
                value={editedProfile.email}
                onChange={(e) => setEditedProfile({...editedProfile, email: e.target.value})}
                className="bg-[#1A1F2C] border-[#3D4A61]"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="region">Регион</Label>
              <Select 
                value={editedProfile.region} 
                onValueChange={(value) => setEditedProfile({...editedProfile, region: value})}
              >
                <SelectTrigger className="bg-[#1A1F2C] border-[#3D4A61]">
                  <SelectValue placeholder="Выберите регион" />
                </SelectTrigger>
                <SelectContent className="bg-[#252d40] border-[#3D4A61]">
                  <SelectItem value="Москва">Москва</SelectItem>
                  <SelectItem value="Санкт-Петербург">Санкт-Петербург</SelectItem>
                  <SelectItem value="Казань">Казань</SelectItem>
                  <SelectItem value="Новосибирск">Новосибирск</SelectItem>
                  <SelectItem value="Екатеринбург">Екатеринбург</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="steamId">Steam ID</Label>
              <div className="flex gap-2">
                <Input 
                  id="steamId" 
                  value={editedProfile.steamId}
                  onChange={(e) => setEditedProfile({...editedProfile, steamId: e.target.value})}
                  className="bg-[#1A1F2C] border-[#3D4A61] flex-1"
                />
                <Button 
                  type="button" 
                  variant="outline" 
                  className="border-[#3D4A61] flex-shrink-0"
                  onClick={onUpdateSteam}
                  disabled={isSaving || !editedProfile.steamId}
                >
                  {isSaving ? 'Обновление...' : 'Обновить игры'}
                </Button>
              </div>
              <p className="text-xs text-gray-400">Укажите Steam ID для автоматического импорта ваших игр</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="bio">О себе</Label>
            <textarea 
              id="bio" 
              rows={4}
              value={editedProfile.bio}
              onChange={(e) => setEditedProfile({...editedProfile, bio: e.target.value})}
              className="w-full px-3 py-2 rounded-md bg-[#1A1F2C] border border-[#3D4A61] text-sm"
            />
            <p className="text-xs text-gray-400">Расскажите о себе, своих игровых предпочтениях и опыте</p>
          </div>
          
          <div className="flex justify-end">
            <Button 
              type="submit" 
              className="bg-[#9b87f5] hover:bg-[#8a76e4]"
              disabled={isSaving}
            >
              {isSaving ? 'Сохранение...' : 'Сохранить профиль'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default EditProfileForm;
