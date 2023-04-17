class Storagex {

    static key = "searchedUsers";

    static getSearchedUserFromStorage() {
        let users;
        if (localStorage.getItem(this.key) == null) {
            users = [];
        } else {
            users = JSON.parse(localStorage.getItem(this.key));
        }
        return users;
    }

    static checkUser(username) {
        const users = this.getSearchedUserFromStorage();
        if (!users.includes(username)) {
            return true;
        }
        return false;
    }

    static addSearchedUserToStorage(username) {
        //engindemirog
        const users = this.getSearchedUserFromStorage();
        if(this.checkUser(username)){
            users.push(username.trim());
            localStorage.setItem(this.key, JSON.stringify(users));
        }
    }

    static clearAllSearchedUserFromStorage(){
        localStorage.removeItem(this.key);
    }
}