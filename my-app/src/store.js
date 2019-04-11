import { BehaviorSubject } from "rxjs";

export const token$ = new BehaviorSubject(null);

export function updatetoken(newToken){
    localStorage.setItem('test',newToken);
    token$.next(newToken)
}