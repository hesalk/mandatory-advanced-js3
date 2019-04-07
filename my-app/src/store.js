import { BehaviorSubject } from "rxjs";

export const token$ = new BehaviorSubject(null);

export function updatetoken(newToken){
    token$.next(newToken)
}