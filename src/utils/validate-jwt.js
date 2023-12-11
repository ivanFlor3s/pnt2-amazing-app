export const validateJwt = () => {
    return !!localStorage.getItem('token')
}