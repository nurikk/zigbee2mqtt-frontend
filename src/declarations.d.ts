declare module "*.png" {
    const content: string;
    export default content;
}

declare module "*.txt" {
    const value: string;
    export default value;
}


declare module "*.json" {
    const value: object;
    export default value;
}


declare module "*.js?raw" {
    const value: string;
    export default value;
}
