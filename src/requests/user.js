export const user = (token) => {
    fetch(`${process.env.REACT_APP_USER_URL}`, {
        method: "GET",
        headers: {
            "Authorization": ` Token ${token}`
        }
    })
        
}