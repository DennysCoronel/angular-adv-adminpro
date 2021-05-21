export class Usuario {


  constructor(
    public nombreUsuario: string,
    public email: string,
    public nombres: string,
    public apellidos: string,
    public role?: string,
    public img?: string,
    public google?: boolean,
    public estado?: boolean,
    public password?: string
    ) { }
}
