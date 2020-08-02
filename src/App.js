import React, { useState, useEffect } from "react";
import api from "./services/api";
import "./App.css";
import "./global.css";
import "./Sidebar.css";
import "./Main.css";

import DevItem from "./components/DevItem";
import DevForm from "./components/DevForm";
import { CustomDialog } from "./components/CustomDialog";

function App() {
  const [devs, setDevs] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [githubDeleting, setGithubDeleting] = useState("");

  const handleDialogOpen = () => {
    setIsOpen(true);
  };

  const handleDialogClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/");

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post("/devs", data);
    console.log(response.data);
    let exists = devs.filter(
      (dev) => dev.github_username === response.data.dev.github_username
    );

    if (exists.length) {
      return false;
    }
    setDevs([...devs, response.data.dev]);
  }

  async function confirmRemoveDev(github_username) {
    const response = await api.delete("/devs/" + github_username);

    if (response.status !== 200) {
      return false;
    }

    setDevs(devs.filter((dev) => dev.github_username !== github_username));
  }

  function handleRemoveDev(github_username) {
    setGithubDeleting(github_username);
    handleDialogOpen();
  }

  const handleTestConfirm = () => {
    confirmRemoveDev(githubDeleting);
    handleDialogClose();
  };

  // @TODO remover e editar

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <CustomDialog
          isOpen={isOpen}
          handleClose={handleDialogClose}
          handleConfirm={handleTestConfirm}
          title={"Remover usuário " + githubDeleting + "?"}
        ></CustomDialog>
        <ul>
          {devs.map((dev) => (
            <DevItem key={dev._id} handleRemove={handleRemoveDev} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
