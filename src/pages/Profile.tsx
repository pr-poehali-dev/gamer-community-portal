
import { useProfile } from "@/hooks/useProfile";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileSidebar from "@/components/profile/ProfileSidebar";
import ProfileTabs from "@/components/profile/ProfileTabs";
import Loading from "@/components/profile/Loading";

const Profile = () => {
  const {
    user,
    isLoading,
    isSaving,
    editedProfile,
    setEditedProfile,
    handleLogout,
    handleUpdateProfile,
    handleUpdateSteam
  } = useProfile();

  if (isLoading) {
    return <Loading />;
  }

  if (!user) {
    return null; // Редирект должен сработать до этого
  }

  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <ProfileHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Сайдбар с информацией о профиле */}
          <div className="md:col-span-1">
            <ProfileSidebar 
              user={user} 
              onLogout={handleLogout} 
            />
          </div>
          
          {/* Правая колонка с редактированием профиля и активностью */}
          <div className="md:col-span-2">
            <ProfileTabs 
              user={user}
              editedProfile={editedProfile}
              setEditedProfile={setEditedProfile}
              handleUpdateProfile={handleUpdateProfile}
              handleUpdateSteam={handleUpdateSteam}
              isSaving={isSaving}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
