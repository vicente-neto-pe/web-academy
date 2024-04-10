import { LoremIpsum } from 'lorem-ipsum';

export const generateLorem = (numParagraphs:number) => {
  const lorem = new LoremIpsum();

  let html:string = '';
  for (let i = 0; i < numParagraphs; i++) {
    html += `<p>${lorem.generateParagraphs(1)}</p>`;
  }
  return html;
};