import { Client, Account, ID } from 'appwrite';
import conf from './../conf/conf';


export class AuthService{
    client = new Client();
    account;
    constructor () {
        this.client
        .setEndpoint(conf.appweiteUrl)
        .setProject(conf.appweiteProjectId)
        this.account = new Account(this.client);
    }
    async createAccount({email, password, name}){
        console.log(name);
        try {
                const userAccount = await this.account.create(ID.unique(), email, password, name)
                console.log(userAccount);
            if (userAccount) {
                // call another method.............
                return this.login({email, password})
            } else {
                console.log(userAccount);
                return userAccount
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async login({email, password}){
        console.log(email, password);
        try {
            const  data = await this.account.createEmailSession(email, password);
            console.log(data);
            return data

        } catch (error) {
            console.log(error);
            throw error
        }
    }
    async getCurrentUser(){
        try {
        return await this.account.get();
        } catch (error) {
            throw error
        }
        return null;
    }

    async Logout(){
        console.log("click");
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error
        }
    } 
}

const authService = new AuthService();

export default authService


