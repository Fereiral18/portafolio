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
      <div className="container">
        <div className="title-container">
          <h2>titulo</h2>
        </div>
        <h4>imagen</h4>
      </div>

      <div className="footer">
        <div className="information">
          <div className="copyrigth">
            <p>copyrigth</p>
          </div>
          <div className="info-personal">
            <p>projects</p>
            <p>contact</p>
            <p>(link linkedIn)</p>
            <p>(link X)</p>
            <p>(link facebook)</p>
          </div>
        </div>
      </div>
    </>
  );
};
