# 14-Framework front

- <a href="https://youtu.be/D0lci9vSPRg" target="_blank">Lien vers la vidéo 14 (partie 1)</a>
- <a href="https://youtu.be/fPpKb3eObek" target="_blank">Lien vers la vidéo 14 (partie 2)</a>

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

Make sure you are in the folder containing the exercice 14 and not the global folder. The in your terminal :

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Description du projet 

Sur la page principale on retrouve tous les produits. Il est possible de les filters par catégories. On affiche si le produit et disponible, si oui en combien d'exemplaires. On peut aussi créer ou supprimer un produit. Lors de la création d'un produit on remplit automatiquement la date de création et le slug. De plus on s'assure de la cohérence entre le stock et la disponibilité. On effectuait aussi les vérifications classiques. On peut voir un produit en détail sur une page produit simple. L'URL est dynamique et varie en fonction du produit. Sur la page produit simple on peut changer la quantité disponible et la note. La disponibilité est automatiquement ajustée.