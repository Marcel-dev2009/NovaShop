"use client"
import {Sun , Moon} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
export default function Themes() {
   const {theme , setTheme} = useTheme();       
  return (
    <Button variant="outline" size="icon"
    className="rounded-full -translate-y-2 absolute right-6 top-8" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <Sun className="absolute h-10 w-10 rotate-0 scale-100 dark:rotate-90 dark:scale-0"/>
      <Moon className="absolute w-10 h-10 rotate-90 scale-0 dark:-rotate-0 dark:scale-100"/>
    </Button>
  )
}