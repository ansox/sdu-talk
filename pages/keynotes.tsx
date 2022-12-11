import Keynote from '../components/Keynote';
import { request } from '../lib/datocms';


export default function Keynotes(props: any) {
  const { keynotes } = props;
  return <>
    {
      keynotes.allKeynotes.map((keynote: any)=> {
        return <Keynote key={keynote.theme} item={keynote} />
      })
    }
  </>;
}

async function loadKeynotes() {
  const KEYNOTES_QUERY = `query MyQuery {
    allKeynotes(orderBy: date_ASC) {
      date
      speaker
      theme
      photo {
        url
      }
    }
  }`;

  const keynotes = await request({
    query: KEYNOTES_QUERY,
  });  

  return keynotes;
}

export async function getStaticProps() {
  const keynotes = await loadKeynotes();
  
  return {
    props: { keynotes }
  };
}