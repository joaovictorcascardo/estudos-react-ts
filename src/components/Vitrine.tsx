import "./vitrine.css";

interface Produto {
  id: number;
  nome: string;
  preco: number;
  estoque: number;
}

export function Vitrine() {
  const produtos: Produto[] = [
    {
      id: 1,
      nome: "Smartphone",
      preco: 3500,
      estoque: 15,
    },
    {
      id: 2,
      nome: "Mouse",
      preco: 300,
      estoque: 5,
    },
    {
      id: 3,
      nome: "Teclado",
      preco: 500,
      estoque: 0,
    },
  ];
  return (
    <div className="produtos">
      {produtos.map((produto) => (
        <div
          key={produto.id}
          style={{
            color: produto.estoque === 0 ? "gray" : "green",
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
          }}
        >
          <h3>{produto.nome}</h3>
          <p>R$ {produto.preco}</p>
          <p>Estoque: {produto.estoque}</p>
        </div>
      ))}
    </div>
  );
}
