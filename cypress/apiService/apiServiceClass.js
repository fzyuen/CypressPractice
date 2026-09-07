export class APIService {
    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com/users';
    }
//
    getUsers() {
        return cy.request({
            method: 'GET',
            url: this.baseUrl+'?page=2',
        });
    }

    createUser(userData) {
        return cy.request({
            method: 'POST',
            url: this.baseUrl,
            body: userData,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    updateUser(userId, userData) {
        return cy.request({
            method: 'PUT',
            url: `${this.baseUrl}/${userId}`,
            body: userData,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    deleteUser(userId) {
        return cy.request({
            method: 'DELETE',
            url: `${this.baseUrl}/${userId}`,
        });
    }   

}