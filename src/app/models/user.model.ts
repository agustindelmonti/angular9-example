export interface UserResponseInterface {
    user: UserInterface
}



export interface UserInterface {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;
}


export class User {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;
}