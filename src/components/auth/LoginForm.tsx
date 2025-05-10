
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface LoginFormProps {
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

const LoginForm = ({ onSubmit, isLoading }: LoginFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4 pt-4">
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
  );
};

export default LoginForm;
