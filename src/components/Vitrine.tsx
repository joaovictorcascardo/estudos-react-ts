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
      estoque: 20,
    },
  ];
  return (
    <div className="produtos">
      {produtos.map((produto) => (
        <div key={produto.id}>{produto.nome}</div>
      ))}
    </div>
  );
}
