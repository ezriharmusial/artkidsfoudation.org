import { getRoutes, getProjects } from "../metadata";
import { get, writable } from "svelte/store";

export const routes = writable<Route[]>()
export const projects = writable<Route[]>()
export const locale = writable<string>('en')
export const currentRoute= writable<number>(-1)
export const currentProject= writable<number>(-1)
export const loading = writable<boolean>(false)

type Route = {
    path: string,
    nav_label: string,
    title: string
}

// Set Route index
export const setRoute = (index: number) => {
    // as long as index is smaller then $routes.length
    if(index <= get(routes).length && index >= 0)
        currentRoute.set(index)
}

// Set the Routes for the chosen Locale
export const setRoutes = (localeString: string = 'en') => {
    locale.set(localeString)
    routes.set(getRoutes(localeString))
}
// Set Project index
export const setProject = (index: number) => {
    // as long as index is smaller then $projects.length
    if(index <= get(projects).length && index >= 0)
        currentProject.set(index)
}

// Set the Projects for the chosen Locale
export const setProjects = (localeString: string = 'en') => {
    locale.set(localeString)
    routes.set(getProjects(localeString))
}

setRoutes()
setProjects()