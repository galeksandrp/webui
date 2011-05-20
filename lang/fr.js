/*
Copyright (c) 2011 BitTorrent, Inc. All rights reserved.

Use of this source code is governed by a BSD-style that can be
found in the LICENSE file.
*/

var LANG_STR = [
	  "Fichiers torrent||*.torrent||Tous (*.*)||*.*||"
	, "OK"
	, "Annuler"
	, "Appliquer"
	, "Oui"
	, "Non"
	, "Fermer"
	, "Préférences"
	, "Traduction"
	, "Langue:"
	, "Privé"
	, "Vérification des mises à jour disponibles"
	, "Mise à jour par des versions \"Bêta\""
	, "Envoyer des informations anonymes lors de la vérification des mises à jour"
	, "Téléchargement"
	, "Apposer .!ut aux fichiers incomplets"
	, "Pré-allouer tous les fichiers"
	, "Empêcher la mise en veille de l'ordinateur"
	, "Options d'affichage"
	, "Avertir pour annuler les torrents"
	, "Avertir pour annuler les Trackers"
	, "Avertir pour quitter µTorrent"
	, "Couleurs de fond de liste alternées"
	, "Taux dans la barre de titre"
	, "Limites des taux dans la barre d'état"
	, "Ajout des Torrents"
	, "Ne pas télécharger automatiquement"
	, "Activer la fenêtre du programme"
	, "Afficher une fenêtre montrant les fichiers présents au sein du torrent"
	, "Actions pour le double clic"
	, "Torrents partagés :"
	, "Torrents téléchargés :"
	, "Destination des fichiers téléchargés"
	, "Dossier de réception"
	, "Afficher la fenêtre de dialogue"
	, "Complets, déplacer les fichiers vers:"
	, "Apposer une étiquette"
	, "Déplacer seulement à partir du dossier par défaut"
	, "Destination des .torrents"
	, "Sauvegarder les .torrents dans:"
	, "Déplacer les .torrents des téléchargements terminés vers:"
	, "Charger automatiquement depuis:"
	, "Supprimer les .torrents chargés"
	, "Port d'écoute"
	, "Port utilisé pour les connexions entrantes:"
	, "Port aléatoire"
	, "Port aléatoire à chaque démarrage"
	, "Activer le mappage de port UPnP"
	, "Activer le mappage de port NAT-PMP"
	, "Serveur Proxy"
	, "Type:"
	, "Proxy:"
	, "Port:"
	, "Authentification"
	, "Identifiant:"
	, "M. passe:"
	, "Résoudre les noms d'hôtes par Proxy"
	, "Utiliser un serveur proxy pour les connexions clients-à-clients"
	, "Ajout aux exceptions du Pare-feu"
	, "Proxy Privacy"
	, "Disable all local DNS lookups"
	, "Disable features that leak identifying information"
	, "Disable connections unsupported by the proxy"
	, "Limitation globale du taux d'émission"
	, "Taux max. en émission (ko/s): [0: illimité]"
	, "Automatique"
	, "Taux d'émission alternatif sans téléchargement (ko/s):"
	, "Limitation globale du taux de réception"
	, "Taux max. en réception (ko/s): [0: illimité]"
	, "Nombre de connexions"
	, "Nombre global et maximum de connexions:"
	, "Nombre maximum de clients connectés par torrent:"
	, "Nombre de slots d'émission par torrent:"
	, "Ajouter des slots d'émission lorsque le taux d'émission < 90%"
	, "Global Rate Limit Options"
	, "Appliquer la limite du taux au surcoût de transport"
	, "Appliquer la limite du taux aux connexions uTP"
	, "Fonctions BitTorrent basiques"
	, "Activer le support réseau des DHT"
	, "Infos de Scrape par le Tracker"
	, "Activer DHT pour les nouv. torrents"
	, "Activer l'échange de clients"
	, "Activer la recherche locale de clients"
	, "Limiter la bande passante locale"
	, "IP/Nom d'hôte à rapporter au Tracker:"
	, "Protocole d'encryptage"
	, "Sortant:"
	, "Connexions entrantes héritées"
	, "Activer gestion bande passante [uTP]"
	, "Activer le support de Tracker UDP"
	, "Activer le plafonnement"
	, "Paramètres du plafonnement"
	, "Limit Type:"
	, "Bandwidth Cap:"
	, "Time Period (days):"
	, "Historique pour la période sélectionnée"
	, "Émis :"
	, "Reçu :"
	, "Émis + Reçu :"
	, "Période :"
	, "Dernier(s) %d jour(s)"
	, "Réinitialiser"
	, "Options de file d'attente"
	, "Nombre maximum de torrents actifs (émission et réception):"
	, "Nombre maximum de téléchargements actifs:"
	, "Paramètres de partage [Valeurs par défaut]"
	, "Minimum ratio (%):"
	, "Minimum seeding time (minutes):"
	, "Donner la priorité aux tâches de partage"
	, "Définition des limites de partage"
	, "Limiter l'émission à (ko/s): [0: stop]"
	, "Activer le planificateur"
	, "Tableau du planificateur"
	, "Paramètres du planificateur"
	, "Taux d'émission limité (ko/s):"
	, "Taux de réception limité (ko/s):"
	, "Désactiver les DHT à l'arrêt"
	, "Activer le plugin WebUI"
	, "Authentification"
	, "Identifiant:"
	, "M. passe:"
	, "Activer le compte invité avec pour identifiant:"
	, "Connectivité"
	, "Port d'écoute alternatif [Port de connexion par défaut]:"
,"Limiter l'accès à ces adresses IP (séparer les différentes entrées par une virgule) :"
	, "Options avancées [ATTENTION: modifications déconseillées]"
	, "Valeur:"
	, "Oui"
	, "Non"
	, "Modifier"
	, "Définition de la liste des taux [Séparez les multiples valeurs par une virgule]"
	, "Appliquer la liste des taux ci-dessous"
	, "Taux d'émission :"
	, "Taux de réception :"
	, "Étiquettes permanentes [Séparez les multiples étiquettes avec le caractère | ]"
	, "Moteurs de recherche [Format: nom|url]"
	, "Paramètres basics du cache"
	, "Le cache disque est nécessaire pour accéder fréquemment aux données en mémoire afin de réduire le nombre de lectures et d'écritures sur le disque dur. Vous pouvez modifier son comportement en modifiant les quelques paramètres ci-dessous."
	, "Définir manuellement la taille du cache (Mo):"
	, "Réduire l'usage de la mémoire lorsque le cache n'est pas nécessaire"
	, "Paramètres avancés du cache"
	, "Activer le cache disque en écriture"
	, "Écriture des blocs intacts toutes les 2 minutes"
	, "Écriture immédiate des pièces terminées"
	, "Activer le cache disque en lecture"
	, "Désactiver le cache en lecture si le taux d'émission est faible"
	, "Supprimer les anciens blocs du cache"
	, "Augmenter automatiquement la taille du cache si celui-ci devient insuffisant"
	, "Désactiver le cache disque Windows en écriture"
	, "Désactiver le cache disque Windows en lecture"
	, "Run Program"
	, "Run this program when a torrent finishes:"
	, "Run this program when a torrent changes state:"
	, "You can use these commands:\r\n%F - Name of downloaded file (for single file torrents)\r\n%D - Directory where files are saved\r\n%N - Title of torrent\r\n%S - State of torrent\r\n%L - Label\r\n%T - Tracker\r\n%M - Status message string (same as status column)\r\n%I - hex encoded info-hash\r\n\r\nState is a combination of:\r\nstarted = 1, checking = 2, start-after-check = 4,\r\nchecked = 8, error = 16, paused = 32, auto = 64, loaded = 128"
	, "Propriétés du torrent"
	, "Trackers (... chacun séparé par une ligne vierge)"
	, "Paramètres de la bande passante"
	, "Taux maximum en émission (ko/s): [0: défaut]"
	, "Taux maximum en réception (ko/s): [0: défaut]"
	, "Nombre de slots d'émission: [0: défaut]"
	, "Paramètres de partage"
	, "Modifier les paramètres"
	, "Minimum ratio (%):"
	, "Minimum seeding time (minutes):"
	, "Autres options"
	, "Premier partage"
	, "Activer les DHT"
	, "Échange de clients"
	, "Fil"
	, "URL du fil :"
	, "Alias customisé :"
	, "Abonnement"
	, "Ne pas télécharger les articles automatiquement"
	, "Télécharger automatiquement les articles publiés dans le fil"
	, "Utiliser le filtre intelligent"
	, "Flux||Favoris||Historique||"
	, "All Feeds"
	, "Paramètres du filtre"
	, "Nom :"
	, "Filtre :"
	, "Sauf :"
	, "Enrg. :"
	, "Fil :"
	, "Qualité :"
	, "Nombre d'épisodes : [ex. 1x12-14]"
	, "Associer le filtre au nom original au lieu du nom décodé"
	, "Ne pas démarrer le téléchargement automatiquement"
	, "Filtre intelligent"
	, "Téléchargement en haute priorité"
	, "Intervalle minimum :"
	, "Étiquette des nvx. torrents :"
	, "Ajouter un fil RSS..."
	, "Éditer le fil"
	, "Désactiver le fil"
	, "Activer le fil"
	, "Mise à jour du fil"
	, "Supprimer le fil"
	, "Téléchargement"
	, "Ouvrir l'URL dans le navigateur"
	, "Ajouter aux favoris"
	, "Ajouter"
	, "Supprimer"
	, "TOUS"
	, "(Tous)"
	, "Permanent||Unique||12 heures||1 jour||2 jours||3 jours||4 jours||1 semaine||2 semaines||3 semaines||1 mois||"
	, "Ajout d'un fil RSS"
	, "Éditer le fil RSS"
	, "Remove RSS Feed(s)"
	, "Really delete the %d selected RSS Feeds?"
	, "Souhaitez-vous vraiment supprimer le fil RSS \"%s\" ?"
	, "Nom complet"
	, "Nom"
	, "Épisode"
	, "Format"
	, "Codec"
	, "Date"
	, "Fil"
	, "URL source"
	, "IP"
	, "Port"
	, "Logiciel client"
	, "Statut"
	, "%"
	, "Pertinence"
	, "Réception"
	, "Émission"
	, "Requêtes"
	, "Temps"
	, "Partagé"
	, "Reçu"
	, "Erreur Hash"
	, "R. Client"
	, "Limite E."
	, "Limite R."
	, "Attente"
	, "Inactif"
	, "Reçu"
	, "Première pièce"
	, "Nom"
	, "# de pièces"
	, "%"
	, "Priorité"
	, "Taille"
	, "ignoré"
	, "basse"
	, "normale"
	, "haute"
	, "Reçu:"
	, "Partagé:"
	, "Sources:"
	, "Temps estimé:"
	, "Réception:"
	, "Émission:"
	, "Clients:"
	, "Ratio:"
	, "Dossier :"
	, "Hash:"
	, "Général"
	, "Transfert"
	, "%d de %d connectés (%d visibles)"
	, "Reçu: %s Émis: %s - %s"
	, "Copier"
	, "Réinitialiser"
	, "Illimité"
	, "Résoudre IPs"
	, "Get File(s)"
	, "Ne pas télécharger"
	, "Priorité Haute"
	, "Priorité Basse"
	, "Priorité Normale"
	, "Copier l'URI magnétique"
	, "Supprimer fichiers"
	, "Supprimer .torrent"
	, "Supprimer .torrent et fichiers"
	, "Vérification forcée"
	, "Démarrage forcé"
	, "Étiquette"
	, "Suspendre"
	, "Propriétés"
	, "Déplacer vers le bas de la file d'attente"
	, "Déplacer vers le haut de la file d'attente"
	, "Annuler"
	, "Annuler et..."
	, "Démarrer"
	, "Arrêter"
	, "Actif"
	, "Tous"
	, "Terminé"
	, "En cours"
	, "Inactif"
	, "Sans étiquette"
	, "||Disponibilité||Disponibilité"
	, "Ajouté le..."
	, "Terminé le..."
	, "%"
	, "Reçu"
	, "Réception"
	, "Estimé"
	, "Étiquette"
	, "Nom"
	, "#"
	, "Clients"
	, "Restant"
	, "Sources"
	, "Sources/Clients"
	, "Ratio"
	, "Taille"
	, "URL source"
	, "Statut"
	, "Partagé"
	, "Émission"
	, "Souhaitez-vous vraiment annuler les %d torrents sélectionnés et supprimer toutes les données associées ?"
	, "Souhaitez-vous vraiment annuler le torrent sélectionné et supprimer toutes les données associées ?"
	, "Souhaitez-vous vraiment annuler les %d torrents sélectionnés ?"
	, "Souhaitez-vous vraiment annuler le torrent sélectionné ?"
	, "Souhaitez-vous vraiment supprimer le filtre RSS \"%s\" ?"
	, "Vérifié %:.1d%%"
	, "Téléchargement"
	, "Erreur: %s"
	, "Terminé"
	, "Suspendu"
	, "En attente"
	, "Partage en attente"
	, "Partage"
	, "Arrêté"
	, "Création d'une nouvelle étiquette"
	, "Entrez l'étiquette pour les torrents sélectionnés:"
	, "Nouvelle étiquette..."
	, "Supprimer l'étiquette"
	, "Général||Trackers||Clients||Pièces||Fichiers||Graphiques||Journal||"
	, "Ajouter un torrent"
	, "Ajouter un torrent par URL"
	, "Suspendre"
	, "Préférences"
	, "Déplacer vers le bas de la file d'attente"
	, "Déplacer vers le haut de la file d'attente"
	, "Annuler"
	, "Gestionnaire RSS"
	, "Démarrer"
	, "Arrêter"
	, "Fichier"
	, "Ajouter un torrent..."
	, "Ajouter un torrent par URL..."
	, "Options"
	, "Préférences"
	, "Afficher la liste des catégories"
	, "Afficher les informations détaillées"
	, "Afficher la barre d'état"
	, "Afficher la barre d'outils"
	, "Afficher les icônes sur les onglets"
	, "?"
	, "Site web de µTorrent"
	, "Forums de µTorrent"
	, "Send WebUI Feedback"
	, "About µTorrent WebUI"
	, "Torrents"
	, "Suspendre tous les torrents"
	, "Reprendre tous les torrents"
	, "D: %s%z/s"
	, " L: %z/s"
	, " O: %z/s"
	, " T: %Z"
	, "U: %s%z/s"
	, "o"
	, "Eo"
	, "Go"
	, "ko"
	, "Mo"
	, "Po"
	, "To"
	, "Avancées"
	, "Bande passante"
	, "Connexion"
	, "Cache disque"
	, "Dossiers"
	, "Générales"
	, "Planificateur"
	, "File d'attente"
	, "Extras"
	, "Interface"
	, "BitTorrent"
	, "Plugin WebUI"
	, "Plafond de transfert"
	, "Run Program"
	, "Afficher les propriétés||Démarrer / Arrêter||Ouvrir le dossier||Afficher la barre de téléchargement||"
	, "Désactivé||Activé||Forcé||"
	, "(aucun)||Socks4||Socks5||HTTPS||HTTP||"
	, "Émissions||Réceptions||Émissions + Réceptions||"
	, "Mo||Go||"
	, "1||2||5||7||10||14||15||20||21||28||30||31||"
	, "Nom"
	, "Valeur"
	, "Lun||Mar||Mer||Jeu||Ven||Sam||Dim||"
	, "Lundi||Mardi||Mercredi||Jeudi||Vendredi||Samedi||Dimanche||"
	, "Illimité"
	, "Illimité - Utilise pleinement la bande passante spécifiée par le planificateur"
	, "Limité"
	, "Limité - Utilise les limitations de bande passante spécifiées par le planificateur"
	, "Partage seulement"
	, "Partage seulement - Uniquement en partage de données (inclus les torrents incomplets)"
	, "Arrêté"
	, "Arrêté - Arrêt de tous les torrents si ceux-ci ne sont pas en mode forcé"
	, "<= %d heures"
	, "(Ignoré)"
	, "<= %d minutes"
	, "%dj %dh"
	, "%dh %dm"
	, "%dm %ds"
	, "%ds"
	, "%dsem %dj"
	, "%dan %dsem",
"Torrents",
		"Flux",
		"App",
		"pays",
		'HEURE DE FIN PRÉVUE', // i.e. how much time remaining
		"sur", // i.e. 3 of 4 peers
		"/s", // "per second""
		"Collez un torrent ou une URL de flux",
		"Accueil",
		"Déconnexion",
		"Partage",
		"Tous les flux",
		"débit",
		"résolution",
		"durée",
		"accessible en flux continu",
		"type", // i.e. file extension
		"distant", // i.e. uTorrent remote
		"à propos de",
		"sessions",
		"partager",
		"partager ce torrent",
		"partager le lien",
		"ajouter",
		"se déconnecter",
		"se connecter",
		"accès universel",
		"rester connecté(e)",
		"télécharger",
		"Votre client n'est pas disponible pour le moment. Vérifiez qu'il est bien connecté à Internet.",
		"Impossible de communiquer avec votre client &micro;Torrent. Ce message disparaîtra automatiquement lorsque la connexion sera rétablie.",
		"Ouvrir le fichier",
		"Télécharger sur votre ordinateur",
		"Ouvrir avec le lecteur multimédia VLC",
		"Actions",
		"saison" // i.e. of a TV show
];
