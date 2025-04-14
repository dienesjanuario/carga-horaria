import Image from "next/image";
import { pegarDados, Valor } from "./data/dados";

function Usuario({ valor, posicao }: { valor: Valor, posicao: number }) {
  const color = posicao % 2 == 0 ? "bg-green-800" : "bg-green-700"
  return (
    <tr className={`bg-neutral-600 text-white p-8 flex flex-row gap-4 border border-neutral-400 ${color}`}>
      <td className="pr-2 flex gap-2 w-[5%]"><Image src="/bra.png" width={24} height={16} alt="brasil" />{1 + posicao}</td>
      <td className="pr-2 flex gap-2 w-[5%]"><p>🌐</p> {1 + Number(valor.topGlobal)}</td>
      <td className="pr-2 w-[20%]">{valor.User}</td>
      <td className="w-[5%]">{Number(valor.TotalDistance).toLocaleString()}</td>
    </tr>
  );
}

export default async function Home() {
  const dados = await pegarDados();

  return (
    <div className="flex flex-col flex-wrap w-full gap-8 p-16 bg-black">
      <Image src="/logo.png" width="800" height="800" alt="logo" className="mx-auto" />
      <h1 className="text-white text-4xl self-center">Rank Top Brasil - World of Trucks</h1>
      <table border={1} className="border border-neutral-400">
        <thead>
          <tr className="bg-neutral-700 text-white p-8 flex flex-row gap-4 border border-neutral-400">
            <th className="pr-2">Posição</th>
            <th className="pr-2">Rank Global</th>
            <th className="pr-2">Usuário</th>
            <th className="">Distância Total</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(dados.entries()).map(([posicao, item]) => (
            <Usuario key={item.id} valor={item} posicao={posicao} />
          ))}
        </tbody>
      </table>
    </div>
  );
}