'use client'
import Image from "next/image";
import { useState,useContext } from "react";
import Navbar from "@/components/componentsPageMain/navbar";
import Log from "@/components/componentsPageMain/login";
import Register from '@/components/componentsPageMain/register'
import ThemeProvider from "@/app/context/ThemeContext";
import ContenidoPrincipal from "@/components/componentsPageMain/contentMain";
import HomePage from '@/components/componentsPageMain/HomePage'
export default function Home() {
  return (
    
    <div className=" w-full flex flex-col h-screen" >
      <HomePage />

      {/*<Register/>  */} 
    </div>
    
  );
}
