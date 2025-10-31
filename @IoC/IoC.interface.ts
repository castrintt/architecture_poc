import {ILogoutService} from "@service/logout/logout.interface";
import {IAuthService} from "@service/auth/auth.interface";
import {ITokenRepository} from "@repository/token/token.interface";
import {IAuthGateway} from "@gateway/auth/auth.interface";
import {ICalendarGateway} from "@gateway/calendar/calendar.interface";
import {ICharacteristicGateway} from "@gateway/characteristic/characteristic.interface";
import {IImageGateway} from "@gateway/image/image.interface";
import {IScoreGateway} from "@gateway/score/score.interface";
import {ITestGateway} from "@gateway/test/test.interface";
import {ITestLocationGateway} from "@gateway/testLocation/testLocations.interface";
import {IVolunteerGateway} from "@gateway/volunteer/volunteer.interface";
import {IZipcodeGateway} from "@gateway/zipcode/zipcode.interface";
import {IDateFacade} from "@facade/date/date.interface";

export interface IIoCContainer {
    getAuthService(): IAuthService;

    getLogoutService(): ILogoutService;

    getTokenRepository(): ITokenRepository;

    getAuthGateway(): IAuthGateway;
    getCalendarGateway(): ICalendarGateway;
    getCharacteristicGateway():ICharacteristicGateway
    getImageGateway():IImageGateway;
    getScoreGateway():IScoreGateway;
    getTestGateway():ITestGateway;
    getTestLocationGateway():ITestLocationGateway;
    getVolunteerGateway():IVolunteerGateway;
    getZipcodeGateway():IZipcodeGateway;
    getDateFacade():IDateFacade;
}