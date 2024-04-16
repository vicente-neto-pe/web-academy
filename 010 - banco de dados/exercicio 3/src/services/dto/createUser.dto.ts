import { Endereco } from "../../models/endereco"

export interface CreateUserDTO {
    cpf:string
    nome: string
    email:string
    numero_celular: string
    data_nascimento: Date
    endereco? : Endereco
}
