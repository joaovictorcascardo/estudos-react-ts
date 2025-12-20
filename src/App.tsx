import { Vitrine } from "./components/Vitrine";

function App() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Minha Loja do Zero{" "}
      </h1>
      <Vitrine />
    </div>
  );
}

export default App;
