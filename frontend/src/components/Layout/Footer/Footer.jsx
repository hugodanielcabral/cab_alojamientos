export const Footer = () => {
  return (
    <footer className="p-10 footer bg-base-200 text-base-content">
      <aside>
        <img
          src="https://th.bing.com/th/id/OIG.G7ltO1sdXV7HSZCtBPG2?w=1024&h=1024&rs=1&pid=ImgDetMain"
          alt=""
          className="w-32 mx-auto rounded-full shadow-2xl shadow-black "
        />
        <p className="text-secondary">DonC Alojamientos</p>
        <p>Brindando servicios en el mundo desde 2023</p>
      </aside>
      <nav>
        <header className="footer-title">Servicios</header>
        <a className="link link-hover">Propiedades</a>
        <a className="link link-hover">Artículos</a>
        <a className="link link-hover">Bed &amp; Breakfast</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <header className="footer-title">Compañia</header>
        <a className="link link-hover">Sobre nosotros</a>
        <a className="link link-hover">Contacto</a>
        <a className="link link-hover">Trabajos</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terminos y Condiciones</a>
        <a className="link link-hover">Privacidad</a>
        <a className="link link-hover">Pautas de contenido y denuncias</a>
      </nav>
    </footer>
  );
};
