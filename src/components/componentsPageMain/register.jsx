'use client'
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from 'next/image';
////////////////////////////////////////////////////////////////////////////
// Componente para el registro de usuario en la página de la mesa de partes.
////////////////////////////////////////////////////////////////////////////
export default function Register({ isLogin, setIsLogin }) {
  // Estado para manejar el correo, contraseña, errores y mensajes de éxito.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  //////////////////////////////////////////////////////////////////////////
  /// Función para manejar el registro de usuario.
  /// - Realiza una solicitud POST al backend con los datos del usuario.
  /// - Si el registro es exitoso, muestra un mensaje de éxito.
  /// - Si ocurre un error, se muestra un mensaje de error.
  //////////////////////////////////////////////////////////////////////////
  const handleRegister = async (e) => {
    e.preventDefault(); // Previene la recarga de la página al enviar el formulario
    setError(''); // Resetea el error antes de cada nuevo intento
    setSuccess(''); // Resetea el mensaje de éxito antes de cada nuevo intento

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        setSuccess('Registro exitoso');
        // Limpiar los campos de entrada después del registro
        setEmail('');
        setPassword('');
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
    <div className="flex-1 flex justify-content my-auto items-center bg-gray-100">
      <div className="m-auto flex w-full h-[70%] max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg">
        
       {/* //////////////////////////////////////////////////////////////////////////
        /// Sección de la interfaz de inicio de sesión (login) en la izquierda.
        /// - Muestra un botón para cambiar a la página de inicio de sesión.
        //////////////////////////////////////////////////////////////////////////*/}
        <div className="flex w-1/2 flex-col items-center justify-center bg-white p-8">
          <div className="mb-8 text-center">
            <Image
              src={"/images/LogoEscuela.png"} // Logo de la escuela
              className="mx-auto h-24 w-24 text-[#14132F]"
              width={600}
              height={600}
            />
            <h2 className="mt-2 text-2xl font-bold text-[#14132F]">MESA DE PARTES</h2>
            <p className="text-gray-600">INGENIERIA DE SISTEMAS</p>
          </div>
          {/* Botón para cambiar a la página de inicio de sesión */}
          <Button onClick={() => setIsLogin(true)}  className="w-full bg-[#14132F] text-white hover:bg-white 
          hover:border-[#14132F] hover:border-[1px] hover:text-[#14132F]">
            Iniciar Sesión
          </Button>
        </div>

       {/* //////////////////////////////////////////////////////////////////////////
        /// Sección de registro de usuario en la derecha.
        /// - Contiene el formulario de registro donde el usuario puede ingresar su correo y contraseña.
        /////////////////////////////////////////////////////////////////////////*/}
        <div className="w-1/2 bg-[#14132F] p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold">CREAR CUENTA</h2>
          <form className="space-y-8 pt-10" onSubmit={handleRegister}>
            
            {/*/////////////////////////////////////////////////////////////////////////
            /// Campo de entrada para el correo electrónico (usuario).
            /// - Permite al usuario ingresar su correo para el registro.
            //////////////////////////////////////////////////////////////////////////*/}
            <div>
              <Label htmlFor="usuario" className="text-white">
                Usuario:
              </Label>
              <Input
                id="usuario"
                className="mt-1 bg-white w-full text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Actualiza el estado del email
                required
              />
            </div>

            {/*//////////////////////////////////////////////////////////////////////////
            /// Campo de entrada para la contraseña.
            /// - Permite al usuario ingresar su contraseña para el registro.
            //////////////////////////////////////////////////////////////////////////*/}
            <div>
              <Label htmlFor="contrasena" className="text-white">
                Contraseña:
              </Label>
              <Input
                id="contrasena"
                type="password"
                className="mt-1 w-full bg-white text-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Actualiza el estado de la contraseña
                required
              />
            </div>

            {/* Mensajes de error o éxito */}
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}

            {/* Botón para enviar el formulario de registro */}
            <Button onClick={handleRegister} type="submit" className="w-full bg-white text-[#14132F] hover:bg-[#1f1e44] hover:text-white">
              Registrar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
