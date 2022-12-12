export function formatDate(date: string) {
  const formated = new Date(date);
  return formated.toLocaleDateString('pt-BR') + ' ' + formated.toLocaleTimeString('pt-BR');
}
