import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="p-10 footer bg-base-200 text-base-content ">
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
        <header className="footer-title">Mis redes</header>
        <ul className="flex">
          <a
            className="text-white link link-hover hover:text-primary"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/hugo-daniel-cabral"
          >
            <FaGithubSquare size={40} />
          </a>
          <a
            className="link link-hover text-secondary hover:text-primary"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Teseo11/cab_alojamientos"
          >
            <FaLinkedin size={40} />
          </a>
        </ul>
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
