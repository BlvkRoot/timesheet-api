interface UserDTO {
    id?: string,
    name: string,
    email: string,
    password: string | null,
    phone?: string,
    address?: string,
    token?: string | null
}

export default UserDTO;