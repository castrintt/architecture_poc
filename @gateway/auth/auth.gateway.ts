import {EHttpStatusCode} from "@enums/statusCode.enum";
import {GenerateAccessTokenResponse} from "@domain/models/auth/generateAccessTokenResponse";
import {IAuthGateway} from "./auth.interface";
import {axios_instances} from "@libs/axios/axios.instances";


export class AuthGateway implements IAuthGateway {


    public async generateTokenAsync(login: string, password: string): Promise<GenerateAccessTokenResponse | null> {
        const builder = {login, password}
        return axios_instances.PUBLIC.post<GenerateAccessTokenResponse>("Authentication/[END-POINT]", builder).
            then(async ({data, status}) => {
                if (status !== EHttpStatusCode.OK) return null;
                return data
            }).
            catch(() => null)
    }
}