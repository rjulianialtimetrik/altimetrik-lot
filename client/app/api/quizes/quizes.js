import Vue from 'vue'
/**
 *
 */
class QuizesService {
    constructor() {

    }
    /**
     *
     */
    static getQuestions() {
        return Vue.http.get('questions')
    }


}

export default QuizesService
