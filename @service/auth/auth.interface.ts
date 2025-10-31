export interface IAuthService {
    generateTokenAsync(login:string, password:string): Promise<boolean>

}