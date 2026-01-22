export default function MenuResponsivo({ open, links, onClose }) {
  if (!open) return null;

  return (
    <div className="menuOverlay" onClick={onClose}>
      <div className="menuBox" onClick={(e) => e.stopPropagation()}>
        <div className="menuTop">
          <h3>Menú</h3>
          <button className="menuX" onClick={onClose}>✕</button>
        </div>

        <ul className="menuList">
          {links.map((item) => (
            <li key={item.id}>
              <a href={item.url} onClick={onClose}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        <button className="menuCloseBtn" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
}