import Header from '../components/Header';
import Keynote from '../components/Keynote';
import Menu from '../components/Menu';


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

export async function getStaticProps() {
  const keynotes = await (await fetch('http://localhost:3000/api/keynotes')).json();
  
  return {
    props: { keynotes }
  };
}