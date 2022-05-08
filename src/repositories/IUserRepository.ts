import { User } from "../entities/User";

export interface IUserRepository{
  findByemail(email: string): Promise<User>;
  save(user: User): Promise<void>;  
}