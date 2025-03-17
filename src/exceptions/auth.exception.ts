export class AuthError extends Error {
    name: string = this.constructor.name; 
    stack: string = "Authentication Error \n" + this.stack; 
}