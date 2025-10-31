import {IAuthService} from "@service/auth/auth.interface";
import {IAuthGateway} from "@gateway/auth/auth.interface";
import {AuthService} from "@service/auth/auth.service";

describe('AuthService', () => {
    let authService: IAuthService

    let authGateway: jest.Mocked<IAuthGateway>

    beforeEach(() => {
        jest.clearAllMocks();

        authGateway = {
            generateTokenAsync: jest.fn(),
            generateRefreshTokenAsync: jest.fn(),
            getAxiosInstances: jest.fn(),
        } as any

        authService = new AuthService(
            authGateway,
        )
    })

    describe('generateTokenAsync', () => {

        it('',async () => {
            const emailMock = 'test@gmail.com'
            const passwordMock = '123123123'
            await authService.generateTokenAsync(emailMock,passwordMock)
        })

    })

})