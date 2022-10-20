# Journal de bord

Journal de bord de mon test technique en React & TypeScript

### Mardi aprés midi :

- Mise en place de l'architecture de mon projet, avec vite. Création du repository, et premier push. Pret a commencer à coder.
- Avant de réellement commencer, début de lecture de documentation sur Typescript. Ne connaissant pas, mais voulant découvrir et apprendre, le passage par beaucoup de recherches sur TS était important. Je ne trouve pas la doc officielle très bien faite. Je me tourne vers plusieurs sources, des tutos de découverte TS, des vidéos.
- Très compliqué de réussir à assimiler Typescript, surtout en voulant commencer à coder. Je réfléchis à beaucoup de solutions pour le memory en lui-même. J'ai du mal à me lancer directement en TS, par peur de ne pas avancer du tout. Je perdrais surement moins de temps, (le temps d'apprendre à utiliser typescript) à faire en react/js classique, puis migrer petit à petit vers typescript.
- Du coup, je commence à creer mes composants principaux, je prépare ma logique. Un peu de réflexion pour la logique de la carte retournée, afin qu'elle y reste si elle est en paire etc. Finalement après plusieurs recherches, et une solution sur stackoverflow, je vais adapter à mon code, en voyant comment ça fonctionne.
- Le gros du code est là, j'ai même trouvé un module npm pour un timer, un problème en moins ! Je ne suis pas réellement content de la propreté de mon code, je trouve mon composant board un peu trop conséquent. Mais est-ce que je perds du temps sur refactoriser, ou alors je fais une pause pour aujourd'hui, et je m'occupe de refaire le gros du projet en TS. Quitte à réfléchir après pour la refactorisation ...  
  --> Fin de première après-midi. Plutôt satisfait. Il me reste encore la migration vers TS, peut-être de la refacto, et l'ajout pour terminer de quelques tests unitaires ?

### Mercredi :

- Début de journée, en ayant fait que penser au projet hier soir dans le lit. Comment je peux améliorer la lisibilité ? Comment je vais régler 2 3 comportements qui ne me plaisent pas ? Est-ce que je vais "dompter" TS rapidement ? Quels tests mettaient en place, au moins 1 ou 2 / composants. Et surtout, trouver un bon équilibre entre durée du test, et niveau de code.
- Première chose à faire ce matin, relire un peu le code de la veille, pour se remettre dans le projet. On regle deux petits "bugs" que je n'avais pas vus hier. Puis directement on passe à la migration vers Typescript
- Les quelques petits soucis ont été résolu. J'ai voulu commencer par faire un peu de mise en page plus propre, histoire d'avoir une version desktop clean. J'ai essayé de regarder pour la vue mobile, mais j'ai principalement l'impression que ce genre de jeu avec autant de vignettes, n'est pas adapté au petit écran. Je ne veux pas perdre trop de temps sur ça, le visuel desktop me convient !
- J'ai ajouté un compteur, ainsi qu'une modale s'affichant à la fin de la partie ( soit plateau finit / soit temps expiré).
- Finalement, la migration vers Typescript s'est relativement bien passé. Contrairement à ce que je pensais, c'est intuitif. J'ai dû regarder sur le internet comment typer certaines choses, mais dans l'ensemble, ça me paraît correct. Avec un peu de pratique et d'entrainement, ça deviendra naturel, j'aime beaucoup le fait de typer fortement tout dans nos fichiers, ça evite les mauvaises surprises.
- Je me suis rendu compte que j'avais un timer, mais pas de progress bar. J'ai donc cherché le moyen le plus simple pour en implémenter une.
- Je vais pouvoir commencer à me pencher sur les tests. Histoire d'en avoir quelques-uns de fonctionnels par composant
- Je n'avais vu que très rapidement en cours, le principe des tests, mais succinctement ! On regarde donc un peu de document, et je commence à m'y mettre. Tout ce que j'apprends là, ça ne sera jamais perdu.
- J'ai mis en place des premiers petits tests tout simples. Mais qui ont le mérite de fonctionner. Je vais essayer de faire un ou deu plus conséquent, sur un composant react entier.
- Quelques tests ont été mis en place, mais j'ai besoin de travailler et d'apprendre beaucoup plus sur leurs réalisations. Je veux rester dans un rapport temps/rendu relativement correct, et pas m'éparpiller pour au final par avoir de gros changements.
- Petite pause, puis relecture du code, tentative de ranger ou de rendre le code un peu plus compréhensible. Je dois travailler sur rendre les composants plus simple. Je pense retoucher encore 2, 3 petites choses avant de m'arrêter sur ce projet.

### Jeudi matin

- Je voulais revoir une dernière fois le projet avant de l'envoyer. Je pense pas améliorer beaucoup plus, ou du moins pas en peu de temps. Donc je vais pouvoir m'arrêter là, conclure, et envoyer le projet.

## Conclusion

Je n'avais jamais utilisé de Typescript, mais j'avais de toute façon envie d'apprendre, ce projet était une bonne opportunité pour ça, et je regrette absolument pas. Il me manque de la pratique évidemment pour maitriser, mais je trouve l'utilisation de Typescript vraiment intéressante, et nécessaire.
J'ai passé beaucoup de temps à lire de la documentation, sur différentes ressources. Je ne voulais pas me jeter dans le code sans réfléchir un minimum avant. Travailler sur ce test de manière générale était très instructif, et ça a pu me mettre dans des conditions de travail, dans le sens où je voulais rendre quelque chose relativement rapidement. Je voulais principalement que le ratio code "propre"/temps ne soit pas trop mauvais. J'ai essayé de faire du mieux que j'ai pu en me limitant en durée, donc je peux rendre ce test en étant relativement content du travail accompli.  
Finalement, le gros du travail de logique et de code pur était fait dès le mardi, mais je voulais prendre du temps de réflexion, de mieux faire les choses tout simplement.
J'espère qu'on me donnera la chance de pouvoir continuer a m'ameliorer et m'aider a progresser dans le bon sens.
