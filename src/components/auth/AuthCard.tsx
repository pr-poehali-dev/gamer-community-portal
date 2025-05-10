
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface AuthCardProps {
  children: ReactNode;
}

const AuthCard = ({ children }: AuthCardProps) => {
  return (
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
        {children}
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
  );
};

export default AuthCard;
