'use client'
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from 'next/image';

export default function Register({ isLogin, setIsLogin }) {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/register', {
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
        setSuccess('Registro exitoso');
        // Limpiar los campos de entrada después del registro
        setUsuario('');
        setContrasena('');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Error al registrar');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Error de conexión');
    }
  };

  return (
    <div className="flex-1 flex justify-content items-center bg-gray-100">
      <div className="m-auto flex w-full h-[70%]  max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="flex w-1/2 flex-col items-center justify-center bg-white p-8">
          <div className="mb-8 text-center">
            <Image
              src={"/images/LogoEscuela.png"}
              className="mx-auto h-24 w-24 text-[#14132F]"
              width={600}
              height={600}
            />
            <h2 className="mt-2 text-2xl font-bold text-[#14132F]">MESA DE PARTES</h2>
            <p className="text-gray-600">INGENIERIA DE SISTEMAS</p>
          </div>
          <Button onClick={() => setIsLogin(true)}  className="w-full bg-[#14132F] text-white hover:bg-white 
          hover:border-[#14132F] hover:text-[#14132F]">
            Iniciar Sesión
          </Button>
        </div>
        <div className="w-1/2 bg-[#14132F] p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold">CREAR CUENTA</h2>
          <form className="space-y-8 pt-10" onSubmit={handleRegister}>
            <div>
              <Label htmlFor="usuario" className="text-white">
                Usuario:
              </Label>
              <Input
                id="usuario"
                className="mt-1 bg-white w-full text-black"
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
                className="mt-1 w-full bg-white text-black"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <Button  type="submit" className="w-full bg-white text-[#14132F] hover:bg-[#1f1e44] hover:text-white">
              Registrar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
