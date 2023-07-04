export interface IModel {
    id: number;
    create_on: string;
    update_on: string;
}

export interface INote extends IModel {
    description: string;
    status: boolean;
}

export interface IUser extends IModel {
    name: string;
    username: string;
    notes: INote[];
}

export enum Dias{"LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO", "DOMINGO"}

export interface IIdentify<T,U>{
    value: T;
    message: U;
}

export interface Dictionary<T>{
    [Key: string]:T;
}