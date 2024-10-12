'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User } from "lucide-react"

export default function Component() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempted with:', { username, password })
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        <div className="mb-8">
          <svg width="150" height="150" viewBox="0 0 200 200" className="fill-blue-600">
            <path d="M100 0 L200 50 L200 150 L100 200 L0 150 L0 50 Z" />
            <text x="50" y="120" fontSize="80" fill="white">ID</text>
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-blue-600 mb-2">MESA DE PARTES</h1>
        <p className="text-lg text-gray-600">INGENIERIA DE SISTEMAS</p>
      </div>
      <div className="w-1/2 bg-blue-600 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <div className="text-white mb-8 flex items-center justify-center">
            <User className="mr-2" />
            <h2 className="text-2xl font-semibold">BIENVENIDO</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="username" className="text-white">Usuario:</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-white"
                required
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-white">Contraseña:</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-white text-blue-600 hover:bg-gray-100">
              Ingresar
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}