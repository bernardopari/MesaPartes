'use client'
import Image from "next/image";
import { useState,useContext } from "react";
import Navbar from "@/components/componentsPageMain/navbar";
import Log from "@/components/componentsPageMain/login";
import Register from '@/components/componentsPageMain/register'
import ThemeProvider from "@/app/context/ThemeContext";
import ContenidoPrincipal from "@/components/componentsPageMain/contentMain";
export default function Home() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    
    <div className="w-full flex flex-col h-screen" >
      <Navbar />
      {isLogin ? (
          // Pasamos isLogin y setIsLogin como props al componente de inicio de sesión
          <Log isLogin={isLogin} setIsLogin={setIsLogin} />
        ) : (
          // Pasamos isLogin y setIsLogin como props al componente de registro
          <Register isLogin={isLogin} setIsLogin={setIsLogin} />
        )}
      
      {/*<ContenidoPrincipal/>*/}
 
      {/*<Register/>  */} 
    </div>
    
  );
}
