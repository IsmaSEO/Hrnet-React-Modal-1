# HRNet React Modal

HRNet React Modal est un composant React simple, réutilisable et personnalisable pour afficher une modale dans vos applications React.

---

## Installation

Pour installer le package via npm, exécutez la commande suivante :

```sh
npm install hrnet-react-modal-ismaseo
```

---

## Utilisation

Voici un exemple d'intégration basique du composant :

```javascript
import React, { useState } from "react";
import MyModal from "hrnet-react-modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <MyModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Example Modal"
      >
        <p>Here is the content of the modal!</p>
      </MyModal>
    </div>
  );
};

export default App;
```

---

## Props disponibles

- **`isOpen`** : `boolean` (par défaut `false`) – Indique si la modale est visible ou non.
- **`onClose`** : `function` (par défaut une fonction vide) – Fonction appelée pour fermer la modale.
- **`title`** : `string` (par défaut `"Modal Title"`) – Texte affiché dans l’en-tête de la modale.
- **`children`** : `node` (par défaut `null`) – Contenu dynamique à afficher à l’intérieur de la modale.

---

## Styles

Le composant inclut des styles CSS de base qui peuvent être étendus ou remplacés selon vos besoins.

Exemple de personnalisation des styles CSS :

```css
.modal-container {
  background-color: #f5f5f5;
  border: 2px solid #333;
}

.modal-close {
  color: red;
  font-size: 24px;
}
```

---

## Fonctionnalités

1. Facile à utiliser : Configuration simple avec les props.
2. Personnalisable : Modifiez les styles selon vos besoins.
3. Accessibilité de base : Fermez la modale en cliquant sur l’arrière-plan ou sur le bouton de fermeture.

---

## Compatibilité

Ce composant est compatible avec la dernière version de React et fonctionne sur tous les navigateurs.

---

## Développement local

Si vous souhaitez modifier ou améliorer ce composant, voici comment faire :

1. **Clonez le repository** :

   ```sh
   git clone https://github.com/IsmaSEO/hrnet-react-modal-1.git
   cd hrnet-react-modal
   ```

2. **Installez les dépendances** :

   ```sh
   npm install
   ```

3. **Lancez un environnement de développement local** :

   ```sh
   npm run dev
   ```

---

## Build et Publication

1. **Construisez le package** avec la commande :

   ```sh
   npm run build
   ```

2. **Publiez-le sur npm** avec :

   ```sh
   npm login
   npm publish --access public
   ```

---

## Contributions

Les contributions sont les bienvenues ! Si vous avez des suggestions ou détectez un problème, ouvrez une issue ou une pull request dans le repository GitHub.

---

## Licence

Ce package est sous **licence MIT**. Vous êtes libre de l'utiliser et de le modifier comme bon vous semble.
