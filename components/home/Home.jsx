import "./styles.css";

export const Home = () => {
  return (
    <>
      <div className="container-navegation">
        <p>logo</p>
        <nav className="navegation">
          <ul className="list">
            <li>(Logo de la pagina)</li>
            <li>about</li>
            <li>projects</li>
            <li>contact</li>
            <li>(link linkedIn)</li>
            <li>(link X)</li>
            <li>(link facebook)</li>
          </ul>
        </nav>
      </div>
      <div className="container-general">
        <div className="title-container">
          <h2>Front-end Developer</h2>
          <h4>Pagina de inicio</h4>
        </div>
      </div>
    </>
  );
};
