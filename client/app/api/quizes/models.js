
/**
 * This class represents a question for our quiz
 */
class Question {
    constructor(data) {
        Object.assign(this, data)
        if (!this.options){
            this.options = []
        }
    }
}

class Option {
    constructor(data) {
        Object.assign(this, data)
    }
}

module.exports = {
    Question,
    Option
}
