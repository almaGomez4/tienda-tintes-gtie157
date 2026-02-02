export default function Ofertas() {
  const ofertas = [
    {
      id: 1,
      tag: "🔥 -20%",
      title: "2x1 en tonos seleccionados",
      desc: "Aplica en rubios, chocolates y cobres. Hasta agotar existencias.",
      cta: "Ver productos",
    },
    {
      id: 2,
      tag: "🚚 Gratis",
      title: "Envío gratis desde $499",
      desc: "Entrega rápida a todo México. Sin códigos.",
      cta: "Aprovechar",
    },
    {
      id: 3,
      tag: "💖 Combo",
      title: "Descuento en kits de cuidado",
      desc: "Protege el color y prolonga el brillo por más tiempo.",
      cta: "Armar kit",
    },
  ];

  const onPick = (o) => {
    // Aquí luego puedes navegar o filtrar
    alert(`Oferta seleccionada: ${o.title}`);
  };

  return (
    <section className="page">
      <div className="page-inner">
        <div className="offersHeader">
          <div>
            <h2 className="page-subtitle">Ofertas</h2>
            <p className="page-text">
              Promos activas para que tu color luzca increíble <span className="accent">✨</span>
            </p>
          </div>

          <div className="offersActions">
            <button className="chipBtn">🔥 Hoy</button>
            <button className="chipBtn ghost">💖 Favoritas</button>
          </div>
        </div>

        <div className="offersGrid">
          {ofertas.map((o) => (
            <button
              key={o.id}
              type="button"
              className="offerCard"
              onClick={() => onPick(o)}
            >
              <span className="offerBadge">{o.tag}</span>

              <h3 className="offerTitle">{o.title}</h3>
              <p className="offerDesc">{o.desc}</p>

              <span className="offerCta">
                {o.cta} →
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
