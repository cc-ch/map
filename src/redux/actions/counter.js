/*action*/

export const BEIJING = "charts/BEIJING";
export const SHANGHAI = "charts/SHANGHAI";
export const NANJING = "charts/NANJING";
export const RESET = "charts/RESET";

export function beijing() {
    return { type: BEIJING }
}

export function shanghai() {
    return { type: SHANGHAI }
}

export function nanjing() {
    return { type: NANJING }
}

export function reset() {
    return { type: RESET }
}