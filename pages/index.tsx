import { useRouter } from "next/router";
import React from "react";
import { initFirebase } from "../lib/firebase-messaging";

export default function Home(props: any) {
  const router = useRouter();

  function hasName(): boolean {
    const name = localStorage.getItem('name');

    return !!name;
  }

  React.useEffect(() => {
    initFirebase();

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener("message", (event) => {
        console.log("event for the service worker", event);
        alert(event.data.firebaseMessaging.payload.notification.body)
      });
    }
    
    const timer = setTimeout(() => {
      if (hasName()) {
        router.push('/keynotes');
      }
      else {
        router.push('/welcome');
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
    }
  })

  return <div className="bg-[#ffc800] w-full flex h-screen flex-col items-center gap-4 pt-52">
    <div>
      <h1 className="text-4xl antialiased	font-semibold">SDU</h1>
      <h1 className="text-8xl antialiased	font-semibold">Talks</h1>
    </div>
  </div>
 
}