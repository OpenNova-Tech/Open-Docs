'use client'

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const [form, setForm] = useState({ username: "", realName: "", email: "", password: "" })
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })

    const data = await res.json()

    if (!res.ok) {
      alert(data.error || "Registration failed")
      setLoading(false)
      return
    }

    // ✅ Auto login immediately after successful registration
    const loginRes = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false, // prevent NextAuth redirect
    })

    setLoading(false)

    if (loginRes?.error) {
      alert("Login failed after registration")
    } else {
      router.push("/") // ✅ redirect to home
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      {["username", "realName", "email", "password"].map((f) => (
        <input
          key={f}
          type={f === "password" ? "password" : f === "email" ? "email" : "text"}
          placeholder={f.charAt(0).toUpperCase() + f.slice(1)}
          className="w-full mb-3 border p-2 rounded"
          onChange={(e) => setForm({ ...form, [f]: e.target.value })}
          required
        />
      ))}
      <button
        type="submit"
        className="w-full bg-green-600 text-white p-2 rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Registering..." : "Register"}
      </button>
    </form>
  )
}
