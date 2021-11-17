import config from '../config/config';
import AxiosService from './AxiosService'

export default class AddressBookService {
    baseUrl = config.baseUrl;
    addContact(data) {
        return AxiosService.postService(`${this.baseUrl}/addressbookservice/create`, data);
    }
    getAllContacts() {
        return AxiosService.getService(`${this.baseUrl}/addressbookservice/`);
    }
    deleteContact(data) {
        return AxiosService.deleteService(`${this.baseUrl}/addressbookservice/delete/`+data);
    }
    getContact(id) {
        return AxiosService.getService(`${this.baseUrl}/addressbookservice/get/${id}`);
    }
    updateContact(data,id) {
        return AxiosService.putService(`${this.baseUrl}/addressbookservice/update/${id}`, data);
    }
    getContactsByCity(city){
        return AxiosService.getService(`${this.baseUrl}/addressbookservice/get/city/${city}`);
    }
    getContactsByState(state){
        return AxiosService.getService(`${this.baseUrl}/addressbookservice/get/state/${state}`);
    }
}