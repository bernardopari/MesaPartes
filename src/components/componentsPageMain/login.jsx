'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from 'next/image';

//////////////////////////////////////////////////////////////////////////
/// Componente Login
/// Este componente permite a los usuarios autenticarse en la aplicación.
/// Funcionalidades principales:
/// - Entrada de credenciales (email y contraseña).
/// - Envío de datos al servidor para autenticación.
/// - Redirección basada en el rol del usuario.
/// - Muestra de errores en caso de fallos en la autenticación.
//////////////////////////////////////////////////////////////////////////

export default function Login({ isLogin, setIsLogin }) {
  const [email, setEmail] = useState(''); // Estado para almacenar el email del usuario.
  const [password, setPassword] = useState(''); // Estado para almacenar la contraseña del usuario.
  const [error, setError] = useState(''); // Estado para manejar mensajes de error.
  const router = useRouter();

  //////////////////////////////////////////////////////////////////////////
  ////// función para la autenticación o logeo
  //////////////////////////////////////////////////////////////////////////
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Por favor, rellena ambos campos');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const { role } = data; // Suponiendo que el rol viene en la respuesta como `role`

        // Redirigir según el rol del usuario
        if (role === 'admin') {
          router.push('/admin-dashboard');
        } else if (role === 'user') {
          router.push('/user-dashboard');
        } else {
          setError('Rol desconocido'); // En caso de que no venga el rol esperado
        }
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Error al iniciar sesión');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Error de conexión');
    }
  };

  //////////////////////////////////////////////////////////////////////////
  ////// Renderizado del formulario de inicio de sesión
  //////////////////////////////////////////////////////////////////////////
  return (
    <div className="flex-1 flex justify-content items-center my-auto overflow-hidden bg-gray-100">
      <div className="m-auto flex justify-content items-center w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-xl">
        {/* Sección de inicio de sesión */}
        <div className="w-1/2 bg-[#14132F] p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold">INICIAR SESIÓN</h2>
          <form className="space-y-8 mt-2" onSubmit={handleLogin}>
            {/* Campo de usuario */}
            <div>
              <Label htmlFor="usuario" className="text-white">
                Usuario:
              </Label>
              <Input
                id="usuario"
                className="mt-1 bg-white text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Campo de contraseña */}
            <div>
              <Label htmlFor="contrasena" className="text-white">
                Contraseña:
              </Label>
              <Input
                id="contrasena"
                type="password"
                className="mt-1 bg-white text-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Mensaje de error */}
            {error && <p className="text-red-500">{error}</p>}

            {/* Enlace para recuperar contraseña */}
            <a href="#" className="block mt-0 text-sm hover:underline">
              Olvidé mi contraseña
            </a>

            {/* Botón para enviar el formulario */}
            <Button type="submit" className="w-full bg-white text-[#14132F] hover:text-white hover:bg-[#171738]">
              Ingresar
            </Button>
          </form>
        </div>

        {/* Sección de información lateral */}
        <div className="flex w-1/2 flex-col items-center justify-center bg-white p-8">
          <div className="mb-4 text-center">
            {/* Logo de la aplicación */}
            <Image
              src={"/images/LogoEscuela.png"}
              className="mx-auto h-24 w-24 text-[#14132F]"
              width={600}
              height={600}
              alt="Logo de la Escuela"
            />
            <h2 className="mt-2 text-2xl font-bold text-[#14132F]">MESA DE PARTES</h2>
            <p className="text-gray-600">INGENIERIA DE SISTEMAS</p>
          </div>

          {/* Botón para cambiar a la creación de cuenta */}
          <Button
            variant="outline"
            onClick={() => setIsLogin(false)}
            className="w-full border-[#14132F] text-[#14132F] hover:bg-[#14132F] hover:text-white"
          >
            Crear cuenta
          </Button>
        </div>
      </div>
    </div>
  );
}
