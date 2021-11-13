const cookieHandler = {
    getAll() {
        const objCookie = {};
        document.cookie.split('; ')
            .forEach(item => {
                objCookie[item.split('=')[0]] = item.split('=')[1];
            });
        return objCookie;
    },
    toSessionStorage() {
        document.cookie.split('; ')
            .forEach(item =>
                sessionStorage.setItem(item.split('=')[0], item.split('=')[1])
            );
    },
    flush() {
        document.cookie.split('; ').forEach(x => {
            document.cookie = `${x.split('=')[0]}=; expires = Thu, 01 Jan 1970 00:00:00 UTC;`
        })
    }
}


// export { cookieHandler };
export {
    cookieHandler
};
