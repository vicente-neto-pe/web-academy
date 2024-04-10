import { Router, Response, Request } from 'express';
import { generateLorem } from '../utils/generateLorem';

const router = Router();

router.get('/lorem/:paragraphs', (req:Request, res:Response) => {
  res.send(generateLorem(parseInt(req.params.paragraphs)));
});

export default router;
