import { capitalizeString } from "./string_function"
const cap = capitalizeString("hello!");

console.log(cap);
// hello!

const capitalizeString = (string) => {
    return StorageManager.charAt(0).toUpperCase() + string.slice(1);
}

export { capitalizeString };

export const foo = "bar";
export const bar = "foo";