export interface IDateFacade {
    getDate(date: Date): string;

    getMonth(date: Date): string;

    getYear(date: Date): string;

    getHours(date: Date): string;

    getMinutes(date: Date): string;

    getSeconds(date: Date): string;

    getHourToNow(previousDate: Date): string;

    getDaysToNow(previousDate: Date): string;

    getMonthsToNow(previousDate: Date): string;

    getUTC(): string;

    getCurrentLocation(): string;

    format(date: Date): string;

    formatToDynamic(date: Date, type?: string): string;

    isValidDate(date: Date): boolean;

    toUTC(date: Date): number;

    differenceBetweenInMonths(olderDate: Date, newestDate: Date): string;

    differenceBetweenInYears(olderDate: Date, newestDate: Date): string;

    differenceBetweenInDays(olderDate: Date, newestDate: Date): string;

    differenceBetweenInHours(olderDate: Date, newestDate: Date): string;

    differenceBetweenInMinutes(olderDate: Date, newestDate: Date): string;

    differenceBetweenInSeconds(olderDate: Date, newestDate: Date): string;

    currentTime(date: Date): string;

    isDateToday(date: Date): boolean;

    isDateInCurrentMonth(date: Date): boolean;

    isDateBetween(initial: Date, final: Date, comparison: Date): boolean;

    convertStringToDate(date: string): Date;

    getISOString(date: Date): string;
}