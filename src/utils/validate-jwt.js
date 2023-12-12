export const validateJwt = () => {
    return !!sessionStorage.getItem('token')
}