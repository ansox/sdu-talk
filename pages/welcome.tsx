import { useRouter } from "next/router";
import StyledButton from "../components/StyledButton";
import StyledInput from "../components/StyledInput";

export default function Welcome() {
  const router = useRouter();
  return <div className="bg-[#ffcc00] w-full flex h-screen flex-col items-center gap-4 pt-44">
    <p className="text-xl antialiased	font-semibold">Olá! Como você se chama?</p>
    <StyledInput />
    <StyledButton onClick={() => router.push('/keynotes')}>Enviar</StyledButton>
  </div>
}