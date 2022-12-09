import { useRouter } from "next/router";
import React from "react";

export default function Home(props: any) {
  const router = useRouter();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/welcome');
    }, 5000);

    return () => {
      clearTimeout(timer);
    }
  })

  return <div className="bg-[#ffcc00] w-full flex h-screen flex-col items-center gap-4 pt-52">
    <h1 className="text-5xl antialiased	font-semibold">SDU Talks</h1>
  </div>
 
}