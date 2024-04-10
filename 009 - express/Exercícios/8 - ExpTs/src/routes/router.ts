import { Router, Request, Response } from 'express';

const router = Router();
router.get('/', (req:Request, res:Response) => {
  res.send('Página principal do site');
});


router.get('/hb1', (req:Request, res:Response) => {
  res.render('hb1', {
  mensagem: 'Olá, você está aprendendo Express + HBS!',
  layout: false,
  });
 });
 
 router.get('/hb2', (req:Request, res:Response) => {
  res.render('hb2', {
  poweredByNodejs: true,
  name: 'Express',
  type: 'Framework',
  layout: false,
  });
 });
 
 router.get('/hb3', (req:Request, res:Response) => {
  const profes = [
  { nome: 'David Fernandes', sala: 1238 },
  { nome: 'Horácio Fernandes', sala: 1233 },
  { nome: 'Edleno Moura', sala: 1236 },
  { nome: 'Elaine Harada', sala: 1231 }
  ];
  res.render('hb3', { profes, layout: false });
 });
 
 router.get('/hb4', function (req:Request, res:Response) {
  const technologies = [
    { name: 'Express', type: 'Framework', poweredByNodejs: true },
    { name: 'Laravel', type: 'Framework', poweredByNodejs: false },
    { name: 'React', type: 'Library', poweredByNodejs: true },
    { name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
    { name: 'Django', type: 'Framework', poweredByNodejs: false },
    { name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
    { name: 'Sequelize', type: 'ORM tool', poweredByNodejs: true },
   ];
  res.render('hb4', { technologies, layout: false });
 });
 
export default router;
