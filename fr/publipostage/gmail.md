---
lang: fr
layout: blogpost
title: 'Comment faire un publipostage dans Gmail en 2021?'
description: Apprenez à réaliser un publipostage avec Gmail et Google Sheets. Ce guide vous donnera les clés pour vos envois groupés de mails personnalisés depuis Gmail.
cta_title: Essayer Mailmeteor, le meilleur outil de publipostage pour Gmail
cta_button: Démarrer un publipostage dans Gmail
canonical: https://mailmeteor.com/fr/publipostage/gmail
category: TUTORIAL

meta_author: Jean Dubrulle
meta_author_link: 'https://twitter.com/cuireuncroco'
meta_image: >-
  /assets/img/articles/fr/publipostage/gmail/publipostage-gmail-illustration.png

og_title: 'Comment faire un publipostage dans Gmail en 2021?'
og_description: Apprenez à réaliser un publipostage avec Gmail et Google Sheets. Ce guide vous donnera les clés pour vos envois groupés de mails personnalisés depuis Gmail.
og_url: https://mailmeteor.com/fr/publipostage/gmail
og_image: https://mailmeteor.com/assets/img/opengraph/publipostage-gmail.jpg

meta_date_published: '29 Oct, 2021'
#meta_date_lastupdated: 'April 12, 2021'
---

Il existe 2 façons de faire du [publipostage](/fr/publipostage) sur Gmail en 2021 : vous pouvez soit utiliser un module complémentaire de Google qui effectuera le travail pour vous, soit créer votre propre script de publipostage dans Gmail.

À travers ce guide, nous traiterons les deux méthodes, bien que nous vous recommandons fortement d’utiliser un logiciel prévu à cet effet. De manière générale, il est plus simple et plus sécurisé d’utiliser un module complémentaire plutôt que d’écrire un script pour effectuer un publipostage.

## Méthode 1: Comment faire un publipostage dans Gmail et Google Sheets avec Mailmeteor

Commençons par une démonstration qui illustre comment faire un publipostage depuis Gmail en utilisant un module complémentaire de Google Sheets. Dans cet exemple, nous utiliserons Mailmeteor, le module complémentaire de publipostage le mieux noté de Google.

### Voici comment faire un publipostage dans Gmail:

1. Installer Mailmeteor
2. Ajouter des contacts sur Google Sheets
3. Remplissez les colonnes avez les informations de vos destinataires
4. Ouvrir Mailmeteor
5. Rédiger un nouveau modèle d’email
6. Personnaliser les emails
7. Prévisualiser les emails avant de les envoyer
8. Envoyer le publipostage

### 1. Installer Mailmeteor

