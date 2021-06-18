// Put language constants here to use in your display.
// JSX for entire pages, specifically the Landing page, Glossary page, and the
// About page, are in the respective files themselves
// (e.g. jsx/App/LandingPage.jsx).
export const ENGLISH = "en";
export const ESPANOL = "es";
export const FRANCAIS = "fr";

// Put default language here.
export const DEFAULT_LOCALE = ENGLISH;

// Below, write the text that goes in various parts of the website for each
// language.

// NavBar text (header).
export const navBarTitleText = {
  [ENGLISH]: "LingView: ELAN and FLEx Web Display",
  [ESPANOL]: "LingView: Pantella Web ELAN y FLEx",
  [FRANCAIS]: "LingView: Affichage Web ELAN et FLEx",
};

export const navBarSearchText = {
  [ENGLISH]: "Search",
  [ESPANOL]: "Buscar",
  [FRANCAIS]: "Chercher",
};

export const navBarAboutText = {
  [ENGLISH]: "About",
  [ESPANOL]: "Acerca del corpus",
  [FRANCAIS]: "À propos du corpus",
};

export const navBarGlossaryText = {
  [ENGLISH]: "Glossary",
  [ESPANOL]: "Glosario",
  [FRANCAIS]: "Glossaire",
};

export const navBarIndexText = {
  [ENGLISH]: "Index of Texts",
  [ESPANOL]: "Índice de textos",
  [FRANCAIS]: "Index des Textes",
};

// Search page text
export const searchPagePromptText = {
  [ENGLISH] : "Search database:",
  [ESPANOL] : "Buscar en la base de datos:",
  [FRANCAIS] : "Rechercher dans la base de données:",
};

// Story index columns text.
export const indexPageTitleHeaderText = {
  [ENGLISH] : "Title",
  [ESPANOL] : "Titre",
  [FRANCAIS] : "Título",
};

export const indexPageAuthorHeaderText = {
  [ENGLISH] : "Author",
  [ESPANOL] : "Auteur",
  [FRANCAIS] : "Autor",
};

export const indexPageMediaHeaderText = {
  [ENGLISH] : "Media",
  [ESPANOL] : "Medios",
  [FRANCAIS] : "Medios",
};

// Use if a story isn't found.
export const notFoundPageText = {
  [ENGLISH] : "Story not found. Perhaps you mistyped the URL?",
  [ESPANOL] : "Historia no encontrada. ¿Quizás escribiste mal la URL?",
  [FRANCAIS] : "Histoire introuvable. Peut-être avez-vous mal saisi l'URL?",
};

// Use when a story is loading.
export const loadingPageText = {
  [ENGLISH] : "Loading...",
  [ESPANOL] : "Cargando...",
  [FRANCAIS] : "Chargement...",
};

// Story controls and metadata.
export const showVideoButtonText = {
  [ENGLISH] : "Show video",
  [ESPANOL] : "Mostrar video",
  [FRANCAIS] : "Montrer la vidéo",
};

export const showOrHideTiersButtonText = {
  [ENGLISH] : "Show/hide tiers",
  [ESPANOL] : "Mostrar/ocultar niveles",
  [FRANCAIS] : "Afficher/masquer les niveaux",
};

export const metadataAuthorText = {
  [ENGLISH] : "Author",
  [ESPANOL] : "Autor",
  [FRANCAIS] : "Auteur",
};

export const metadataDateText = {
  [ENGLISH] : "Date",
  [ESPANOL] : "Fecha",
  [FRANCAIS] : "Date",
};

export const metadataDescriptionText = {
  [ENGLISH] : "Description",
  [ESPANOL] : "Descripción",
  [FRANCAIS] : "Description",
};

export const metadataGenreText = {
  [ENGLISH] : "Genre",
  [ESPANOL] : "Género",
  [FRANCAIS] : "Genre",
};

export const metadataGlosserText = {
  [ENGLISH] : "Glosser",
  [ESPANOL] : "Glosador",
  [FRANCAIS] : "Glosser",
};

export const metadataSourceText = {
  [ENGLISH] : "Source",
  [ESPANOL] : "Fuente",
  [FRANCAIS] : "Source",
};

export const metadataSpeakersText = {
  [ENGLISH] : "Speakers",
  [ESPANOL] : "Oradores",
  [FRANCAIS] : "Haut-parleurs",
};

export const storySearchText = {
  [ENGLISH] : "Story",
  [ESPANOL] : "Historia",
  [FRANCAIS] : "Histoire",
};

export const storySearchViewStoryText = {
  [ENGLISH] : "View story",
  [ESPANOL] : "Ver historia",
  [FRANCAIS] : "Voir l'histoire",
};

// Texts for LaTeX conversion UI
// Text on the format button
export const formatButtonText = {
  [ENGLISH] : "Format",
  [ESPANOL] : "Formatear",
  [FRANCAIS] : "Formater",
};

export const formatSelectTiersPromptText = {
  [ENGLISH] : "Please select the tier that corresponds to each section in the LaTeX formatting.",
  [ESPANOL] : "Seleccione el nivel que corresponde a cada sección en el formato LaTeX.",
  [FRANCAIS] : "Veuillez sélectionner le niveau qui correspond à chaque section du formatage LaTeX.",
};

export const latexSentenceTierName = {
	[ENGLISH] : "original sentence",
	[ESPANOL] : "frase original",
	[FRANCAIS] : "phrase originale",
};

export const latexMorphemesTierName = {
	[ENGLISH] : "morphemes",
	[ESPANOL] : "morfemas",
	[FRANCAIS] : "morphèmes",
};

export const latexMorphemeTranslationsTierName = {
	[ENGLISH] : "morpheme translations",
	[ESPANOL] : "morfemas traducidos",
	[FRANCAIS] : "morphèmes traduits",
};

export const latexSentenceTranslationsTierName = {
	[ENGLISH] : "sentence translation",
	[ESPANOL] : "frase traducida",
	[FRANCAIS] : "phrase traduite",
};

// Text on the tier selection confirm button
export const tierSelectionConfirmButtonText = {
  [ENGLISH] : "Confirm",
  [ESPANOL] : "Confirmar",
  [FRANCAIS] : "Confirmer",
};

export const formatResultHeaderText = {
  [ENGLISH] : "Format result:",
  [ESPANOL] : "Resultado de formato:",
  [FRANCAIS] : "Résultat du format:",
};

export const formatStoryTitleText = {
  [ENGLISH] : "Story title:",
  [ESPANOL] : "Título de la historia:",
  [FRANCAIS] : "Titre de l'histoire:",
};

export const formatStoryIDText = {
  [ENGLISH] : "Story ID:",
  [ESPANOL] : "ID de historia:",
  [FRANCAIS] : "ID de l'histoire:",
};

export const formatSentenceURLText = {
  [ENGLISH] : "Sentence URL:",
  [ESPANOL] : "URL de la frase:",
  [FRANCAIS] : "URL de la phrase:",
};

export const formatLatexLibraryText = {
  [ENGLISH] : "Formatted for gb4e and gb4e-modified LaTeX packages:",
  [ESPANOL] : "Formateado para paquetes LaTeX gb4e y gb4e-modified:",
  [FRANCAIS] : "Formaté pour les packages LaTeX gb4e et gb4e-modified:",
};

// Text on the format result window close button
export const textFormatCloseButtonText = {
  [ENGLISH] : "Close",
  [ESPANOL] : "Cerrar",
  [FRANCAIS] : "Fermer",
};