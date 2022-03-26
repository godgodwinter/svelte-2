import { writable } from 'svelte/store';

export const count = writable(1);
export const baseUrl = writable('http://localhost:8000');