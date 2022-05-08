import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController{

  constructor (
    private createUserUserCase: CreateUserUseCase,
  ){}

    async handle( request: Request, response: Response): Promise<Response>{
      const {name, email, password } = request.body;

      try {
        await this.createUserUserCase.execute({
          name,
          email,
          password
        })        
      } catch (err) {
        return response.status(400).json({
          message: err.message || 'Unexpect error.'
        })
      }
    }
}