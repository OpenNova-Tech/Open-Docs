'use client'

import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/profile")
        .then((res) => res.json())
        .then((data) => setUser(data))
    } else if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router])

  if (!user)
    return (
      <div className="flex justify-center items-center h-screen text-gray-400">
        Loading profile...
      </div>
    )

  return (
    <div className="min-h-screen flex justify-center items-center bg-black p-6">
      <div className="bg-neutral-900 shadow-lg rounded-2xl p-8 w-full max-w-md">
        <div className="flex flex-col items-center gap-4">
          <img
            src={user.profilePicture || "https://wallpapers.com/images/hd/cartoon-developer-profile-picture-j23xefhmfofeiayv.png"}
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full border-4 border-indigo-500"
          />
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {user.realName}
          </h1>
          <p className="text-gray-500 dark:text-gray-400">@{user.username}</p>
          <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
          <p className="text-sm text-gray-400 mt-2">
            Joined on {new Date(user.createdAt).toLocaleDateString()}
          </p>

          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="mt-6 px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}
