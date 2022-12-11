export default function MessageBox(props: any) {
  const { item } = props;

  return <div className="bg-[#ffcc00] mt-3 mx-3 p-4 rounded-2xl shadow">
    <p className="font-extralight	text-slate-600">{item.message}</p>
    <section className="flex flex-col items-end">
      <p className="font-semibold	antialiased text-slate-600">{item.name}</p>
      <p className="font-semibold	antialiased text-slate-600">{item.updatedAt}</p>
    </section>
  </div>
}