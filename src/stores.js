import { writable } from 'svelte/store';

const BASE_URL = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : 'http://localhost:8000/'
const BASE_URLFE = import.meta.env.VITE_API_URLFE ? import.meta.env.VITE_API_URLFE : 'http://localhost:3000/'
export const count = writable(1);
export const baseUrl = writable(BASE_URL);
export const baseUrlFE = writable(BASE_URLFE);