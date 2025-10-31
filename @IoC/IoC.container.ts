import {IIoCContainer} from "./IoC.interface";

import {VolunteerGateway} from "@gateway/volunteer/volunteer.gateway";
import {ImageGateway} from "@gateway/image/image.gateway";
import {TokenRepository} from "@repository/token/token.repository";

import {TestLocationGateway} from "@gateway/testLocation/testLocation.gateway";
import {ZipcodeGateway} from "@gateway/zipcode/zipcode.gateway";
import {TestGateway} from "@gateway/test/test.gateway";
import {DateFacade} from "@facade/date/date.facade";

import {ScoreGateway} from "@gateway/score/score.gateway";
import {ILogoutService} from "@service/logout/logout.interface";
import {LogoutService} from "@service/logout/logout.service";

import {CalendarGateway} from "@gateway/calendar/calendar.gateway";
import {IAuthService} from "@service/auth/auth.interface";
import {AuthService} from "@service/auth/auth.service";
import {AuthGateway} from "@gateway/auth/auth.gateway";
import {IAuthGateway} from "@gateway/auth/auth.interface";
import {ICalendarGateway} from "@gateway/calendar/calendar.interface";
import {ICharacteristicGateway} from "@gateway/characteristic/characteristic.interface";
import {IImageGateway} from "@gateway/image/image.interface";
import {IScoreGateway} from "@gateway/score/score.interface";
import {ITestGateway} from "@gateway/test/test.interface";
import {ITestLocationGateway} from "@gateway/testLocation/testLocations.interface";
import {IVolunteerGateway} from "@gateway/volunteer/volunteer.interface";
import {IZipcodeGateway} from "@gateway/zipcode/zipcode.interface";
import {ITokenRepository} from "@repository/token/token.interface";
import {CharacteristicGateway} from "@gateway/characteristic/characteristic.gateway";
import {IDateFacade} from "@facade/date/date.interface";

export class IoCContainer implements IIoCContainer {
    private static instance?: IIoCContainer;


    private _logoutService?: ILogoutService;
    private _authService?: IAuthService;

    private _tokenRepository?: ITokenRepository;

    private _authGateway?: IAuthGateway;
    private _calendarGateway?: ICalendarGateway;
    private _characteristicGateway?: ICharacteristicGateway;
    private _imageGateway?: IImageGateway;
    private _scoreGateway?: IScoreGateway;
    private _testGateway?: ITestGateway;
    private _testLocationGateway?: ITestLocationGateway;
    private _volunteerGateway?: IVolunteerGateway;
    private _zipcodeGateway?: IZipcodeGateway;

    private _dateFacade?: IDateFacade;

    private constructor() {}

    static getInstance = (): IIoCContainer => {
        if (!IoCContainer.instance) IoCContainer.instance = new IoCContainer();
        return IoCContainer.instance;
    }

    getLogoutService = (): ILogoutService => {
        if (!this._logoutService) this._logoutService = new LogoutService(this.getTokenRepository());
        return this._logoutService;
    }


    getAuthService = (): IAuthService => {
        if (!this._authService) this._authService = new AuthService(this.getAuthGateway());
        return this._authService;
    }


    getTokenRepository = (): ITokenRepository => {
        if (!this._tokenRepository) this._tokenRepository = new TokenRepository();
        return this._tokenRepository;
    }

    getAuthGateway = (): IAuthGateway => {
        if (!this._authGateway) this._authGateway = new AuthGateway();
        return this._authGateway;
    }

    getCalendarGateway = (): ICalendarGateway => {
        if (!this._calendarGateway) {
            const dateFacade = new DateFacade();
            this._calendarGateway = new CalendarGateway(dateFacade);
        }
        return this._calendarGateway;
    }

    getCharacteristicGateway = (): ICharacteristicGateway => {
        if (!this._characteristicGateway) this._characteristicGateway = new CharacteristicGateway();
        return this._characteristicGateway;
    }

    getImageGateway = (): IImageGateway => {
        if (!this._imageGateway) this._imageGateway = new ImageGateway();
        return this._imageGateway;
    }

    getScoreGateway = (): IScoreGateway => {
        if (!this._scoreGateway) this._scoreGateway = new ScoreGateway();
        return this._scoreGateway;
    }

    getTestGateway = (): ITestGateway => {
        if (!this._testGateway) this._testGateway = new TestGateway();
        return this._testGateway;
    }

    getTestLocationGateway = (): ITestLocationGateway => {
        if (!this._testLocationGateway) this._testLocationGateway = new TestLocationGateway();
        return this._testLocationGateway;
    }

    getVolunteerGateway = (): IVolunteerGateway => {
        if (!this._volunteerGateway) this._volunteerGateway = new VolunteerGateway();
        return this._volunteerGateway;
    }

    getZipcodeGateway = (): IZipcodeGateway => {
        if (!this._zipcodeGateway) this._zipcodeGateway = new ZipcodeGateway();
        return this._zipcodeGateway;
    }


    getDateFacade = (): IDateFacade => {
        if (!this._dateFacade) this._dateFacade = new DateFacade();
        return this._dateFacade;
    }


}