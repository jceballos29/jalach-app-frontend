export const setUsername = (firstname, lastname) => {
    const number = Math.floor(Math.random() * 10);
    return firstname[0].toLowerCase() + lastname.toLowerCase() + number;
};
