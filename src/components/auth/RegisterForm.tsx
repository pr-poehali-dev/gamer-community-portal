
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface RegisterFormProps {
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

const RegisterForm = ({ onSubmit, isLoading }: RegisterFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4 pt-4">
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
  );
};

export default RegisterForm;
