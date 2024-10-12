import Image from "next/image";
import Navbar from "@/components/ui/componentsPageMain/navbar";
import Log from "@/components/ui/componentsPageMain/login";
export default function Home() {
  return (
    <div className="w-full" >
      <Navbar />
      <Log />
    </div>
  );
}
