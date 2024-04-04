"use client";
import { useEffect } from "react";

import { useRouter } from "next/router";
export default function Home() {
  const isUserloggedIn = false;
  const router = useRouter();

  useEffect(() => {
    if (isUserloggedIn) {
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Karka Karga - Case</h1>
    </main>
  );
}
