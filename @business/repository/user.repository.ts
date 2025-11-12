import type {IUserRepository} from "@repository/contracts/user.interface";
import {injectable} from "inversify";

@injectable()
export class UserRepository implements IUserRepository {
}