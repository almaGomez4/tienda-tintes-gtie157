export default function Banner() {
  return (
    <section className="heroCute">
      <div className="heroCuteInner">
        <div className="heroCuteLeft">
          <span className="heroPill">✨ Tonos lindos • Stock al instante</span>

          <h1 className="heroTitle">
            Tienda de tintes <span>para el</span>
            <br />
            <span className="heroAccent">cabello</span>
          </h1>

          <p className="heroText">
            Rubios, chocolates, borgoñas y fantasía. Elige tu tono y listo 💖
          </p>

          <div className="heroTags">
            <span>✨ Sin amoníaco</span>
            <span>💖 Color duradero</span>
            <span>⚡ Entrega rápida</span>
          </div>
        </div>

        <div className="heroCuteRight">
          <div className="toneCard">
            <p className="toneTitle">Tonos populares</p>

            <div className="swatches">
              <span className="sw s1" />
              <span className="sw s2" />
              <span className="sw s3" />
              <span className="sw s4" />
              <span className="sw s5" />
              <span className="sw s6" />
            </div>

            <p className="toneTip">Tip: usa shampoo matizador para mantener el color ✨</p>
          </div>
        </div>
      </div>
    </section>
  );
}