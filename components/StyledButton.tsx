export default function StyledButton(props: any) {
  const { children, ...params } = props;
  return <button {...params} className="border-2 border-amber-500 rounded-full shadow leading-10 px-12 text-xl">
    {children}
  </button>
}