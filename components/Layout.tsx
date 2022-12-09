import Header from "./Header";
import Menu from "./Menu";
import { useRouter } from "next/router";


export default function Layout(props: any) {
  const router = useRouter();

  console.log(router.pathname);

  const showHeader = router.pathname !== '/welcome' &&  router.pathname !== '/';

  return (
    <>
      {
        showHeader &&  <>
          <Header/>
          <Menu />
        </>
      }
     
      <main>{props.children}</main>
    </>
  )
}