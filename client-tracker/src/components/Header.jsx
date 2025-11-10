import "./Header.css";

function Header() {
  return (
    <header className="app-header">
      <div className="logo">💼 Client Tracker</div>
      <nav>
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Clients</a></li>
          <li><a href="#">Statistiques</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
