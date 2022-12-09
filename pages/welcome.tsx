import { useRouter } from "next/router";
import { useState } from "react";
import StyledButton from "../components/StyledButton";
import StyledInput from "../components/StyledInput";

export default function Welcome() {
  const [name, setName] = useState('');
  const [showError, setShowError] = useState(false);

  function handlerInputChange(ev: any) {
    setName(ev.target.value);
    setShowError(false);
  }

  function handlerButtonClick() {
    if (!name) {
      setShowError(true);
      return;
    }

    localStorage.setItem('name', name);
    router.push('/keynotes');
  }

  const router = useRouter();
  return <div className="bg-[#ffcc00] w-full flex h-screen flex-col items-center gap-4 pt-44">
    <p className="text-xl antialiased	font-semibold">Olá! Como você se chama?</p>
    <StyledInput onChange={handlerInputChange} />
    {
      showError &&
      <p className="text-red-500">Digite seu nome aí vai...</p>
    }
    <StyledButton onClick={handlerButtonClick}>Enviar</StyledButton>
  </div>
}