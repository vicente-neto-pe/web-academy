import { Request, Response } from "express";

function changeLanguage(req: Request, res: Response) {
  /*
    swagger.summary = 'Muda o idioma do site.'
    #swagger.parameters['body'] = {
      in: 'body',
      schema: { $ref: '#/definitions/Language' }
    }
    #swagger.responses[200] = {
      description: 'Idioma alterado.'
    }
  */
  const { lang } = req.body;
  console.log(lang);
  res.cookie("lang", lang);
  res.json({ lang });
}

export default { changeLanguage };
