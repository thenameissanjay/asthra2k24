"use client";
import React from "react";
import { FloatingNav } from "../sub/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Events",
      link: "./pages?section=technical-events",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),    },
  
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    
    </div>
  );
}
const DummyContent = () => {
  
};