import React from "react";
import "./App.css";
import "./global.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/4494881?s=460&v=4"
                alt="Avatar do Usuário"
              />
              <div className="user-info">
                <strong>Rafael Querino</strong>
                <span>PHP, JavaScript, ReactJs, Node.Js</span>
              </div>
            </header>
            <p>
              Father, Husband, Developer, Entrepreneur, Libertarian, always
              trying to be better than yesterday
            </p>
            <a href="https://github.com/rafaelqm">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/4494881?s=460&v=4"
                alt="Avatar do Usuário"
              />
              <div className="user-info">
                <strong>Rafael Querino</strong>
                <span>PHP, JavaScript, ReactJs, Node.Js</span>
              </div>
            </header>
            <p>
              Father, Husband, Developer, Entrepreneur, Libertarian, always
              trying to be better than yesterday
            </p>
            <a href="https://github.com/rafaelqm">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/4494881?s=460&v=4"
                alt="Avatar do Usuário"
              />
              <div className="user-info">
                <strong>Rafael Querino</strong>
                <span>PHP, JavaScript, ReactJs, Node.Js</span>
              </div>
            </header>
            <p>
              Father, Husband, Developer, Entrepreneur, Libertarian, always
              trying to be better than yesterday
            </p>
            <a href="https://github.com/rafaelqm">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/4494881?s=460&v=4"
                alt="Avatar do Usuário"
              />
              <div className="user-info">
                <strong>Rafael Querino</strong>
                <span>PHP, JavaScript, ReactJs, Node.Js</span>
              </div>
            </header>
            <p>
              Father, Husband, Developer, Entrepreneur, Libertarian, always
              trying to be better than yesterday
            </p>
            <a href="https://github.com/rafaelqm">Acessar perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
