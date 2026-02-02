export default function Catalogo() {
  const categorias = [
    { id: 1, name: "Rubios", emoji: "✨", desc: "Matizadores y fríos" },
    { id: 2, name: "Castaños", emoji: "🍫", desc: "Naturales y chocolates" },
    { id: 3, name: "Rojizos", emoji: "🔥", desc: "Cobre y rojo intenso" },
    { id: 4, name: "Borgoñas", emoji: "🍷", desc: "Vino y ciruela" },
    { id: 5, name: "Fantasía", emoji: "🦄", desc: "Pasteles y neón" },
    { id: 6, name: "Negros", emoji: "🖤", desc: "Negro azulado y carbón" },
  ];

  const onSelect = (cat) => {
   
    alert(`Elegiste: ${cat.name}`);
  };

  return (
    <section className="page">
      <div className="page-inner">
        <div className="catalogHeader">
          <div>
            <h2 className="page-subtitle">Catálogo</h2>
            <p className="page-text">
              Elige una categoría y encuentra tu tono ideal <span className="accent">✨</span>
            </p>
          </div>

          <div className="catalogActions">
            <button className="chipBtn" type="button">🔥 Más vendidos</button>
            <button className="chipBtn ghost" type="button">💖 Nuevos</button>
          </div>
        </div>

        <div className="catalogGrid">
          {categorias.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className="catalogBtn"
              onClick={() => onSelect(cat)}
            >
              <div className="catalogBtnTop">
                <span className="catalogEmoji">{cat.emoji}</span>
                <span className="catalogName">{cat.name}</span>
              </div>

              <p className="catalogDesc">{cat.desc}</p>

              <span className="catalogGo">Ver tonos →</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
