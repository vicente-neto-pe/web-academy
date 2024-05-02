import { Request, Response } from "express";

function changeLanguage(req: Request, res: Response) {
  const { lang } = req.body;
  console.log(lang);
  res.cookie("lang", lang);
  res.json({ lang });
}

export default { changeLanguage };
