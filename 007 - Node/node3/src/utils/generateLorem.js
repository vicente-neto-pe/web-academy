import { LoremIpsum } from 'lorem-ipsum';

// Função que cria um HTML com um número especificado de parágrafos de Lorem Ipsum
export const generateLorem = (numParagraphs) => {
  const lorem = new LoremIpsum(); // Cria uma instância do gerador de Lorem Ipsum

  let html = '<!DOCTYPE html><html lang="en"><head><title>Lorem Ipsum</title></head><body>';
  for (let i = 0; i < numParagraphs; i++) {
    html += `<p>${lorem.generateParagraphs(1)}</p>`;
  }
  html += '</body></html>';

  return html;
};
