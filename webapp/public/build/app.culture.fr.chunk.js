/*! Copyright ©2013-2016 Memba® Sarl. All rights reserved. - Version 0.2.40 dated 9/15/2016 */
/*! Copyright ©2013-2016 Memba® Sarl. All rights reserved. - Version 0.2.40 dated 9/15/2016 */
webpackJsonp([2],{199:function(e,t,o){var i,r,s;!function(n,a){"use strict";r=[o(200),o(201),o(202)],i=n,s="function"==typeof i?i.apply(t,r):i,!(void 0!==s&&(e.exports=s))}(function(){"use strict";return function(){var e=window.app=window.app||{};e.cultures=e.cultures||{},e.cultures.fr=o(203),window.kendo.culture("fr-FR")}(),window.app},o(187))},200:function(e,t,o){var i,r,s;!function(n){r=[o(195)],i=n,s="function"==typeof i?i.apply(t,r):i,!(void 0!==s&&(e.exports=s))}(function(){!function(e,t){kendo.cultures["fr-FR"]={name:"fr-FR",numberFormat:{pattern:["-n"],decimals:2,",":" ",".":",",groupSize:[3],percent:{pattern:["-n %","n %"],decimals:2,",":" ",".":",",groupSize:[3],symbol:"%"},currency:{name:"Euro",abbr:"EUR",pattern:["-n $","n $"],decimals:2,",":" ",".":",",groupSize:[3],symbol:"€"}},calendars:{standard:{days:{names:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],namesAbbr:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],namesShort:["di","lu","ma","me","je","ve","sa"]},months:{names:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],namesAbbr:["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."]},AM:[""],PM:[""],patterns:{d:"dd/MM/yyyy",D:"dddd d MMMM yyyy",F:"dddd d MMMM yyyy HH:mm:ss",g:"dd/MM/yyyy HH:mm",G:"dd/MM/yyyy HH:mm:ss",m:"d MMMM",M:"d MMMM",s:"yyyy'-'MM'-'dd'T'HH':'mm':'ss",t:"HH:mm",T:"HH:mm:ss",u:"yyyy'-'MM'-'dd HH':'mm':'ss'Z'",y:"MMMM yyyy",Y:"MMMM yyyy"},"/":"/",":":":",firstDay:1}}}}(this)})},201:function(e,t,o){var i,r,s;!function(n){r=[o(195)],i=n,s="function"==typeof i?i.apply(t,r):i,!(void 0!==s&&(e.exports=s))}(function(){!function(e,t){kendo.ui.FilterCell&&(kendo.ui.FilterCell.prototype.options.operators=e.extend(!0,kendo.ui.FilterCell.prototype.options.operators,{date:{eq:"Est égal à",gte:"Est postérieur ou égal à",gt:"Est postérieur",lte:"Est antérieur ou égal à",lt:"Est antérieur",neq:"N’est pas égal à",isnull:"Est nulle",isnotnull:"N’est pas nulle"},number:{eq:"Est égal à",gte:"Est supérieur ou égal à",gt:"Est supérieur à",lte:"Est inférieur ou égal à",lt:"Est inférieur à",neq:"N’est pas égal à",isnull:"Est nulle",isnotnull:"N’est pas nulle"},string:{endswith:"Se termine par",eq:"Est égal à",neq:"N’est pas égal à",startswith:"Commence par",contains:"Contient",doesnotcontain:"Ne contient pas",isnull:"Est nulle",isnotnull:"N’est pas nulle",isempty:"Est vide",isnotempty:"N’est pas vide"},enums:{eq:"Est égal à",neq:"N’est pas égal à",isnull:"Est nulle",isnotnull:"N’est pas nulle"}})),kendo.ui.FilterMenu&&(kendo.ui.FilterMenu.prototype.options.operators=e.extend(!0,kendo.ui.FilterMenu.prototype.options.operators,{date:{eq:"Est égal à",gte:"Est postérieur ou égal à",gt:"Est postérieur",lte:"Est antérieur ou égal à",lt:"Est antérieur",neq:"N’est pas égal à",isnull:"Est nulle",isnotnull:"N’est pas nulle"},number:{eq:"Est égal à",gte:"Est supérieur ou égal à",gt:"Est supérieur à",lte:"Est inférieur ou égal à",lt:"Est inférieur à",neq:"N’est pas égal à",isnull:"Est nulle",isnotnull:"N’est pas nulle"},string:{endswith:"Se termine par",eq:"Est égal à",neq:"N’est pas égal à",startswith:"Commence par",contains:"Contient",doesnotcontain:"Ne contient pas",isnull:"Est nulle",isnotnull:"N’est pas nulle",isempty:"Est vide",isnotempty:"N’est pas vide"},enums:{eq:"Est égal à",neq:"N’est pas égal à",isnull:"Est nulle",isnotnull:"N’est pas nulle"}})),kendo.ui.ColumnMenu&&(kendo.ui.ColumnMenu.prototype.options.messages=e.extend(!0,kendo.ui.ColumnMenu.prototype.options.messages,{columns:"Colonnes",sortAscending:"Tri croissant",sortDescending:"Tri décroissant",settings:"Paramètres de colonne",done:"Fini",lock:"Bloquer",unlock:"Ouvrir"})),kendo.ui.RecurrenceEditor&&(kendo.ui.RecurrenceEditor.prototype.options.messages=e.extend(!0,kendo.ui.RecurrenceEditor.prototype.options.messages,{daily:{interval:"jour(s)",repeatEvery:"Répéter chaque:"},end:{after:" Après",occurrence:"occurrence(s)",label:"Finir:",never:"Jamais",on:"Sur",mobileLabel:"Ends"},frequencies:{daily:"Une fois par jour",monthly:"Une fois par mois",never:"Jamais",weekly:"Une fois par semaine",yearly:"Une fois par an"},monthly:{day:"Jour",interval:"mois",repeatEvery:"Répéter chaque:",repeatOn:"Répéter l'opération sur:"},offsetPositions:{first:"premier",fourth:"quatrième",last:"dernier",second:"second",third:"troisième"},weekly:{repeatEvery:"Répéter chaque:",repeatOn:"Répéter l'opération sur:",interval:"semaine(s)"},yearly:{of:"de",repeatEvery:"Répéter chaque:",repeatOn:"Répéter l'opération sur:",interval:"année(ans)"},weekdays:{day:"jour",weekday:"jour de la semaine",weekend:"jour de week-end"}})),kendo.ui.Grid&&(kendo.ui.Grid.prototype.options.messages=e.extend(!0,kendo.ui.Grid.prototype.options.messages,{commands:{create:"Insérer",destroy:"Effacer",canceledit:"Annuler",update:"Mettre à jour",edit:"Éditer",excel:"Export to Excel",pdf:"Export to PDF",select:"Sélectionner",cancel:"Annuler les modifications",save:"Enregistrer les modifications"},editable:{confirmation:"Êtes-vous sûr de vouloir supprimer cet enregistrement?",cancelDelete:"Annuler",confirmDelete:"Effacer"},noRecords:"Aucun enregistrement disponible."})),kendo.ui.Pager&&(kendo.ui.Pager.prototype.options.messages=e.extend(!0,kendo.ui.Pager.prototype.options.messages,{allPages:"Tous",page:"Page",display:"Afficher les items {0} - {1} de {2}",of:"de {0}",empty:"Aucun enregistrement à afficher.",refresh:"Actualiser",first:"Aller à la première page",itemsPerPage:"articles par page",last:"Aller à la dernière page",next:"Aller à la page suivante",previous:"Aller à la page précédente",morePages:"Plusieurs pages"})),kendo.ui.FilterCell&&(kendo.ui.FilterCell.prototype.options.messages=e.extend(!0,kendo.ui.FilterCell.prototype.options.messages,{filter:"Filtrer",clear:"Effacer filtre",isFalse:"est fausse",isTrue:"est vrai",operator:"Opérateur"})),kendo.ui.FilterMenu&&(kendo.ui.FilterMenu.prototype.options.messages=e.extend(!0,kendo.ui.FilterMenu.prototype.options.messages,{filter:"Filtrer",and:"Et",clear:"Effacer filtre",info:"Afficher les lignes avec la valeur qui",selectValue:"-Sélectionner-",isFalse:"est fausse",isTrue:"est vrai",or:"Ou",cancel:"Annuler",operator:"Opérateur",value:"Valeur"})),kendo.ui.FilterMultiCheck&&(kendo.ui.FilterMultiCheck.prototype.options.messages=e.extend(!0,kendo.ui.FilterMultiCheck.prototype.options.messages,{checkAll:"Choisir toutes",clear:"Effacer filtre",filter:"Filtrer",search:"Recherche"})),kendo.ui.Groupable&&(kendo.ui.Groupable.prototype.options.messages=e.extend(!0,kendo.ui.Groupable.prototype.options.messages,{empty:"Faites glisser un en-tête de colonne et déposer ici pour grouper par cette colonne."})),kendo.ui.Editor&&(kendo.ui.Editor.prototype.options.messages=e.extend(!0,kendo.ui.Editor.prototype.options.messages,{bold:"Gras",createLink:"Insérer un lien hypertexte",fontName:"Police",fontNameInherit:"(police héritée)",fontSize:"Taille de police",fontSizeInherit:"(taille héritée)",formatBlock:"Style du paragraphe",indent:"Augmenter le retrait",insertHtml:"Insérer HTML",insertImage:"Insérer image",insertOrderedList:"Liste numérotée",insertUnorderedList:"Liste à puces",italic:"Italique",justifyCenter:"Centrer",justifyFull:"Justifier",justifyLeft:"Aligner le texte à gauche",justifyRight:"Aligner le texte à droite",outdent:"Diminuer le retrait",strikethrough:"Barré",styles:"Styles",subscript:"Subscript",superscript:"Superscript",underline:"Souligné",unlink:"Supprimer le lien hypertexte",deleteFile:'Êtes-vous sûr de vouloir supprimer "{0}"?',directoryNotFound:"Un répertoire avec ce nom n'a pas été trouvé.",emptyFolder:"Vider le dossier",invalidFileType:'Le fichier sélectionné "{0}" n\'est pas valide. Les types de fichiers supportés sont {1}.',orderBy:"Organiser par:",orderByName:"Nom",orderBySize:"Taille",overwriteFile:'Un fichier avec le nom "{0}" existe déjà dans le répertoire courant. Voulez-vous le remplacer?',uploadFile:"Télécharger",backColor:"Couleur de fond",foreColor:"Couleur",dialogButtonSeparator:"Ou",dialogCancel:"Fermer",dialogInsert:"Insérer",imageAltText:"Le texte de remplacement",imageWebAddress:"Adresse Web",imageWidth:"Largeur (px)",imageHeight:"Hauteur (px)",linkOpenInNewWindow:"Ouvrir dans une nouvelle fenêtre",linkText:"Text",linkToolTip:"Info-bulle",linkWebAddress:"Adresse Web",search:"Search",createTable:"Insérer un tableau",addColumnLeft:"Add column on the left",addColumnRight:"Add column on the right",addRowAbove:"Add row above",addRowBelow:"Add row below",deleteColumn:"Supprimer la colonne",deleteRow:"Supprimer ligne",dropFilesHere:"drop files here to upload",formatting:"Format",viewHtml:"View HTML",dialogUpdate:"Update",insertFile:"Insérer un Fichier"}));var o={uploadFile:"Charger",orderBy:"Trier par",orderByName:"Nom",orderBySize:"Taille",directoryNotFound:"Aucun répértoire de ce nom.",emptyFolder:"Répertoire vide",deleteFile:'Etes-vous sûr de vouloir supprimer "{0}"?',invalidFileType:'Le fichier sélectionné "{0}" n\'est pas valide. Les type fichiers supportés sont {1}.',overwriteFile:'Un fichier du nom "{0}" existe déjà dans ce répertoire. Voulez-vous le remplacer?',dropFilesHere:"glissez les fichiers ici pour les charger",search:"Recherche"};kendo.ui.FileBrowser&&(kendo.ui.FileBrowser.prototype.options.messages=e.extend(!0,kendo.ui.FileBrowser.prototype.options.messages,o)),kendo.ui.ImageBrowser&&(kendo.ui.ImageBrowser.prototype.options.messages=e.extend(!0,kendo.ui.ImageBrowser.prototype.options.messages,o)),kendo.ui.Upload&&(kendo.ui.Upload.prototype.options.localization=e.extend(!0,kendo.ui.Upload.prototype.options.localization,{cancel:"Annuler",dropFilesHere:"déposer les fichiers à télécharger ici",remove:"Retirer",retry:"Réessayer",select:"Sélectionner...",statusFailed:"échoué",statusUploaded:"téléchargé",statusUploading:"téléchargement",uploadSelectedFiles:"Télécharger des fichiers",headerStatusUploaded:"Done",headerStatusUploading:"Uploading..."})),kendo.ui.Scheduler&&(kendo.ui.Scheduler.prototype.options.messages=e.extend(!0,kendo.ui.Scheduler.prototype.options.messages,{allDay:"toute la journée",cancel:"Annuler",editable:{confirmation:"Etes-vous sûr de vouloir supprimer cet élément?"},date:"Date",destroy:"Effacer",editor:{allDayEvent:"Toute la journée",description:"Description",editorTitle:"Evènement",end:"Fin",endTimezone:"End timezone",repeat:"Répéter",separateTimezones:"Use separate start and end time zones",start:"Début",startTimezone:"Start timezone",timezone:" ",timezoneEditorButton:"Fuseau horaire",timezoneEditorTitle:"Fuseaux horaires",title:"Titre",noTimezone:"Pas de fuseau horaire"},event:"Evènement",recurrenceMessages:{deleteRecurring:"Voulez-vous supprimer seulement cet évènement ou toute la série?",deleteWindowOccurrence:"Suppression de l'élément courant",deleteWindowSeries:"Suppression de toute la série",deleteWindowTitle:"Suppression d'un élément récurrent",editRecurring:"Voulez-vous modifier seulement cet évènement ou toute la série?",editWindowOccurrence:"Modifier l'occurrence courante",editWindowSeries:"Modifier la série",editWindowTitle:"Modification de l'élément courant"},save:"Sauvegarder",time:"Time",today:"Aujourd'hui",views:{agenda:"Agenda",day:"Jour",month:"Mois",week:"Semaine",workWeek:"Semaine de travail",timeline:"Chronologie"},deleteWindowTitle:"Suppression de l'élément",showFullDay:"Montrer toute la journée",showWorkDay:"Montrer les heures ouvrables"})),kendo.ui.Validator&&(kendo.ui.Validator.prototype.options.messages=e.extend(!0,kendo.ui.Validator.prototype.options.messages,{required:"{0} est requis",pattern:"{0} n'est pas valide",min:"{0} doit être plus grand ou égal à {1}",max:"{0} doit être plus petit ou égal à {1}",step:"{0} n'est pas valide",email:"{0} n'est pas un courriel valide",url:"{0} n'est pas une adresse web valide",date:"{0} n'est pas une date valide",dateCompare:"La date de fin doit être postérieure à la date de début"})),kendo.ui.Dialog&&(kendo.ui.Dialog.prototype.options.messages=e.extend(!0,kendo.ui.Dialog.prototype.options.localization,{close:"Fermer"})),kendo.ui.Alert&&(kendo.ui.Alert.prototype.options.messages=e.extend(!0,kendo.ui.Alert.prototype.options.localization,{okText:"OK"})),kendo.ui.Confirm&&(kendo.ui.Confirm.prototype.options.messages=e.extend(!0,kendo.ui.Confirm.prototype.options.localization,{okText:"OK",cancel:"Annuler"})),kendo.ui.Prompt&&(kendo.ui.Prompt.prototype.options.messages=e.extend(!0,kendo.ui.Prompt.prototype.options.localization,{okText:"OK",cancel:"Annuler"}))}(window.kendo.jQuery)})},202:function(e,t,o){var i,r,s;!function(o,n){"use strict";r=[],i=o,s="function"==typeof i?i.apply(t,r):i,!(void 0!==s&&(e.exports=s))}(function(){"use strict";var e,t=window.kendo,o=t.ui;return function(i,r){if(o.AssetManager&&(e=o.AssetManager.prototype.options,e.messages=i.extend(!0,e.messages,{toolbar:{upload:"Mettre en ligne","delete":"Supprimer",filter:"Collection: ",search:"Recherche"},tabs:{"default":"Projet"},data:{defaultName:"Chargement...",defaultImage:""}})),o.Explorer&&(e=o.Explorer.prototype.options,e.messages=i.extend(!0,e.messages,{empty:"Rien à afficher"})),o.MediaPlayer&&(e=o.MediaPlayer.prototype.options,e.messages=i.extend(!0,e.messages,{play:"Jouer/Pauser",mute:"Avec/Sans son",full:"Plein écran",notSupported:"Fichier non supporté"})),o.MultiInput&&(e=o.MultiInput.prototype.options,e.messages=i.extend(!0,e.messages,{"delete":"Effacer"})),o.Navigation&&(e=o.Navigation.prototype.options,e.messages=i.extend(!0,e.messages,{empty:"Rien à afficher"})),o.PlayBar&&(e=o.PlayBar.prototype.options,e.messages=i.extend(!0,e.messages,{empty:"Rien à afficher",page:"Page",of:"de {0}",first:"Aller à la première page",previous:"Aller à la dernière page",next:"Aller à la prochaine page",last:"Aller à la page précédente",refresh:"Rafraichîr",morePages:"Plus de pages"})),o.PropertyGrid&&(e=o.PropertyGrid.prototype.options,e.messages=i.extend(!0,e.messages,{property:"Propriété",value:"Valeur"})),o.Quiz&&(e=o.Quiz.prototype.options,e.messages=i.extend(!0,e.messages,{optionLabel:"Sélectionner..."})),o.Stage&&(e=o.Stage.prototype.options,e.messages=i.extend(!0,e.messages,{contextMenu:{"delete":"Supprimer",duplicate:"Dupliquer"},noPage:"Veuillez ajouter ou sélectionner une page"})),o.StyleEditor&&(e=o.StyleEditor.prototype.options,e.messages=i.extend(!0,e.messages,{columns:{name:"Nom",value:"Valeur"},toolbar:{create:"Nouveau",destroy:"Effacer"},validation:{name:"Nom de style manquant",value:"Valeur manquante"}})),window.kidoju){var s,n,a=window.kidoju,l=a.adapters,u=a.data,p=a.tools,d=a.Tool;l&&l.CharGridAdapter&&(l.CharGridAdapter.prototype.messages={layout:"<h3>Concevez la grille</h3><p>Chaque caractère saisi dans la grille est verrouillé et ne peut être modifié  en mode d'exécution.</p><p>Utilisez le caractère `{0}` pour désigner les cellules vides.</p>",solution:"<h3>Saisissez la solution</h3><p>Utilisez les caractères autorisés de la liste blanche, i.e. `{0}`.</p>"}),u&&u.Page&&(u.Page.prototype.messages={emptyPage:"La page {0} ne doit pas être vide.",minConnectors:"Au moins {0} Connecteurs sont nécessaires pour faire une question en page {1}.",missingDraggable:"Des Étiquettes et Images déplaçables sont requis pour la/les Zone(s) de Dépôt en page {0}.",missingDropZone:"Une Zone de Dépôt est requise pour les Étiquettes et Images déplaçables en page {0}.",missingLabel:"Une Étiquettes est recommandée en page {0}.",missingMultimedia:"Un élément multimédia (Image, Audio, Vidéo) est recommandé en page {0}.",missingQuestion:"Une question est recommandé en page {0}.",missingInstructions:"Des instructions sont recommandées en page {0}.",missingExplanations:"Des explications sont recommandées en page {0}."}),u&&u.Stream&&(u.Stream.prototype.messages={duplicateNames:"Supprimez les composants utilisant le même nom `{0}` en pages {1}",minPages:"Il faut au moins {0} pages pour pouvoir publier.",minQuestions:"Il faut au moins {0} questions pour pouvoir publier.",typeVariety:"On recommande l'usage d'au moins {0} types de questions (Choix Multiple, Boîte de Texte, Connecteurs ou autre).",qtyVariety:"On recommande plus de variété quand {0:p0} des questions sont du type {1}."}),d&&d.constructor&&"Function"===d.constructor.name&&(d.prototype.i18n=i.extend(!0,d.prototype.i18n,{tool:{top:{title:"Pos. Haut"},left:{title:"Pos. Gauche"},height:{title:"Hauteur"},width:{title:"Largeur"},rotate:{title:"Rotation"}},dialogs:{ok:{text:"OK"},cancel:{text:"Annuler"}},messages:{invalidAltText:"Un(e) {0} en page {1} nécessite un texte alternatif dans les attributs d'affichage.",invalidAudioFile:"Un(e) {0} en page {1} nécessite un fichier mp3 dans les attributs d'affichage.",invalidColor:"Un(e) {0} on page {1} a une couleur invalide dans les attributs d'affichage.",invalidData:"Un(e) {0} en page {1} nécessite des valeurs dans les attributs d'affichage.",invalidDescription:"Un(e) {0} nommé(e) `{1}` en page {2} nécessite une question dans la logique de test.",invalidDropValue:"Une {0} en page {1} nécessite une valeur de dépôt dans la logique de test.",invalidFailure:"Un(e) {0} nommé(e) `{1}` en page {2} a un score d'échec supérieur au score d'omission ou zéro dans la logique de test.",invalidFormula:"Un(e) {0} on page {1} nécessite une formule dans les attributs d'affichage.",invalidImageFile:"Un(e) {0} en page {1} nécessite un fichier image dans les attributs d'affichage.",invalidSolution:"Un(e) {0} nommé(e) `{1}` en page {2} nécessite une solution dans la logique de test.",invalidStyle:"Un(e) {0} en page {1} a un style invalide dans les attributs d'affichage.",invalidSuccess:"Un(e) {0} nommé(e) `{1}` en page {2} a un score de succès inférieur au score d'omission ou zéro dans la logique de test.",invalidText:"Un(e) {0} en page {1} nécessite un texte dans les attributs d'affichage.",invalidValidation:"Un(e) {0} nommé(e) `{1}` en page {2} nécessite une formule de validation dans la logique de test.",invalidVideoFile:"Un(e) {0} en page {1} nécessite un fichier mp4 dans les attributs d'affichage."}})),p instanceof t.Observable&&(p.audio instanceof d&&(p.checkbox.constructor.prototype.description="Lecteur Audio",s=p.audio.constructor.prototype.attributes,s.autoplay.title="Auto.",s.mp3.title="Fichier MP3",s.ogg.title="Fichier OGG"),p.chart instanceof d&&(p.chart.constructor.prototype.description="Diagramme",s=p.chart.constructor.prototype.attributes,s.type.title="Type",s.title.title="Titre",s.categories.title="Catégories",s.values.title="Valeurs",s.legend.title="Légende",s.data.title="Données",s.style.title="Style"),p.chargrid instanceof d&&(p.chargrid.constructor.prototype.description="Character Grid",s=p.chargrid.constructor.prototype.attributes,s.blank.title="Vide",s.columns.title="Colonnes",s.layout.title="Mise en Page",s.rows.title="Lignes",s.whitelist.title="Caractères",s.gridFill.title="Fond de Grille",s.gridStroke.title="Contour de Grille",s.selectedFill.title="Fond Sélectionné",s.lockedFill.title="Fond Vérouillé",s.fontColor.title="Couleur Police",n=p.chargrid.constructor.prototype.properties,n.name.title="Nom",n.description.title="Question",n.solution.title="Solution",n.validation.title="Validation",n.success.title="Succès",n.failure.title="Échec",n.omit.title="Omission"),p.checkbox instanceof d&&(p.checkbox.constructor.prototype.description="Boîte à Cocher",s=p.checkbox.constructor.prototype.attributes,s.data.title="Valeurs",s.data.defaultValue="Option 1\nOption 2",s.groupStyle.title="Style Groupe",s.itemStyle.title="Style Element",s.selectedStyle.title="Style Sélection",n=p.checkbox.constructor.prototype.properties,n.name.title="Nom",n.description.title="Question",n.solution.title="Solution",n.validation.title="Validation",n.success.title="Succès",n.failure.title="Échec",n.omit.title="Omission"),p.connector instanceof d&&(p.connector.constructor.prototype.description="Connecteur",s=p.connector.constructor.prototype.attributes,s.color.title="Couleur",n=p.connector.constructor.prototype.properties,n.name.title="Nom",n.description.title="Question",n.solution.title="Solution",n.validation.title="Validation",n.success.title="Succès",n.failure.title="Échec",n.omit.title="Omission"),p.dropzone instanceof d&&(p.dropzone.constructor.prototype.description="Zone de Dépot",s=p.dropzone.constructor.prototype.attributes,s.style.title="Style",s.text.title="Texte",s.text.defaultValue="Veuillez déposer ici.",n=p.dropzone.constructor.prototype.properties,n.name.title="Nom",n.description.title="Question",n.solution.title="Solution",n.validation.title="Validation",n.success.title="Succès",n.failure.title="Échec",n.omit.title="Omission"),p.image instanceof d&&(p.image.constructor.prototype.description="Image",s=p.image.constructor.prototype.attributes,s.alt.title="Texte",s.alt.defaultValue="Image",s.src.title="Source",s.src.defaultValue="cdn://images/o_collection/svg/office/painting_landscape.svg",s.style.title="Style",n=p.image.constructor.prototype.properties,n.draggable.title="Déplaçable",n.dropValue.title="Valeur"),p.label instanceof d&&(p.label.constructor.prototype.description="Étiquette",s=p.label.constructor.prototype.attributes,s.style.title="Style",s.text.title="Texte",s.text.defaultValue="Label",n=p.label.constructor.prototype.properties,n.draggable.title="Déplaçable",n.dropValue.title="Valeur"),p.mathexpression instanceof d&&(p.mathexpression.constructor.prototype.description="Expression Mathématique",s=p.mathexpression.constructor.prototype.attributes,s.formula.title="Formule",s.formula.defaultValue="#sum_(i=1)^n i^3=((n(n+1))/2)^2#",s.style.title="Style"),p.quiz instanceof d&&(p.quiz.constructor.prototype.description="Question à Choix Multiple",s=p.quiz.constructor.prototype.attributes,s.data.title="Valeurs",s.data.defaultValue="Vrai\nFaux",s.groupStyle.title="Style Groupe",s.itemStyle.title="Style Element",s.mode.title="Mode",s.selectedStyle.title="Style Sélection",n=p.quiz.constructor.prototype.properties,n.name.title="Nom",n.description.title="Question",n.solution.title="Solution",n.validation.title="Validation",n.success.title="Succès",n.failure.title="Échec",n.omit.title="Omission"),p.table instanceof d&&(p.table.constructor.prototype.description="Table Statique",s=p.table.constructor.prototype.attributes,s.columns.title="Colonnes",s.rows.title="Lignes",s.data.title="Données",s.style.title="Style"),p.textarea instanceof d&&(p.textarea.constructor.prototype.description="Aire de Texte",s=p.textarea.constructor.prototype.attributes,s.style.title="Style",n=p.textarea.constructor.prototype.properties,n.name.title="Nom",n.description.title="Question",n.solution.title="Solution",n.validation.title="Validation",n.success.title="Succès",n.failure.title="Échec",n.omit.title="Omission"),p.textbox instanceof d&&(p.textbox.constructor.prototype.description="Boîte de Texte",s=p.textbox.constructor.prototype.attributes,s.mask.title="Masque",s.style.title="Style",n=p.textbox.constructor.prototype.properties,n.name.title="Nom",n.description.title="Question",n.solution.title="Solution",n.validation.title="Validation",n.success.title="Succès",n.failure.title="Échec",n.omit.title="Omission"),p.video instanceof d&&(p.video.constructor.prototype.description="Lecteur Vidéo",s=p.video.constructor.prototype.attributes,s.autoplay.title="Auto.",s.toolbarHeight.title="Haut. Commandes",s.mp4.title="Fichier MP4",s.ogv.title="Fichier OGV",s.wbem.title="Fichier WBEM"))}}(window.kendo.jQuery),window.kendo},o(187))},203:function(e,t){e.exports={locale:"fr",languages:[{value:"en",name:"Anglais",icon:""},{value:"fr",name:"Français",icon:""}],themes:[{value:"black",name:"Black",colors:["#0167cc","#4698e9","#272727"]},{value:"blueopal",name:"Blue Opal",colors:["#076186","#7ed3f6","#94c0d2"]},{value:"bootstrap",name:"Bootstrap",colors:["#3276b1","#67afe9","#fff"]},{value:"default",name:"Default",colors:["#ef6f1c","#e24b17","#5a4b43"]},{value:"fiori",name:"Fiori",colors:["#007cc0","#e6f2f9","#f0f0f0"]},{value:"flat",name:"Flat",colors:["#363940","#2eb3a6","#fff"]},{value:"highcontrast",name:"High Contrast",colors:["#b11e9c","#880275","#1b141a"]},{value:"material",name:"Material",colors:["#3f51b5","#283593","#fff"]},{value:"materialblack",name:"Material Black",colors:["#3f51b5","#1c1c1c","#4d4d4d"]},{value:"metro",name:"Metro",colors:["#8ebc00","#787878","#fff"]},{value:"metroblack",name:"Metro Black",colors:["#00aba9","#0e0e0e","#565656"]},{value:"moonlight",name:"Moonlight",colors:["#ee9f05","#40444f","#212a33"]},{value:"nova",name:"Nova",colors:["#32364c","#ff4350","#dfe0e1"]},{value:"office365",name:"Office 365",colors:["#0072c6","#cde6f7","#fff"]},{value:"silver",name:"Silver",colors:["#298bc8","#515967","#eaeaec"]},{value:"uniform",name:"Uniform",colors:["#666","#ccc","#fff"]}],meta:{author:"Memba Sarl",title:"Memba",description:"Nous sommes les créateurs de Kidoju",keywords:"Kidoju - Une nouvelle façon d'enseigner et d'apprendre",category:"Divers",icon:"typewriter"},header:{navbar:{toggle:"Changer la navigation",search:{text:"Rechercher",placeholder:"Recherche..."}}},footer:{copyright:"Copyright &copy; 2014-2016 Memba Sarl",language:{label:"Langue:",tooltip:"Changez votre langue."},theme:{label:"Thème:",tooltip:"Changez le thème de votre page."}},home:{},error:{icon:"error",back:"Retour"},groups:{authors:{icon:"users3",heading:"Auteurs"},calendar:{icon:"calendar",heading:"Calendrier"},categories:{icon:"tags",heading:"Catégories"}},search:{title:{icon:"magnifying_glass",heading:"Résultats de recherche"}},errors:{http:{400:{status:400,title:"400 - Mauvaise Requête",message:"Désolé, mais votre requête est mal formulée. L'URL est peut-être mal ortographiée."},401:{status:401,title:"401 - Non autorisé",message:"Désolé, mais votre requête n'est pas autorisée."},403:{status:403,title:"403 - Forbidden",message:"Désolé, mais votre requête est interdite."},404:{status:404,title:"404 - Introuvable",message:"Désolé, mais la page demandée est introuvable. L'URL est peut-être mal ortographiée ou la page que vous recherchez n'est peut-être plus disponible."},500:{status:500,title:"500 - Erreur Inconnue",message:"Il y a eu une erreur inconnue. Si nous arrivons à la reproduire, nous la corrigerons avec amour et attention."},1000:{status:500,title:"1000 - Désactivez le mode privé ou mettez à jour votre navigateur",message:"This web site utilise les fonctionnalités des navigateurs récents, notamment (mais pas seulement) l’audio et la vidéo, les blobs, les canvas, les transformations css, les api de fichiers, le stockage local et de session, les graphiques vectoriels (SVG) et les « web workers »."}},mongoose:{validation:{status:400,title:"400 - Mauvaise Requête",message:"Erreur de validation de base de données."}},params:{invalidObjectId:{status:400,title:"400 - Mauvaise Requête",message:"Identifiant d'objet erroné: un identifiant est une chaîne de 24 caractères hexadécimaux."},invalidLanguage:{status:400,title:"400 - Mauvaise Requête",message:"Langue erronée: cette langue n'est pas définie."},invalidProvider:{status:400,title:"400 - Mauvaise Requête",message:"Service erroné: utlisez `facebook`, `google`, `live` ou `twitter`"},invalidMonth:{status:400,title:"400 - Mauvaise Requête",message:"Mois erroné: veuillez utiliser un nombre à quatre chiffres compris entre 01 et 12."},invalidYear:{status:400,title:"400 - Mauvaise Requête",message:"Année erronée: veuillez utiliser un nombre à quatre chiffres compris entre 2014 et l'année en cours."}},routes:{hookRoute:{badAgent:{status:400,title:"400 - Mauvaise Requête",message:"Agent utilisateur inconnu: `%s`."}}}}}}});
//# sourceMappingURL=app.culture.fr.chunk.js.map?v=0.2.40