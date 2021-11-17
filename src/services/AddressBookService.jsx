import config from '../config/config';
import AxiosService from './AxiosService'

export default class AddressBookService {
    baseUrl = config.baseUrl;

    addContact(data) {
        return AxiosService.postService(`${this.baseUrl}create`, data);
    }
    getAllContacts() {
        return AxiosService.getService(`${this.baseUrl}`);
    }
    deleteContact(id) {
        return AxiosService.deleteService(`${this.baseUrl}delete/${id}`);
    }
    getContact(id) {
        return AxiosService.getService(`${this.baseUrl}get/${id}`);
    }
    updateContact(data,id) {
        return AxiosService.putService(`${this.baseUrl}update/${id}`, data);
    }
    getContactsByCity(city){
        return AxiosService.getService(`${this.baseUrl}get/city/${city}`);
    }
    getContactsByState(state){
        return AxiosService.getService(`${this.baseUrl}get/state/${state}`);
    }
}