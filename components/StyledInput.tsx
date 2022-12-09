export default function StyledInput(props: any) {
  console.log(props);

  return <input className="border-2 rounded-md leading-10 px-12 text-xl text-slate-500" {...props} />
}