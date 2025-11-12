import {injectable} from "inversify";
import type {IUserGateway} from "@api/contracts/user.interface";

@injectable()
export class UserGateway implements IUserGateway {
}