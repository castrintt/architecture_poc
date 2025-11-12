import {injectable} from "inversify";
import type {IDateFacade} from "@shared/facade/contracts/date.interface";

@injectable()
export class DateFacade implements IDateFacade {

    getDate(date: Date): string {
        return this.padZero(date.getDate());
    }

    getMonth(date: Date): string {
        return this.padZero(date.getMonth() + 1);
    }

    getYear(date: Date): string {
        return date.getFullYear().toString();
    }

    getHours(date: Date): string {
        return this.padZero(date.getHours());
    }

    getMinutes(date: Date): string {
        return this.padZero(date.getMinutes());
    }

    getSeconds(date: Date): string {
        return this.padZero(date.getSeconds());
    }

    getHourToNow(previousDate: Date): string {
        const now = new Date();
        const diff = Math.abs(now.getTime() - previousDate.getTime());
        return Math.floor(diff / (1000 * 60 * 60)).toString();
    }

    getDaysToNow(previousDate: Date): string {
        const now = new Date();
        const diff = Math.abs(now.getTime() - previousDate.getTime());
        return Math.floor(diff / (1000 * 60 * 60 * 24)).toString();
    }

    getMonthsToNow(previousDate: Date): string {
        const now = new Date();
        const yearsDiff = now.getFullYear() - previousDate.getFullYear();
        const monthsDiff = now.getMonth() - previousDate.getMonth();
        return (yearsDiff * 12 + monthsDiff).toString();
    }

    getUTC(): string {
        const now = new Date();
        return now.toISOString();
    }

    getCurrentLocation(): string {
        return Intl.DateTimeFormat().resolvedOptions().locale;
    }

    format(date: Date): string {
        return `${this.padZero(date.getDate())}-${this.padZero(date.getMonth() + 1)}-${date.getFullYear()} ${this.padZero(date.getHours())}:${this.padZero(date.getMinutes())}:${this.padZero(date.getSeconds())}`;
    }

    formatToDynamic(date: Date, type?: string): string {
        if (type) {
            return type.replace('YYYY', date.getFullYear().toString()).
                replace('MM', this.padZero(date.getMonth() + 1)).
                replace('DD', this.padZero(date.getDate())).
                replace('HH', this.padZero(date.getHours())).
                replace('mm', this.padZero(date.getMinutes())).
                replace('ss', this.padZero(date.getSeconds()));
        }
        return `${date.getFullYear()}-${this.padZero(date.getMonth() + 1)}-${this.padZero(date.getDate())} ${this.padZero(date.getHours())}:${this.padZero(date.getMinutes())}:${this.padZero(date.getSeconds())}`;
    }

    isValidDate(date: Date): boolean {
        return !isNaN(date.getTime());
    }

    toUTC(date: Date): number {
        return Date.UTC(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds()
        );
    }

    differenceBetweenInMonths(olderDate: Date, newestDate: Date): string {
        const yearsDiff = newestDate.getFullYear() - olderDate.getFullYear();
        const monthsDiff = newestDate.getMonth() - olderDate.getMonth();
        return (yearsDiff * 12 + monthsDiff).toString();
    }

    differenceBetweenInYears(olderDate: Date, newestDate: Date): string {
        return (newestDate.getFullYear() - olderDate.getFullYear()).toString();
    }

    differenceBetweenInDays(olderDate: Date, newestDate: Date): string {
        const diff = newestDate.getTime() - olderDate.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24)).toString();
    }

    differenceBetweenInHours(olderDate: Date, newestDate: Date): string {
        const diff = newestDate.getTime() - olderDate.getTime();
        return Math.floor(diff / (1000 * 60 * 60)).toString();
    }

    differenceBetweenInMinutes(olderDate: Date, newestDate: Date): string {
        const diff = newestDate.getTime() - olderDate.getTime();
        return Math.floor(diff / (1000 * 60)).toString();
    }

    differenceBetweenInSeconds(olderDate: Date, newestDate: Date): string {
        const diff = newestDate.getTime() - olderDate.getTime();
        return Math.floor(diff / 1000).toString();
    }

    currentTime(date: Date): string {
        return `${this.padZero(date.getHours())}:${this.padZero(date.getMinutes())}:${this.padZero(date.getSeconds())}`;
    }

    isDateToday(date: Date): boolean {
        const today = new Date();
        return (
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
        );
    }

    isDateInCurrentMonth(date: Date): boolean {
        const today = new Date();
        return date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth();
    }

    isDateBetween(initial: Date, final: Date, comparison: Date): boolean {
        return comparison >= initial && comparison <= final;
    }

    convertStringToDate(date: string): Date {
        const parsedDate = new Date(date);
        return this.isValidDate(parsedDate) ? parsedDate : new Date();
    }

    getISOString(date: Date): string {
        return date.toISOString();
    }

    private padZero(value: number): string {
        return value < 10 ? `0${value}` : value.toString();
    }
}