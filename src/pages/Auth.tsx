
import { useAuth } from "@/hooks/useAuth";
import AuthCard from "@/components/auth/AuthCard";
import AuthTabs from "@/components/auth/AuthTabs";

const Auth = () => {
  const { isLoading, handleLogin, handleRegister, getDefaultTab } = useAuth();
  
  return (
    <div className="min-h-screen bg-[#1A1F2C] flex items-center justify-center p-4">
      {/* Фоновое изображение с наложением */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] opacity-5 bg-cover bg-center"></div>
      
      {/* Карточка авторизации */}
      <AuthCard>
        <AuthTabs
          handleLogin={handleLogin}
          handleRegister={handleRegister}
          isLoading={isLoading}
          defaultTab={getDefaultTab()}
        />
      </AuthCard>
    </div>
  );
};

export default Auth;
