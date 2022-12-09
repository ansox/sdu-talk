import Header from "./Header";
import Menu from "./Menu";

export default function Layout(props: any) {
  return (
    <>
      <Header/>
      <Menu />
      <main>{props.children}</main>
    </>
  )
}