import { Tec } from "./helpersTypes";

export const listTec =(profs: Tec[]) => {
  const list = profs.map((p) =>
    p.poweredByNodejs ? `<li>${p.name}-${p.type}</li>` : '',
  );
  return `<ul>${list.join('')}</ul>`;
}
