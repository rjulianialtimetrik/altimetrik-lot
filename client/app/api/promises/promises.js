import Vue from 'vue'

class PromisesService {
    constructor() {

    }

    static list(){
        return Vue.http.get('promises')
    }

    static create(promise){
        return Vue.http.post('promises', promise)
    }

}

export default PromisesService
