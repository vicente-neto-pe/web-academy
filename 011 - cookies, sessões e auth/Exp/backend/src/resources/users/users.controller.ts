import { UsersService } from "./users.service";
import { Request, Response } from "express";

export class UserController {
    constructor(private userService: UsersService) {}

    create = async (req: Request, res: Response) => {
        const user = req.body;
        try {
            const response = await this.userService.create(user);
            res.status(201).json(response);
        } catch (e) {
            console.log(e);
            res.status(500).json("Internal server error");
        }
    };

    readAll = async (req: Request, res: Response) => {
        try {
            const response = await this.userService.readAll();
            res.json(response);
        } catch (e) {
            console.log(e);
            res.status(500).json("Internal server error");
        }
    };

    readOneById = async (req: Request, res: Response) => {
        try {
            const response = await this.userService.readOneById(req.params.id);
            res.json(response);
        }
        catch (e) {
            console.log(e);
            res.status(500).json("Internal server error");
        }
    }

    update = async (req: Request, res: Response) => {
        try {
            const response = await this.userService.update(req.params.id, req.body);
            res.json(response);
        } catch (e) {
            console.log(e);
            res.status(500).json("Internal server error");
        }
    };

    delete = async (req: Request, res: Response) => {
        try {
            const response = await this.userService.delete(req.params.id);
            res.json(response);
        } catch (e) {
            console.log(e);
            res.status(500).json("Internal server error");
        }
    };
    
}