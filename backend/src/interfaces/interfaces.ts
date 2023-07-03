

export interface newVisitor {
    credential: string;
    fullName: string;
    departmentVisitor: string;
    status: string
}


export interface newUser {
    credential: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    roleId: number;
    departmentId: number;
}

export interface loginForm {
    email: string;
    password: string;
}