Commencez par [installer Mailmeteor depuis le Google Workplace Marketplace](https://workspace.google.com/marketplace/app/mailmeteor_mail_merge_for_gmail/1008170693301). Le Workplace Marketplace est une plateforme sur laquelle vous pouvez trouver toutes les applications compatibles avec la suite de productivité de Google.

Mailmeteor est disponible depuis 2018 sur cette plateforme. C'est un outil disponible en français qui s'intègre à Gmail et à Google Sheets pour envoyer des emails personnalisés en masse. Mailmeteor offre la possibilité de réaliser gratuitement des publipostages depuis Gmail.

[![Installation de Mailmeteor](/assets/img/articles/fr/publipostage/gmail/1-obtenir-mailmeteor.webp){:width="600px" height="338px"}](https://workspace.google.com/marketplace/app/mailmeteor_mail_merge_for_gmail/1008170693301)

### 2. Ajouter des contacts sur Google Sheets

Une fois que Mailmeteor est installé, [ouvrez une nouvelle feuille de calcul sur Google Sheets](https://sheets.new). Cette feuille de calcul sera l’endroit où vous pourrez stocker vos contacts et suivre les performances de votre campagne. Voici l’[exemple de feuille de calcul de publipostage](https://docs.google.com/spreadsheets/d/1_ttiunevPopItX4hm1kNGGy9xzPHjo8c_RuZQqX649k/edit#gid=641632421) que nous utiliserons à travers cette démonstration.

Une fois que vous avez ouvert une nouvelle feuille de calcul, assurez-vous ensuite d'y ajouter votre liste de destinataires. Vous obtenez alors une liste de diffusion à partir de laquelle Mailmeteor va expédier vos emails.

<div class="blogpost-note">
  <span class="font-weight-bold">Remarque:</span> vous pouvez soit rentrer vos destinataires manuellement, soit importer des contacts. Pour importer des contacts dans Google Sheets, allez dans <strong>Menu</strong> > <strong>Fichier</strong> > <strong>Importer</strong>. Sélectionnez ensuite votre fichier Excel ou votre fichier .csv.
</div>

{% raw %}
Sur la première ligne, ajoutez des en têtes à chaque colonne (par exemple "Prénom" ou "Adresse"). De cette façon, Mailmeteor vous propose de personaliser vos emails en extrayant les informations de votre feuille de calcul. Chaque colonne représente ainsi un champ personnalisé de votre email, ce qui vous permet d'écrire, par exemple, "Bonjour {{ prénom }}" dans votre email et de laisser Mailmeteor remplacer {{ prénom }} par le prénom du destinataire.
{% endraw %}

![Ajoutez des entêtes dans Google Sheets](/assets/img/articles/fr/publipostage/gmail/2-ajouter-entêtes-Google-Sheets.webp){:width="600px" height="338px"}

Dans notre exemple, nous avons 4 colonnes représentant 4 champs: prénom, email, entreprise, postscriptum. Cependant, vous pouvez ajouter autant de colonnes que nécessaires, et choisissez le nom d'en-tête que vous souhaitez. Assurez-vous simplement d’avoir une colonne nommée "email" dans laquelle vous insérez les adresses e-mails.

### 3. Remplissez les colonnes avec les informations de vos destinataires

![Remplissez les colonnes avec les informations de vos destinataires](/assets/img/articles/fr/publipostage/gmail/3-ajouter-informations-destinataires.webp){:width="600px" height="338px"}

Vous pouvez maintenant ajouter au classeur les données relatives à vos contacts. Assurez-vous que toutes les cellules de la colonne nommée « email » soient remplies avec une adresse électronique valide. Hormis les cellules d’emails, vous pouvez tout à fait laisser certaines cellules vides. Dans l’exemple ci-dessous, certains destinataires recevront un postscriptum tandis que d’autres n’en recevront pas.

### 4. Ouvrir Mailmeteor

Une fois que votre liste de destinataires est prête, ouvrez Mailmeteor. Pour ouvrir Mailmeteor, allez dans le menu de Google Sheets et sélectionnez **Modules complémentaires** > **Mailmetor** > **Open Mailmetor**.

![Ouvrir Mailmeteor](/assets/img/articles/fr/publipostage/gmail/4-ouvrir-mailmeteor.webp){:width="600px" height="338px"}

<div class="blogpost-note">
  <span class="font-weight-bold">Remarque:</span> la première fois que vous ouvrez Mailmeteor, un tutoriel d’accueil rapide vous est présenté. Une feuille de calcul de démonstration <a href="https://docs.google.com/spreadsheets/d/1_ttiunevPopItX4hm1kNGGy9xzPHjo8c_RuZQqX649k/edit#gid=641632421">comme celle-ci</a> sera alors automatiquement créée pour vous.
</div>

### 5. Rédiger un nouveau modèle d’email

Cliquez sur **Créer un nouveau modèle**. Cela ouvrira un éditeur dans lequel vous pourrez rédiger votre email. L'éditeur de Mailmeteor est exactement le même que celui de Gmail: vous y trouverez toutes les actions dont vous avez besoin pour personnaliser votre courriel.

![Rédiger un mail dans Mailmeteor](/assets/img/articles/fr/publipostage/gmail/6-rédiger-nouveau-modèle-email.webp){:width="600px" height="338px"}

Il est maintenant temps de personnaliser votre email. C’est une étape importante (bien qu'optionnelle) car elle permet à vos destinataires de se sentir uniques lorsqu'ils reçoivent vos emails. L'utilisation de la personnalisation améliorera aussi considérablement vos taux d'ouverture, et par conséquent vos taux de réponse.

### 6. Personnaliser les emails

Un publipostage permet de transformer un simple modèle d’email en une masse d’emails personnalisés. Cela est permis en utilisant des variables d'emails. Pour insérer une variable, c'est très simple. Encadrez chaque variable de doubles crochets comme ceci: {% raw %}{{ prénom }}{% endraw %}

Voici un modèle d’email avec des variables que vous pouvez copier-coller:

<div class="blogpost-endnote">
   <p>Bonjour {% raw %}{{ prénom }}{% endraw %},</p>
   <p>Je suis ravie que nous ayons pu nous rencontrer dernièrement. Comme indiqué, nous utilisons une toute nouvelle solution de publipostage appelée Mailmeteor.</p>
   <p>J'aimerais vous faire découvrir certaines de ses fonctionnalités afin que vous me donniez votre avis. Nous voulons nous assurer que Mailmeteor vous aidera réellement à optimiser vos campagnes d’emailing au sein de {% raw %}{{ entreprise }}{% endraw %}.</p>
   <p>Auriez-vous 10 à 15 minutes à me consacrer pour en discuter? (Je promets de respecter l'heure !). Si oui, faites-moi savoir l’horaire qui vous conviendrait le mieux.</p>
</div>

Lorsque vous ajoutez un champ variable à votre modèle d’email, assurez-vous qu'il correspond toujours à un en-tête de votre feuille de calcul Google Sheets.

Une fois que le modèle vous satisfait, cliquez sur le bouton **Enregistrer le modèle**.

### 7. Prévisualiser les emails avant de les envoyer

Mailmeteor propose une fonction de prévisualisation qui est très utile pour vérifier les emails avant de les envoyer. Le mode de prévisualisation vous donne un aperçu du rendu final de votre courriel une fois personnalisé pour chaque destinataire.

![Prévisualiser l'email avant l'envoi du publipostage dans Gmail](/assets/img/articles/fr/publipostage/gmail/7-prévisualiser-emails.webp){:width="600px" height="300px"}

Vous pouvez également vous auto-envoyer un email test. Il est d’ailleurs recommandé de tester vos emails sur plusieurs appareils. Cela vous permettra de vous assurer que vos emails s'affichent correctement en toute situation.

### 8. Envoyer le publipostage

Prêt à décoller? C’est le moment d'envoyer votre campagne de mail merge avec Gmail.

L'envoi de votre campagne de publipostage peut être assez intimidant au début. Mais ne vous inquiétez pas, si vous suivez ces étapes, tout se déroulera sans encombres!

![Envoyer le publipostage](/assets/img/articles/fr/publipostage/gmail/8-envoyer-publipostage.webp){:width="600px" height="300px"}

✨ Vous êtes maintenant prêts à effectuer un publipostage d'emails avec la messagerie de Google en utilisant un module complémentaire tel que Mailmeteor. ✨

## Méthode 2: Créer un publipostage dans Gmail avec Google Apps Scripts

Si vous des compétences en programmation et que vous préférez ne pas installer de logiciel tiers, alors il est possible de construire votre propre publipostage sur Gmail.

Nous allons ici utiliser Google Apps Script, qui permet de créer et de publier facilement des extensions Google. Le script présenté ici a été écrit par Martin Hawksey (@mhawksey). Vous trouverez le [code open-source](https://github.com/googleworkspace/solutions/blob/master/mail-merge/src/Code.js) du script hébergé sur GitHub.

Suivez les instructions ci-dessous pour comprendre comment faire un publipostage dans Gmail en utilisant Apps Script:

![Faire un publipostage sans module complémentaire grâce à AppScripts](/assets/img/articles/fr/publipostage/gmail/mail-merge-apps-script-exemple.gif){:width="600px" height="386px"}

1. **Créer une copie la feuille de calcul de publipostage.**

   Ouvrez [ce classeur de démonstration](https://docs.google.com/spreadsheets/d/1EfjLuYGab8Xt8wCn4IokBIG0_W4tBtiU4vxl3Y7FPsA/copy) et cliquez sur **Faire une copie** pour obtenir votre propre exemplaire.

2. **Mettre à jour la colonne "Recipient".**

   Remplacez la valeur des cellules de la colonne "Recipient" par les adresses électroniques que vous souhaitez utiliser pour le publipostage

3. **Ouvrir Gmail pour créer un nouveau brouillon d'email et utiliser des balises pour le personnaliser.**

   Dans Gmail, créer un nouveau brouillon d'email et composer votre email.

   Vous pouvez ajouter des variables personnalisées à votre email, telles que {% raw %}{{ prénom }}{% endraw %}, qui correspondent aux noms de colonnes de la feuille de calcul que vous venez de copier. Cela vous permet d'indiquer le texte que vous souhaitez voir remplacé par les données que vous avez rempli dans la feuille de calcul copiée ([en savoir plus](#6-personnaliser-les-emails)).

4. **De retour dans la feuille de calcul, allez dans le menu et cliquez sur "Mail Merge", puis sur "Send Emails".**

   Cet élément du menu a été créé par Google Apps Script et va permettre de lancer le processus de publipostage.

   Une boîte de dialogue apparaît pour demander une autorisation. Lire l'avis d'autorisation et continuer. Lorsque vous y êtes invité, entrez ou copiez-collez la ligne d'objet utilisée dans votre brouillon de courriel Gmail. Cliquez ensuite sur **OK**.

5. **Envoyer les emails.**

   Une fois vos emails envoyés, vous verrez la colonne **Email Sent** se mettre à jour avec le statut d’envoi du message. De retour dans Gmail, vérifiez votre dossier "Messages envoyés". Vous pourrez y consulter les emails que le programme vient d’envoyer pour vous.

<div class="blogpost-note">
  <span class="font-weight-bold">Remarque importante:</span> le script utilisé dans cette démonstration a été créé et publié par les équipes de Google Apps Script. Vous pouvez également utiliser un script de publipostage écrit par les équipes de Mailmeteor. Soyez néanmoins prudents lorsque vous utilisez des scripts.
</div>

Gardez à l’esprit que l’utilisation d’un script se fait à vos propres risques. N’oubliez pas de consulter la limite d’envoi de Gmail avant d’envoyer de gros volumes d’emails. Sachez que votre compte peut être bloqué si votre activité d’envoi de courriels semble inhabituelle aux yeux des filtres anti-spam.

Pour ces raisons, nous vous recommandons d’utiliser une solution de publipostage telle que [Mailmeteor](/fr/). Mailmeteor couvre tous ces aspects et veille à ce que votre vie privée soit protégée.

## Top 5 des meilleures solutions de publipostage pour Gmail en 2021

Quels sont les [meilleurs modules complémentaires pour envoyer un publipostage dans Gmail](/best-google-apps/mail-merge-gmail)? Nous vous en avons sélectionné 5 parmis les meilleures solutions de publipostage de Google. Ils sont ci-dessous classés en fonction de leur note moyenne sur 5.

<table class="table">
   <thead>
      <tr>
         <th>Top outils de publipostage</th>
         <th>Note</th>
         <th>Prix / an</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td class="font-weight-bold">1. <a href="https://workspace.google.com/marketplace/app/mailmeteor_mail_merge_for_gmail/1008170693301" rel="nofollow noreferrer">Mailmeteor</a></td>
         <td>4.9/5</td>
         <td><a href="/pricing">€49</a></td>
      </tr>
      <tr>
         <td class="font-weight-bold">2. Gmass</td>
         <td>4.7/5</td>
         <td>€129</td>
      </tr>
      <tr>
         <td class="font-weight-bold">3. Yet Another Mail Merge (YAMM)</td>
         <td>4.8/5</td>
         <td>€48</td>
      </tr>
      <tr>
         <td class="font-weight-bold">4. Mail Merge</td>
         <td>4.4/5</td>
         <td>€39</td>
      </tr>
      <tr>
         <td class="font-weight-bold">5. Mail Merge with Attachments</td>
         <td>4.3/5</td>
         <td>€39</td>
      </tr>
   </tbody>
</table>

## Les autres types de publipostage pour Gmail

Outre la fusion de courrier dans Gmail avec Google Sheets, vous pouvez aussi réaliser d'autres publipostages en masse à partir d'[Excel](#faire-un-publipostage-dans-gmail-depuis-un-ficher-excel), [Outlook](#faire-un-publipostage-dans-gmail-avec-outlook), [Word](#faire-un-publipostage-dans-gmail-avec-word) ou [Google Docs](#faire-un-publipostage-dans-gmail-avec-google-docs). Lisez la suite pour en savoir plus.

### Faire un publipostage dans Gmail depuis un ficher Excel

![Faire un publipostage dans Gmail avec Excel](/assets/img/articles/fr/publipostage/gmail/publipostage-gmail-excel.webp){:width="600px" height="300px"}

Pour faire un publipostage sur Gmail en utilisant Excel, le processus est simple :

1. Importez votre fichier Excel sur Google Drive
2. Ouvrez votre fichier importé
3. Votre document Excel sera converti en une feuille de calcul Google Sheets
4. Ouvrez votre module complémentaire de publipostage préféré

Voici un guide complet de Google expliquant [comment importer votre fichier Excel dans Google Sheets](https://support.google.com/docs/answer/9331167?hl=fr).

### Faire un publipostage dans Gmail avec Outlook

![Faire un publipostage dans Gmail avec Outlook](/assets/img/articles/fr/publipostage/gmail/publipostage-gmail-outlook.webp){:width="600px" height="300px"}

Vous êtes récemment passé de Microsoft Outlook à Gmail et c'est la première fois que vous devez faire un envoi d’emails en masse sous Gmail? Il existe deux solutions dans ce cas:

Remplacez votre méthode de publipostage dans Outlook par un add-on Google comme [Mailmeteor](https://workspace.google.com/marketplace/app/mailmeteor_mail_merge_for_gmail/1008170693301), qui fera exactement le même travail de fusion de courrier qu'Outlook.
Vous pouvez envoyer des courriels à partir de votre compte Outlook en utilisant un alias d’adresse email. Un alias de messagerie est un autre compte de messagerie que vous possédez. Avec un alias d’email, vous pouvez envoyer des messages électroniques à partir de votre ancienne adresse Outlook tout en étant connecté à Google avec votre compte Gmail.

Si vous souhaitez effectuer un publipostage Outlook avec pièce jointe, vous pouvez utiliser une solution de mail merge telle que Mailmeteor. Pour en savoir plus, vous pouvez consulter [le guide de publipostage dans Gmail avec pièce jointe](#bonus-faire-un-publipostage-dans-gmail-avec-pièce-jointe). Les instructions sont les mêmes pour effectuer un publipostage dans Outlook en joignant des fichiers.

### Faire un publipostage dans Gmail avec Word

![Faire un publipostage dans Gmail avec Word](/assets/img/articles/fr/publipostage/gmail/publipostage-gmail-word.webp){:width="600px" height="300px"}

Pour faire du publipostage d’emails dans Gmail en utilisant Word, vous pouvez tout simplement rédiger votre email dans Microsoft Word et, une fois qu'il est prêt, le copier/coller dans l'éditeur Mailmeteor pour envoyer votre fusion d'emails de Word à Gmail!

### Faire un publipostage dans Gmail avec Google Docs

![Faire un publipostage dans Gmail avec Google Docs](/assets/img/articles/fr/publipostage/gmail/publipostage-gmail-google-docs.webp){:width="600px" height="300px"}

Vous pouvez également utiliser Google Docs pour expédier des emails. De façon analogue à Word, rédigez votre email dans Google Docs et une fois qu'il est prêt, ouvrez Mailmeteor depuis votre liste de diffusion dans Google Sheets, puis copiez/collez le contenu de votre Google Docs dans l'éditeur de Mailmeteor.

À ce sujet, notez que vous pouvez également fusionner des documents dans Google Docs. Cela vous permettra de créer un lot de documents personnalisés pour chaque destinataire. Par exemple, vous pouvez réaliser une lettre personnalisée dans laquelle chaque destinataire est appelé par son nom, ou automatiser la création de factures grâce à Google Docs. Pour en savoir plus, suivez [notre guide à ce sujet](/fr/publipostage/#comment-faire-un-publipostage-à-partir-de-google-docs).

## Bonus: Faire un publipostage dans Gmail avec pièce jointe

![Faire un publipostage dans Gmail avec pièces jointes](/assets/img/articles/fr/publipostage/gmail/publipostage-gmail-pieces-jointes.webp){:width="600px" height="300px"}

Vous vous demandez si vous pouvez ajouter une pièce jointe lorsque vous réalisez un publipostage d’emails dans Gmail? Oui, c'est possible!

La plupart des solutions de publipostage vous permettent en effet de joindre des fichiers et des documents à votre courrier électronique. C'est un moyen pratique de diffuser des documents tels que des factures, des brochures ou des invitations à des événements.

Voici les étapes à suivre pour ajouter des pièces jointes à votre publipostage Gmail:

1. **Installez un module complémentaire de publipostage**

   Pour faire une fusion de courrier avec des pièces jointes dans Gmail, vous devez installer un outil de publipostage comme [Mailmeteor](https://workspace.google.com/marketplace/app/mailmeteor_mail_merge_for_gmail/1008170693301) qui vous permet d'ajouter la même pièce jointe pour des courriels adressés à tous les destinataires.

2. **Ouvrez Mailmeteor à partir de Google Sheets**

   Allez dans Google Sheets, et ouvrez Mailmeteor dans le menu **Modules complémentaires**.

3. **Rédigez votre email**

   Composez votre e-mail dans la fenêtre de saisie de Mailmeteor. Sachez que vous pouvez personnaliser vos emails pour que vos destinataires se sentent uniques.

4. **Ajoutez une ou plusieurs pièces jointes à vos emails**

   Une fois l'email rédigé, il vous suffit de cliquer sur l'icône de pièce jointe (en forme de trombone) et de faire glisser le ou les fichiers de votre choix dans la boîte bleue, ou de cliquer sur le bouton **Choisir les fichiers**.

5. **Prévisualisez vos emails**

   Une fois le fichier téléchargé, vous pouvez consulter les emails que vous allez envoyer avec la fonction de prévisualisation de Mailmeteor et bingo! Vos emails et vos pièces jointes sont prêts à être expédiés.

6. **Envoyez votre publipostage avec les pièces jointes**

   Nous y sommes! Cliquez sur **Envoyer** et le tour est joué.

<div class="blogpost-note">
  <p><span class="font-weight-bold">Envoyer un PDF en publipostage: </span> En suivant la méthode expliquée ci-dessus, vous pouvez joindre un PDF à une fusion de courrier et bien d'autres types de fichiers:
      <ul>
         <li>Documents PDF</li>
         <li>Images et courtes vidéos</li>
         <li>Documents Word</li>
         <li>Documents Excel</li>
         <li>Présentations PowerPoint</li>
         <li>Fichiers texte</li>
         <li>Archives</li>
      </ul>
   </p>
</div>

### Prêt pour le décollage?

Notre guide du publipostage pour Gmail en 2021 est maintenant terminé! Nous espérons que vous comprenez maintenant mieux cet outil à la fois simple et incroyablement puissant qu'est le mail merge avec Gmail. A votre tour de jouer ;-)

<div class="blogpost-endnote">
  <p>Ce guide a été rédigé par Jean Dubrulle, fondateur de <a href="https://mailmeteor.com/fr/"> Mailmeteor</a>. Mailmeteor est un logiciel d'emailing simple et fondé sur la confidentialité de vos données. Reconnu par des millions d'utilisateurs dans le monde, Mailmeteor est souvent considéré comme le <a href="https://mailmeteor.com/fr/">meilleur publipostage Gmail</a> pour envoyer des e-mails personnalisés en masse. Essayez Mailmeteor et dites-nous ce que vous en pensez!</p>

  <p>➤ <a href="https://mailmeteor.com/fr/" class="font-weight-bold">Envoyer des emails avec Mailmeteor</a></p>
</div>

<small class="blogpost-related-articles">
   En apprendre plus sur le publipostage:
   <a href="/fr/publipostage/">Publipostage: le Guide Complet en 2021</a>
</small>
