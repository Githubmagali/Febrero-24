"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';

function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();
      if (!session) {
        router.push('/auth/login'); // Redirige a la página de inicio de sesión si no hay sesión
      }
    };

    checkSession();
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-4">Dashboard</h1>
      <button
        className="bg-neutral-400 px-4 py-2 rounded hover:bg-neutral-500"
        onClick={() => signOut()}
      >
        Logout
      </button>
    </div>
  );
}

export default DashboardPage;
