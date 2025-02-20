import { useState } from "react";
import "./App.css";
import MyModal from "./lib/MyModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div id="root">
      <h1>Test de la Modale HRNet</h1>
      <button onClick={() => setIsModalOpen(true)}>Ouvrir la Modale</button>

      <MyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Bienvenue dans HRNet"
      >
        <p>inscrire le contenu de la modale ici </p>
      </MyModal>
    </div>
  );
}

export default App;
