import Header from '../components/Header';
import Keynote from '../components/Keynote';
import Menu from '../components/Menu';
import { request } from '../lib/datocms';


export default function Home(props: any) {
  const { keynotes } = props;

  return <div className='w-full h-screen flex flex-col'>
    <Header/>
    <Menu />
    {
      keynotes.allKeynotes.map((keynote: any)=> {
        return <Keynote key={keynote.theme} item={keynote} />
      })
    }
  </div>;
}

async function loadKeynotes() {
  const KEYNOTES_QUERY = `query MyQuery {
    allKeynotes {
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