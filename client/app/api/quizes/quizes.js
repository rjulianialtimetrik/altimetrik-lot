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

    static create(question) {
        return Vue.http.post('questions', question)
    }


}

export default QuizesService
