import { Router } from 'express';
import { mainController } from '../controllers/main/main';
  const router = Router();

// Main Controller
router.get('/', mainController.index);
router.get('/hb1', mainController.hb1);
router.get('/hb2', mainController.hb2);
router.get('/hb3', mainController.hb3);
router.get('/hb4', mainController.hb4);

router.get('/', (req, res) => {
  res.send('Página principal do site');
});

export default router;
