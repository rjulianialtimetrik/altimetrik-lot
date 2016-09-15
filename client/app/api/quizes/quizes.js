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

    static delete(question) {
        return Vue.http.delete('questions/'+question._id)
    }

    /**
     * Sends quizResults to the server via POST, returning the promise. This
     * should normally store the results.
     */
    static saveResults(quizResults) {
        return Vue.http.post('quizes', quizResults)
    }


}

export default QuizesService
