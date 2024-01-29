import { SemanticHtml } from "@/components/Learning/html/SemanticHtml"
import { useParams } from "react-router-dom";

export const Learning = () => {
  const { id } = useParams();
  console.log({ id });
  
  return <SemanticHtml />
}
