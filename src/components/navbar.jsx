import { useState } from "react";
import { Link } from "react-router-dom";
import { navbarLinks } from "../data/data";
import MenuResponsivo from "./MenuResponsivo";

import { CiSearch } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
import { MdMenu } from "react-icons/md";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="nav-wrap">
        <nav className="nav">
          <div className="brand">
            <div className="brand-badge">TH</div>
            <div className="brand-text">
              <span className="brand-name">Tintes</span>
              <span className="brand-sub">Hair</span>
            </div>
          </div>

          <ul className="links">
            {navbarLinks.map((item) => (
              <li key={item.id}>
                <Link to={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>

          <div className="actions">
            <button className="icon-btn" aria-label="Buscar">
              <CiSearch />
            </button>

            <button className="icon-btn cart" aria-label="Carrito">
              <PiShoppingCartLight />
              <span className="badge">0</span>
            </button>

            <button className="btn">Ingresar</button>

            <button className="burger" onClick={() => setOpen(true)} aria-label="Abrir menú">
              <MdMenu />
            </button>
          </div>
        </nav>
      </header>

      <MenuResponsivo open={open} links={navbarLinks} onClose={() => setOpen(false)} />
    </>
  );
}