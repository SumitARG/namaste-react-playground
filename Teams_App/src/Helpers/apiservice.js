export const getUsersData = (userNames) => {
    return Promise.all(
        userNames.map(async (userName) => {
            return (await fetch(`https://api.github.com/users/${userName}`)).json();
        })
    )
}