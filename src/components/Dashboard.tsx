import React, { useState } from "react";
import "../styles/Dashboard.css"; // Importamos los estilos
import ProductList from "./ProductList";

interface Product {
  name: string;
  avgPrice: number;
  lowestPrice: number;
  sources: string[];
}

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const mainProducts: Product[] = [
    {
      name: "Arroz",
      avgPrice: 2.5,
      lowestPrice: 2.2,
      sources: ["Mercado A", "Supermercado B"],
    },
    {
      name: "Leche",
      avgPrice: 1.8,
      lowestPrice: 1.5,
      sources: ["Tienda C", "Mercado D"],
    },
    {
      name: "Huevos",
      avgPrice: 3.2,
      lowestPrice: 2.9,
      sources: ["Supermercado B", "Tienda E"],
    },
    {
      name: "Pan",
      avgPrice: 1.2,
      lowestPrice: 1.0,
      sources: ["Panadería F", "Mercado A"],
    },
    {
      name: "Aceite",
      avgPrice: 4.5,
      lowestPrice: 4.0,
      sources: ["Supermercado B", "Tienda C"],
    },
  ];

  return (
    <div className="dashboard">
      <header className="header">
        <div className="headerContent">
          <div className="logoContainer">
            <img
              src="/logos/logo.png?height=40&width=40"
              alt="Logo"
              className="logo"
            />
            <h1 className="appTitle">Comparador de Precios</h1>
          </div>
          <div className="userMenu">
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button
              className="userMenuButton"
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            >
              {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
            {isUserMenuOpen && (
              <div className="userMenuDropdown">
                <a href="#perfil" className="userMenuLink">
                  Perfil
                </a>
                <a href="#configuracion" className="userMenuLink">
                  Configuración
                </a>
                <a href="#cerrar-sesion" className="userMenuLink">
                  Cerrar Sesión
                </a>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="mainContent">
        <div className="searchContainer">
          <input
            type="text"
            placeholder="Buscar producto..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="searchInput"
          />
          {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
          <svg
            className="searchIcon"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>

        <div className="contentGrid">
          <ProductList products={mainProducts} />
          <div>
            <h2 className="sectionTitle">Filtros</h2>
            <div className="filtersCard">
              <div className="filterGroup">
                <label htmlFor="category" className="filterLabel">
                  Categoría
                </label>
                <select id="category" className="filterSelect">
                  <option>Todos</option>
                  <option>Alimentos</option>
                  <option>Bebidas</option>
                  <option>Limpieza</option>
                </select>
              </div>
              <div className="filterGroup">
                <label htmlFor="price-range" className="filterLabel">
                  Rango de Precio
                </label>
                <input
                  type="range"
                  id="price-range"
                  className="filterRange"
                  min="0"
                  max="100"
                />
              </div>
              <div className="filterGroup">
                <label htmlFor="source" className="filterLabel">
                  Fuente
                </label>
                <select id="source" className="filterSelect">
                  <option>Todas las fuentes</option>
                  <option>Mercado A</option>
                  <option>Supermercado B</option>
                  <option>Tienda C</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footerContent">
          <div className="copyright">
            © 2023 Comparador de Precios. Todos los derechos reservados.
          </div>
          <div className="footerLinks">
            <a href="#privacidad" className="footerLink">
              Política de Privacidad
            </a>
            <a href="#terminos" className="footerLink">
              Términos y Condiciones
            </a>
            <a href="#soporte" className="footerLink">
              Soporte
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
