import { Request, Response, NextFunction } from 'express';
import { authService } from '../resources/auth/auth.service';

const isAdmin = async (
 req: Request,
 res: Response,
 next: NextFunction
) => {
 const uid = req.session.uid;
 if (uid && (await authService.checkIsAdmin(uid))) next();
 else res.status(403).json({ msg: 'Não autorizado' });
};
export default isAdmin;