import Keynote from '../components/Keynote';
import { formatDate } from '../lib/date_util';
import { request } from '../lib/datocms';


export default function Keynotes(props: any) {
  const { keynotes } = props;
  return <>
    {
      keynotes.map((keynote: any)=> {
        return <Keynote key={keynote.theme} item={keynote} />
      })
    }
  </>;
}

async function loadKeynotes() {
  const KEYNOTES_QUERY = `query Keynotes {
    keynotes(orderBy: date_ASC) {
      date
      speaker
      theme
      photo {
        url
      }
    }
  }
  `;

  const keynotes = await request({
    query: KEYNOTES_QUERY,
  });  
  
  return keynotes.keynotes.map((item: any) => {
    return {
      ...item, 
      date: formatDate(item.date)
    }
  });
}

export async function getStaticProps() {
  const keynotes = await loadKeynotes();
  
  return {
    props: { keynotes }
  };
}