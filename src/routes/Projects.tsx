import { Works } from "@/components/Works"
import { useEffect } from "react";

export const Projects = () => {
  useEffect(() => {  
    const scrollToBottom = () => window.scrollTo({
      top: 115,
      behavior: 'smooth',
    });
    const timeout = setTimeout(() => { scrollToBottom(); }, 300);
    return () => {
      clearTimeout(timeout)
    }
  }, [])
  return <Works />
}
