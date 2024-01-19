import { Works } from "@/components/Main/Works"
import { useEffect } from "react";

export const Projects = () => {
  useEffect(() => {  
    const scrollToBottom = () => window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
    const timeout = setTimeout(() => { scrollToBottom(); }, 300);
    return () => {
      clearTimeout(timeout)
    }
  }, [])
  return <Works />
}
