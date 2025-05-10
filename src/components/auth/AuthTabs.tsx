
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import SocialButtons from "./SocialButtons";

interface AuthTabsProps {
  handleLogin: (e: React.FormEvent) => void;
  handleRegister: (e: React.FormEvent) => void;
  isLoading: boolean;
  defaultTab?: string;
}

const AuthTabs = ({ handleLogin, handleRegister, isLoading, defaultTab = "login" }: AuthTabsProps) => {
  return (
    <Tabs defaultValue={defaultTab} className="w-full">
      <TabsList className="grid w-full grid-cols-2 bg-[#1A1F2C]">
        <TabsTrigger value="login" className="data-[state=active]:bg-[#9b87f5]">Вход</TabsTrigger>
        <TabsTrigger value="register" className="data-[state=active]:bg-[#9b87f5]">Регистрация</TabsTrigger>
      </TabsList>
      
      <TabsContent value="login">
        <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
      </TabsContent>
      
      <TabsContent value="register">
        <RegisterForm onSubmit={handleRegister} isLoading={isLoading} />
      </TabsContent>
      
      <SocialButtons />
    </Tabs>
  );
};

export default AuthTabs;
