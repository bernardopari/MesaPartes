'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Cambia esto si usas Next 13 con app directory
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from 'next/image';

export default function Login({ isLogin, setIsLogin }) {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const [isClient, setIsClient] = useState(false); // Nuevo estado para verificar si está en el cliente
  const router = useRouter(); // Hook de router

  // Función para verificar si los campos no están vacíos
  function Inicio(e) {
    e.preventDefault(); // Evitar el comportamiento predeterminado del formulario
    if (!usuario || !contrasena) {
      setError('Por favor, rellena ambos campos'); // Mostrar error si están vacíos
      return;
    }
    router.push('/Dashboard'); // Llamar a la función de inicio de sesión si no están vacíos
  }

  // Verificar si estamos en el cliente
  useEffect(() => {
    setIsClient(true); // Marcar que el componente está montado en el cliente
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usuario,
          contrasena,
        }),
      });

      if (response.ok) {
        // Redirigir a la ruta específica después de un inicio de sesión exitoso
        if (isClient) {
          router.push('/Dashboard'); // Asegurarse de que solo se redirige en el cliente
        }
      } else {
        // Manejar error
        const errorData = await response.json();
        setError(errorData.message || 'Error al iniciar sesión');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Error de conexión');
    }
  };

  return (
    <div className="flex-1 flex justify-content items-center my-auto overflow-hidden bg-white">
      <div className="m-auto flex justify-content items-center w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="w-1/2  bg-[#14132F] p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold">INICIAR SESIÓN</h2>
          <form className="space-y-8 mt-2" onSubmit={Inicio}>
            <div>
              <Label htmlFor="usuario" className="text-white">
                Usuario:
              </Label>
              <Input
                id="usuario"
                className="mt-1 bg-white text-black"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="contrasena" className="text-white">
                Contraseña:
              </Label>
              <Input
                id="contrasena"
                type="password"
                className="mt-1 bg-white text-black"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <a href="#" className="block mt-0 text-sm hover:underline">
              Olvidé mi contraseña
            </a>
            <Button type="submit" className="w-full bg-white text-[#14132F] hover:text-white hover:bg-[#171738]">
              Ingresar
            </Button>
          </form>
        </div>
        <div className="flex w-1/2 flex-col items-center justify-center bg-white p-8">
          <div className="mb-4 text-center">
            <Image
              src={"/images/LogoEscuela.png"}
              className="mx-auto h-24 w-24 text-[#14132F]"
              width={600}
              height={600}
            />
            <h2 className="mt-2 text-2xl font-bold text-[#14132F]">MESA DE PARTES</h2>
            <p className="text-gray-600">INGENIERIA DE SISTEMAS</p>
          </div>
          <Button variant="outline"  onClick={() => setIsLogin(false)} className="border-[#14132F] text-[#14132F] hover:bg-[#14132F] hover:text-white ">
            Crear cuenta
          </Button>
        </div>
      </div>
    </div>
  );
}
