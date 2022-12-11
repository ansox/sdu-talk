import { request } from "../lib/datocms";

function formatDate(date: string) {
  const formated = new Date(date);
  return formated.toLocaleDateString('pt-BR') + ' ' + formated.toLocaleTimeString('pt-BR');
}

async function loadMessages() {
  const MESSAGES_QUERY = `query MyQuery {
    allMessages(orderBy: _createdAt_DESC) {
      name
      message
      updatedAt
    }
  }`;

  const messages = await request({
    query: MESSAGES_QUERY,
  });  

  return messages.allMessages.map(item => {
    return {
      ...item,
      updatedAt: formatDate(item.updatedAt)
    }
  });
}

export default function MessageBoard(props: any) {
  const { messages } = props;

  return <>
    {
      messages.map(item => {
        return <div key={`message${item.updatedAt}`} className="bg-[#ffcc00] mt-3 mx-3 p-4 rounded-2xl shadow">
          <p className="font-extralight	text-slate-600">{item.message}</p>
          <section className="flex flex-col items-end">
            <p className="font-semibold	antialiased text-slate-600">{item.name}</p>
            <p className="font-semibold	antialiased text-slate-600">{item.updatedAt}</p>
          </section>
        </div>
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