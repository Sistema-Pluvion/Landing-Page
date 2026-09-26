/**
 * config.js
 * Configurações centrais do projeto Pluvion.
 */

window.Pluvion = window.Pluvion || {};

Pluvion.CONFIG = {
  // SUBSTITUIR pelo endpoint real do backend (Cloud Function / API) quando
  // estiver disponível. 
  institutionalRequestEndpoint: 'http://127.0.0.1:5001/pluvion-7749a/us-central1/registerInstitutionalRequest',
  environment: 'development',

  carouselAutoplayInterval: 9000,

  // Caminho configurável para a monografia.
  monographUrl: 'https://drive.google.com/uc?export=download&id=1PMpwtRQvRNUx0hpPj3uCVZ_VY9FQH76w',
  // Caminho configurável para o vídeo pitch.
  pitchVideoUrl: '',
};
