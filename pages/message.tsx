import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import StyledButton from "../components/StyledButton";


export default function Message() {
  const router = useRouter();
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  async function sendMessage() {
    const url = 'api/message';
    const body = {
      message,
      name
    }

    try {
      const result = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body)
      })

      if (!result.ok) {
        throw new Error('Sem conexão no momento');
      }

      return result;
    }
    catch(error) {
      alert('Sem conexão no momento');
    }
  }

  function handlerMessage(ev: any) {
    setMessage(ev.target.value);
  }

  async function handleClick(ev: any) {
    ev.preventDefault();
    await sendMessage();
    router.back();
  }

  useEffect(() => {
    const localName = localStorage.getItem('name') || '';
    setName(localName);
  }, [])

  const cols = 35;
  const rows = 4;

  return <form className="flex flex-col gap-6 items-center pt-12">
    <p>Entre com a sua mensagem:</p>
    <textarea className="border-2 rounded-md text-slate-500" rows={rows} cols={cols} onChange={handlerMessage}></textarea>
    <StyledButton onClick={handleClick}>Enviar</StyledButton>
  </form>
}