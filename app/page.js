"use client"
import { useEffect, useState } from "react";

export default function Home() {
  const [data, SetData] = useState("")

    async function getCEP() {
      fetch(`https://viacep.com.br/ws/${data}/json/`)
      .then ((response) => response.json())
      .then((data) => SetData(data))
      .catch((erro)=>console.log(erro))
    }

  return (
    <main className=" min-h-screen flex-col items-center justify-between p-24">
<h1><b>Consulte seu CEP</b></h1>
      <input type="cep" placeholder="CEP" onChange={(ev) => SetData(ev.target.value)} value={data} minLength={8} maxLength={9} />
      <button onClick={getCEP}>Clicar</button>
      
    <p>CEP: {data.cep}</p>
    <p>Rua: {data.logradouro}</p>
    <p>Bairro: {data.bairro}</p>
    <p>Localidade: {data.localidade}</p>
    <p>Uf: {data.uf}</p>
    <p>IBGE: {data.ibge}</p>
    <p>Gia: {data.gia}</p>
    <p>DDD: {data.ddd}</p>
    <p>Siafi: {data.siafi}</p>
  </main>
  )}
