
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserProfile, EditedProfile } from "@/types/user";
import EditProfileForm from "./EditProfileForm";
import MyEventsTab from "./MyEventsTab";
import CreateEventForm from "./CreateEventForm";

interface ProfileTabsProps {
  user: UserProfile;
  editedProfile: EditedProfile;
  setEditedProfile: React.Dispatch<React.SetStateAction<EditedProfile>>;
  handleUpdateProfile: (e: React.FormEvent) => void;
  handleUpdateSteam: () => void;
  isSaving: boolean;
}

const ProfileTabs = ({
  user,
  editedProfile,
  setEditedProfile,
  handleUpdateProfile,
  handleUpdateSteam,
  isSaving
}: ProfileTabsProps) => {
  const [activeTab, setActiveTab] = useState("edit");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const showCreateTab = () => {
    setActiveTab("create");
  };

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
      <TabsList className="bg-[#1A1F2C] w-full grid grid-cols-3 mb-4">
        <TabsTrigger value="edit" className="data-[state=active]:bg-[#9b87f5]">
          Редактировать профиль
        </TabsTrigger>
        <TabsTrigger value="events" className="data-[state=active]:bg-[#9b87f5]">
          Мои мероприятия
        </TabsTrigger>
        <TabsTrigger value="create" className="data-[state=active]:bg-[#9b87f5]">
          Создать мероприятие
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="edit">
        <EditProfileForm 
          user={user}
          onUpdateProfile={handleUpdateProfile}
          editedProfile={editedProfile}
          setEditedProfile={setEditedProfile}
          onUpdateSteam={handleUpdateSteam}
          isSaving={isSaving}
        />
      </TabsContent>
      
      <TabsContent value="events">
        <MyEventsTab onShowCreateTab={showCreateTab} />
      </TabsContent>
      
      <TabsContent value="create">
        <CreateEventForm user={user} />
      </TabsContent>
    </Tabs>
  );
};

export default ProfileTabs;
