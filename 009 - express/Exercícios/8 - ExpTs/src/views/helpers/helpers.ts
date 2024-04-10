import { Tec } from './helpersTypes.js';

export function listTec(profs: Tec[]) {
  const list = profs.map((p) =>
    p.poweredByNodejs ? `<li>${p.name}-${p.type}</li>` : '',
  );
  return `<ul>${list.join('')}</ul>`;
}
