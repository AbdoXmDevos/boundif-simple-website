"use client";
// pages/index.tsx
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ModeToggle"; // Import ModeToggle component
import {Download} from "lucide-react"


import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen bg- flex items-center justify-center">
      {/* Logo at the top left */}
      <div className="absolute top-4 lg:left-10 z-10 invisible md:visible">
        <Image
          src="/logo-website.png" // Replace with your actual logo image path
          alt="Logo"
          width={100} // Adjust the width as needed
          height={100} // Adjust the height as needed
        />
      </div>
      <div className="absolute top-4 right-10 z-10">
        <ModeToggle /> {/* Add the ModeToggle component */}
        
        </div>
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-center">
        {/* Left side: Phone Mockup */}
        <div className="flex-1 flex justify-center mb-6 md:mb-0">
          <div className="relative w-[250px] h-[500px] sm-20 mt-10 md:w-[300px] md:h-[700px] hover:scale-120 transition-transform duration-300">
            <Image
              src="/mockup-removebg.png" // Make sure to put your phone mockup in the public folder
              alt="App Showcase"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Right side: Download Button */}
        <div className="flex-1 flex flex-col items-center justify-center md:pl-10 ">
          <h2 className="text-3xl text-black font-extrabold mb-6 dark:text-white shadow-2xl">قم بتنزيل تطبيقنا</h2>
          <p className="text-lg text-gray-600 dark:text-gray-100 mb-8 text-center">استمتع بأفضل الميزات والتصميم مع تطبيقنا. قم بالتنزيل الآن وابدأ في استخدامه اليوم!</p>
          <Button 
            size="lg"
            className="mb-20 shadow-lg"
            onClick={() => {
              window.location.href = "/Boundif.apk"; // Replace with your APK URL
            }}
          >
           تحميل التطبيق
           <Download className="mr-2" size={24} />
          </Button>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="absolute bottom-0 bg-black w-full text-center text-sm text-gray-200 p-4">
        <p>
          Made with ❤️ by <strong>Boundif team</strong>. All rights reserved.
        </p>
      </footer>
    </div>
    
  );
}