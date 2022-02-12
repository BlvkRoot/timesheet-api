interface UserDTO {
    name: string,
    email: string,
    password: string | null,
    phone: string,
    address?: string
}

export default UserDTO;