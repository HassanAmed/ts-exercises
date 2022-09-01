declare module 'str-utils' {
    type StrUtil = (input: string) => string;

    export const strReverse: StrUtil;
    export const strToLower: StrUtil;
    export const strToUpper: StrUtil;
    export const strRandomize: StrUtil;
    export const strInvertCase: StrUtil;
}
// instead of  ex11 in exercises for detail go to https://typescript-exercises.github.io/#exercise=11