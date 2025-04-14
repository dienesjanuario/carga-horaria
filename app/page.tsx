import Image from "next/image";
import { pegarDados, Valor } from "./data/dados";


function Usuario(
  { valor, posicao }:{valor: Valor, posicao: number}
) {
  return <div className="bg-neutral-600 text-white p-8 flex flex-row gap-4">
    <p className="pr-2 border-r-2">{1+posicao}</p>
    <p className="pr-2 border-r-2">{1+Number(valor.topGlobal)}</p>
    <p className="pr-2 border-r-2">{valor.User}</p>
    <p>{Number(valor.TotalDistance).toLocaleString()}</p>
  </div>
}

export default async function Home() {
  const dados = await pegarDados()

  return (
    <div className="flex flex-col flex-wrap w-full gap-8 p-16 bg-black">
      <h1 className="text-white text-4xl self-center"> Rank Top Brasil - World of Trucks </h1>
      <div className="flex flex-col gap-2 bg-neutral-800"> 
        {
          Array.from(dados.entries()).map(([posicao, item]) => <Usuario key={item.id} valor={item} posicao={posicao}/>)
        }
      </div>
    </div>
  );
}
