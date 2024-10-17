import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from "next/image";

export const Bienvenida = () => {
    return (
        <div className="text-black flex flex-col justify-center">
            <h1 className="text-4xl self-start text-[#14132f] md:text-6xl font-bold mb-6">BIENVENIDO</h1>
            <p className="text-start max-w-2xl mb-8">
                Te damos la bienvenida al sistema de gestión de trámites de la Escuela de
                Ingeniería de Sistemas. A través de esta plataforma, podrás presentar y seguir
                tus trámites de manera digital, agilizando el proceso de gestión de documentos.
            </p>
            <p className="text-start self-start mb-8">
                Gracias por utilizar nuestro sistema. ¡Estamos aquí para ayudarte!
            </p>
            <Button className="bg-white text-blue-600 w-60 self-center mx-auto hover:bg-blue-100">
                Comenzar
            </Button>
        </div>
    );
}

export const ImagenEscuela = () => {
    return (
        <div className="flex flex-col items-center justify-center text-white pr-2">
            <Image src={"/images/ImagenEscuela.png"} width={400} height={450} />
        </div>
    );
}

export default function ContenidoPrincipal() {
    return (
        <div className="h-screen w-full bg-gray-200 bg-cover bg-center bg-no-repeat bg-fixed text-black pt-14">
            <div className="w-[95%] mx-auto flex items-center justify-between h-full">
                <Bienvenida />
                <ImagenEscuela />
            </div>
        </div>
    );
}
