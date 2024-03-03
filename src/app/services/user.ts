export interface User {
    name: string;
    email: string;
    password: string;
    sector?: string;
    role?: string;
    firebaseId?: string;
    healthPlan?: string;
    dentalPlan?: string;

}
