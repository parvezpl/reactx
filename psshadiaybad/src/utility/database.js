
import { Client, Account, ID, Databases } from 'appwrite';
import envConfig from './../appwrite/conf/conf';


export class DbService{

    client = new Client();
    account;
    databases;

    constructor () {
        this.client
        .setEndpoint(envConfig.appwriteUrl)
        .setProject(envConfig.appwriteProjectId)
        this.account = new Account(this.client);
        this.databases = new Databases(this.client);
    }

    async dbListDoc (){
        try {
        const promise = await this.databases.listDocuments(envConfig.appwriteDatabaseId, envConfig.appwriteCollectionId);
        
        return promise
        // if (promise) {
        //     promise.then(function (response) {
        //     return response.documents
        //     // const data =response.documents[0]
        // })  
        // }
        } catch (error) {
            console.log(error);
            throw error
        }
    }

}

const dbService = new DbService();

export default dbService