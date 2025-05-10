
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

const Auth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Имитация запроса авторизации
    setTimeout(() => {
      setIsLoading(false);
      // В реальном приложении здесь будет запрос к API и сохранение токена
      localStorage.setItem("user", JSON.stringify({ 
        id: "1",
        username: "gamer123",
        email: "user@example.com",
        avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }));
      navigate("/profile");
    }, 1000);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Имитация запроса регистрации
    setTimeout(() => {
      setIsLoading(false);
      // В реальном приложении здесь будет запрос к API и сохранение токена
      localStorage.setItem("user", JSON.stringify({ 
        id: "1",
        username: "gamer123",
        email: "user@example.com",
        avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }));
      navigate("/profile");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#1A1F2C] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] opacity-5 bg-cover bg-center"></div>
      
      <Card className="w-full max-w-md bg-[#252d40] border-[#3D4A61]">
        <CardHeader className="space-y-1 flex items-center">
          <div className="flex items-center justify-center mb-2">
            <Link to="/" className="flex items-center gap-2 text-[#9b87f5]">
              <Icon name="GamepadIcon" size={28} />
              <span className="font-bold text-xl">GamersUnite</span>
            </Link>
          </div>
          <CardTitle className="text-2xl text-center">Добро пожаловать!</CardTitle>
          <CardDescription className="text-center">
            Войдите или создайте аккаунт, чтобы присоединиться к игровым событиям
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-[#1A1F2C]">
              <TabsTrigger value="login" className="data-[state=active]:bg-[#9b87f5]">Вход</TabsTrigger>
              <TabsTrigger value="register" className="data-[state=active]:bg-[#9b87f5]">Регистрация</TabsTrigger>
            </TabsList>
            
            {/* Форма входа */}
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="email-login">Email</Label>
                  <Input 
                    id="email-login" 
                    type="email" 
                    placeholder="you@example.com" 
                    required 
                    className="bg-[#1A1F2C] border-[#3D4A61]"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="password-login">Пароль</Label>
                    <Link to="/reset-password" className="text-xs text-[#9b87f5] hover:underline">
                      Забыли пароль?
                    </Link>
                  </div>
                  <Input 
                    id="password-login" 
                    type="password" 
                    required 
                    className="bg-[#1A1F2C] border-[#3D4A61]"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm font-normal">Запомнить меня</Label>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-[#9b87f5] hover:bg-[#8a76e4]"
                  disabled={isLoading}
                >
                  {isLoading ? 'Загрузка...' : 'Войти'}
                </Button>
              </form>
            </TabsContent>
            
            {/* Форма регистрации */}
            <TabsContent value="register">
              <form onSubmit={handleRegister} className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Имя пользователя</Label>
                  <Input 
                    id="username" 
                    placeholder="gamer123" 
                    required 
                    className="bg-[#1A1F2C] border-[#3D4A61]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-register">Email</Label>
                  <Input 
                    id="email-register" 
                    type="email" 
                    placeholder="you@example.com" 
                    required 
                    className="bg-[#1A1F2C] border-[#3D4A61]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-register">Пароль</Label>
                  <Input 
                    id="password-register" 
                    type="password" 
                    required 
                    className="bg-[#1A1F2C] border-[#3D4A61]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Подтвердите пароль</Label>
                  <Input 
                    id="confirm-password" 
                    type="password" 
                    required 
                    className="bg-[#1A1F2C] border-[#3D4A61]"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms" className="text-sm font-normal">
                    Я согласен с <Link to="/terms" className="text-[#9b87f5] hover:underline">условиями</Link> и <Link to="/privacy" className="text-[#9b87f5] hover:underline">политикой конфиденциальности</Link>
                  </Label>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-[#9b87f5] hover:bg-[#8a76e4]"
                  disabled={isLoading}
                >
                  {isLoading ? 'Создание аккаунта...' : 'Зарегистрироваться'}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-[#3D4A61]"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#252d40] px-2 text-muted-foreground">Или продолжить с</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="border-[#3D4A61]">
              <Icon name="Github" className="mr-2 h-4 w-4" /> GitHub
            </Button>
            <Button variant="outline" className="border-[#3D4A61]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
              </svg> Google
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <div className="w-full text-center text-xs text-muted-foreground">
            Нажимая Войти или Зарегистрироваться, вы соглашаетесь с нашими правилами
          </div>
          <div className="flex w-full justify-center">
            <Link to="/" className="text-[#9b87f5] hover:underline text-sm">
              ← Вернуться на главную
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Auth;
