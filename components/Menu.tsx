import Link from "next/link";

export default function Menu() {
  return <div className="w-full flex justify-around border-y border-solid border-slate-300">
    <Link className="text-slate-400" href='/'>Talks</Link>
    <Link className="text-slate-400" href="/mural">Mural</Link>
  </div>
}