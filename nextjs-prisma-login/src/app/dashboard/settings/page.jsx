"use client"
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import { getSession } from 'next-auth/react';

function SettingsPage() {
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
    <section className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <div>
        <h1 className="text-white text-5xl">Settings</h1>
      </div>
    </section>
  );
}
export default SettingsPage;