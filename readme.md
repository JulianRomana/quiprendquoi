# Qui veut quoi ?????

## Lancer le projet : 

`npm install`

`npm run start`

## Améliorations ajoutées:
- Ajouter un item à une party ( fichier: app.js - party.pug )
- Afficher les items d'une party ( fichier: app.js - party.pug )
- Supprimer un item à une party ( fichier: app.js - party.pug )
- Utilisation de l'API canvas ( offline.html )

## Article personnel
### Sujet : canvas API

A l'image du Dino de google, j'ai décidé de d'implémenter un jeu assez minimaliste pour pouvoir permettre à l'utilisateur de patienter lorsqu'il veut consulter le site en hors connexion. D'une part comme dis précedemment, ça permet au user de patienter en attendant qu'il retrouve sa connexion internet, mais aussi à le garder sur le site web pour qu'il continue à utiliser l'application et ne pas perdre d'utilisateur.

L'implémentation de ce mini jeu utilise aussi l'api `requestAnimationFrame`

```ruby
const raf = callback => window.requestAnimationFrame(callback)
```

Plutot que d'utiliser un `setInterval`, le requestAnimationFrame est une api spécialement développée pour ce genre de cas. Quand on a besoin de répéter quelque chose de manière très rapide ( dans le cas de mon jeu, le mouvement de la balle est rafraichie très souvent pour avoir cet effet de fluidité ).
Cette api permet aussi d'avoir un gain de performance car les navigateurs qui la supporte ( quasiment tous ), optimise l'animation trigger par le `requestAnimationFrame`, elle parait donc plus *smooth*.

### Conclusion

Pour conclure, l'utilisation de ces 2 api est plus que justifiée dans le cadre de ce projet d'*amélioration progressive*.
En effet les 2 api sont toutes les 2 supportées sur quasiment tous les navigateurs ( hello ie < 9 et opera mini ) et cela, pas seulement pour des jeux mais aussi pour tous types d'utilisation qu'on peut trouver au canvas et les animations avec canvas.
