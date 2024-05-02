import { usersService } from "./users.service";
import { Request, Response } from "express";

    

    const create = async (req: Request, res: Response) => {
        /*
            #swagger.summary = 'Adiciona um novo usuário na base.'
            #swagger.parameters['body'] = {
                in: 'body',
                schema: { $ref: '#/definitions/User' }
            }
            #swagger.responses[201] = {
                schema: { $ref: '#/definitions/User' }
            }
            */
        const user = req.body;
        try {
            const response = await usersService.create(user);
            res.status(201).json(response);
        } catch (e) {
            console.log(e);
            res.status(500).json("Internal server error");
        }
    };

    const readAll = async (req: Request, res: Response) => {
        /*
            #swagger.summary = 'Retorna todos os usuários.'
            #swagger.responses[200] = {
                schema: { $ref: '#/definitions/User' }
            }
            */
        try {
            const response = await usersService.readAll();
            res.json(response);
        } catch (e) {
            console.log(e);
            res.status(500).json("Internal server error");
        }
    };

    const readOneById = async (req: Request, res: Response) => {
        /*
            #swagger.summary = 'Retorna um usuário por id'

            #swagger.responses[200] = {
                schema: { $ref: '#/definitions/User' }
            }
            */

        try {
            const response = await usersService.readOneById(req.params.id);
            res.json(response);
        }
        catch (e) {
            console.log(e);
            res.status(500).json("Internal server error");
        }
    }

    const update = async (req: Request, res: Response) => {
        /*
            #swagger.summary = 'Atualiza um usuário na base.'
            #swagger.parameters['body'] = {
                in: 'body',
                schema: { $ref: '#/definitions/User' }
            }
            #swagger.responses[200] = {
                schema: { $ref: '#/definitions/User' }
            }
            */
        try {
            const response = await usersService.update(req.params.id, req.body);
            res.json(response);
        } catch (e) {
            console.log(e);
            res.status(500).json("Internal server error");
        }
    };

    const remove = async (req: Request, res: Response) => {
        /*
            #swagger.summary = 'Remove um usuário na base.'
            #swagger.responses[200] = {
                description: 'Usuário removido.'
            }
            */
        try {
            const response = await usersService.remove(req.params.id);
            res.json(response);
        } catch (e) {
            console.log(e);
            res.status(500).json("Internal server error");
        }
    };
    
export const usersController ={ remove, create, readAll, readOneById, update}