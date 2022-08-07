import { getRoutes } from "../metadata";
import { writable } from "svelte/store";

export const routes = writable<Route[]>()
export const locale = writable<string>('en')

type Route = {
    path: string,
    nav_label: string,
    title: string
}


// Set the Routes for the chosen Locale
export const setRoutes = (localeString: string = 'en') => {
    locale.set(localeString)
    routes.set(getRoutes(localeString))
}