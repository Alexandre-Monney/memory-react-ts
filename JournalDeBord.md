# Journal de bord

Journal de bord de mon test technique en React & TypeScript

### Mardi aprés midi :

- Mise en place de l'architecture de mon projet, avec vite. Creation du repository, et premier push. Pret a commencer a coder.
- Avant de commencer, debut de lecture de documentation sur TypeScript. Ne connaissant pas, mais voulant découvrir et apprendre, le passage par beaucoup de recherche sur TS était important. Je ne trouve pas la doc officielle très bien faite. Je me tourne vers plusieurs sources, des tutos de découverte TS, des vidéos.
- Trés compliqué de réussir a assimiler TypeScript, surtout en voulant commencer a coder. Je réfléchis a beaucoup de solutions pour le memory en lui même. J'ai du mal a me lancer directement en TS, par peur de ne pas avancer du tout. Je perdrais surement moins de temps, (le temps d'apprendre à utiliser typescript) a faire en react/js classique, puis migrer petit a petit vers typescript.
- Du coup, je commence a creer mes composants principaux, je prépare ma logique. Un peu de réflexion pour la logique de la carte retournée, afin qu'elle y reste si elle est en paire etc.. Finalement aprés plusieurs recherche, et une solution sur stackOverFlow, je vais adapter a mon code, en voyant comment ça fonctionne.
- Le gros du code est la, j'ai même trouvé un module npm pour un timer, un problème en moins ! Je suis pas réellement content de la propreté de mon code, je trouve mon composant board un peu trop conséquent. Mais est ce que je perds du temps sur refactoriser, ou alors je fais une pause pour aujourd'hui, et je m'occupe de refaire le gros du projet en TS. Quitte a réfléchir aprés pour la refactorisation ...  
  --> Fin de première aprés-midi. Plutôt satisfait. Il me reste encore la migration vers TS, peut etre de la refacto, et l'ajout pour terminer de quelques Tests unitaires ?

### Mercredi :

- Debut de journée, en ayant fait que de penser au projet hier soir dans le lit. Comment je peux améliorer la lisibilité ? Comment je vais regler 2 3 comportements qui ne me plaisent pas ? Est ce que je vais "dompter" TS rapidement ? Quels tests mettre en place, au moins 1 ou 2 / composants. Et surtout, trouver un bon équilibre entre durée du test, donc rendre mon projet & propreté du code.
- Premiere chose a faire ce matin, relire un peu le code de la veille, pour se remettre dans le projet. On regle deux petits "bugs" que je n'avais pas vu hier. Puis directement on passe a la migration vers TypeScript
- Les quelques petits soucis ont été résolu. J'ai voulu commencer par faire un peu de mise en page plus propre, histoire d'avoir une version desktop clean. J'ai essayé de regarder pour la vue mobile, mais j'ai principalement l'impression que ce genre de jeu avec autant de vignettes, n'est pas adapté au petit écran. Je ne veux pas perdre trop de temps sur ça, le visuel desktop me convient !
- J'ai ajouté un compteur, ainsi qu'une modale s'affichant a la fin de la partie ( soit plateau finit / soit temps expiré ).
- Finalement, la migration vers TypeScript s'est relativement bien passé. Contrairement a ce que je pensais, c'est intuitif. J'ai du regarder sur internet comment typer certaines choses, mais dans l'ensemble, ça me parait correct. Avec un peu de pratique et d'entrainement, ça deviendra naturel, j'aime beaucoup le fait de typer fortement tout dans nos fichiers.
- Je me suis rendu compte que j'avais un timer, mais pas de progress bar. J'ai donc cherché le moyen le plus simple pour en implémenter une.
- Je vais pouvoir commencer a me pencher sur les tests. Histoire d'en avoir quelques uns de fonctionnels par composant
