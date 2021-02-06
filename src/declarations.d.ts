declare module "*.png" {
    const content: string;
    export default content;
}

declare module "*.txt" {
    const value: string;
    export default value;
}


declare module "*.json" {
    const value: any;
    export default value;
}
