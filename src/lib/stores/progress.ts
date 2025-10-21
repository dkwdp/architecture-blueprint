import { writable } from 'svelte/store';

type Progress = Record<string, boolean>; // key: `${mapId}:${levelId}`

const key = 'learnmaps:progress';
const initial:Progress = JSON.parse(localStorage.getItem(key) || '{}');

export const progress = writable<Progress>(initial);
progress.subscribe(v => localStorage.setItem(key, JSON.stringify(v)));

export const isUnlocked = (prereq?:string[], p?:Progress) => !prereq?.length || prereq.every(id => (p ?? initial)[id]);
