import Link from "next/link";

export default function Menu() {
  return <div className="h-12 flex justify-around items-center border-y border-solid border-slate-300">
    <Link className="text-slate-400" href='/keynotes'>Talks</Link>
    <Link className="text-slate-400" href="/message-board">Mural</Link>
  </div>
}