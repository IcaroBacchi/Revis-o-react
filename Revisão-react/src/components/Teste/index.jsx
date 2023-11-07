import { useEffect, useState } from "react";

export default function Teste() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [user, setUser] = useState({
    firsname: "",
    lastename: "",
    city: "",
  });
  const [notas, setNotas] = useState([1, 2, 3, 4, 5, 6]);
  const [venda, setvenda] = useState({
    preco: 0,
    quantidade: 0,
  });
  const [total, setTotal] = useState(0);

  function handleArrays(value) {
    setNotas((prev) => [...prev, value]);
  }

  function addCount() {
    setCount((prev) => prev + 1);
  }

  function subCount() {
    setCount((prev) => prev - 1);
  }

  function changeName(e) {
    setName(e.target.event);
  }

  function handleUser(e) {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function handleVenda(e) {
    setvenda((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function handleTotalVenda() {
    setTotal(Number(venda.preco) * Number(venda.quantidade));
  }

  useEffect(() => {
    handleTotalVenda();
  }, [venda.preco, venda.quantidade]);

  useEffect(() => {
    alert("Página iniciada");
  }, []);

  return (
    <>
      <div className="flex gap-2">
        <button onClick={subCount} className="text-3x1">
          -
        </button>
        <span className="text-3x1">{count}</span>
        <button onClick={addCount} className="text-3x1">
          +
        </button>
      </div>

      <div>
        <input
          className="border outline-none border-black"
          type="text"
          value={name}
          onChange={changeName}
        />
      </div>

      <div className="flex flex-col gap-2">
        <input
          value={user.firsname}
          className="border outline-none border-black"
          type="text"
          onChange={handleUser}
        />
        <input
          value={user.lastename}
          className="border outline-none border-black"
          type="text"
          onChange={handleUser}
        />
        <input
          value={user.city}
          className="border outline-none border-black"
          type="text"
          onChange={handleUser}
        />
      </div>

      <div>
        <button onClick={handleArrays}>adicionar um elemento a um array</button>
        {notas.map((nota) => nota)}
      </div>

      <div>
        <input
          name="preco"
          value={venda.preco}
          className="border outline-none border-black"
          type="text"
          onChange={handleVenda}
        />
        <input
          name="quantidade"
          value={venda.quantidade}
          className="border outline-none border-black"
          type="text"
          onChange={handleVenda}
        />

        <p>
          {total.toLocaleString("pt-br", {
            currency: "BRL",
            style: "currency",
          })}
        </p>
      </div>
    </>
  );
}
