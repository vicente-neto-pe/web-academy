import { Request, Response, NextFunction } from 'express';
import { authService } from '../routes/auth.routes';

const isAuth = async (
 req: Request,
 res: Response,
 next: NextFunction
) => {
 const uid = req.session.uid;
    if (uid && (await authService.checkIsAuth(uid))) next();
    else res.status(403).json({ msg: 'Não autorizado' });
}