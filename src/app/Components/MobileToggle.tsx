"use client";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function MobileToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 

  return (
    <div className="flex flex-col space-y-2">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Theme</span>
      <div className="flex space-x-2">
        <Button
          variant={resolvedTheme === "light" ? "default" : "outline"}
          size="sm"
          onClick={() => setTheme("light")}
          className="flex-1"
        >
          <Sun className="mr-2 h-4 w-4" />
          Light
        </Button>
        <Button
          variant={resolvedTheme === "dark" ? "default" : "outline"}
          size="sm"
          onClick={() => setTheme("dark")}
          className="flex-1"
        >
          <Moon className="mr-2 h-4 w-4" />
          Dark
        </Button>
        <Button
          variant={resolvedTheme === "system" ? "default" : "outline"}
          size="sm"
          onClick={() => setTheme("system")}
          className="flex-1"
        >
          <Monitor className="mr-2 h-4 w-4" />
          System
        </Button>
      </div>
    </div>
  );
}