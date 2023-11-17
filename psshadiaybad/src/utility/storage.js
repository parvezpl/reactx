import { Client, Account, ID, Storage } from 'appwrite';
import envConfig from './../appwrite/conf/conf';




export class StoreService{
    client = new Client();
    storage;

    constructor () {
        this.client
        .setEndpoint(envConfig.appwriteUrl)
        .setProject(envConfig.appwriteProjectId)
        this.storage = new Storage(this.client);
    }

    async storeFilesList (){
        try {
        const promise = await this.storage.listFiles(envConfig.appwriteBucketId);
        if (promise) {
            return promise.files
        }
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    async filePriview(id){
        try {
            const result = this.storage.getFilePreview(envConfig.appwriteBucketId, id);
            console.log(result.href);
            return result.href
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    async fileUpload(data){       
        try {
            const result = this.storage.createFile(envConfig.appwriteBucketId, ID.unique(), data);
            console.log(result);
            result.then(function (response) {
                console.log(response)})
            return result
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    async storeFilesDelete (fileid){
        try {
        const promise = await this.storage.deleteFile(envConfig.appwriteBucketId, fileid);
        if (promise) {
            return promise
        }
        } catch (error) {
            console.log(error);
            throw error
        }
    }

}




const storeService = new StoreService();

export default storeService