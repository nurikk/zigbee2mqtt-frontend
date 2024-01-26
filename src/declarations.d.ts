declare module "*.png" {
    const content: string;
    export default content;
}



declare module "*?url" {
    const value: string;
    export default value;
}

declare module "*?raw" {
    const value: string;
    export default value;
}