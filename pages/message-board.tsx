import { useRouter } from "next/router";
import MessageBox from "../components/MessageBox";
import StyledButton from "../components/StyledButton";
import { formatDate } from "../lib/date_util";
import { request } from "../lib/datocms";

async function loadMessages() {
  const MESSAGES_QUERY = `query Keynotes {
    messageBoards(orderBy: updatedAt_DESC) {
      name
      message
      updatedAt
    }
  }
  `;

  const messages = await request({
    query: MESSAGES_QUERY,
  });  

  return messages.messageBoards.map((item: any) => {
    return {
      ...item,
      updatedAt: formatDate(item.updatedAt)
    }
  });
}

export default function MessageBoard(props: any) {
  const router = useRouter();

  const { messages } = props;

  return <>
    <section className="w-full py-4 flex justify-center items-center">
      <StyledButton onClick={() => router.push('/message')}>Enviar mensagem</StyledButton>
    </section>

    {
      messages.map((item: any) => {
        return <MessageBox key={`message${item.updatedAt}`} item={item} />
      })
    }
  </>
}

export async function getServerSideProps() {
  const messages = await loadMessages();
  
  return {
    props: { messages }
  }
}