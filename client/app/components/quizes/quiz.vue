<template lang="html">
    <section>
        <div class="col-xs-12 col-md-7">
            <div class="row">
                <img src="/img/hand-on-tablet.jpg" class="img-responsive"/>
            </div>

        </div>
        <div class="col-xs-12 col-md-5 ">

            <h1>Quiz for {{ person.name }}</h1>
            <h3>Question {{ index }} of {{ questions.length }}</h3>
            <q-question v-for="(qIndex, q) in questions" :question="q" v-on:question-answered="answer" v-show="index=== qIndex+1"></q-question>
            <div class="" v-show="questionAnswered">
                <div class="alert alert-success bg-green" v-if="lastAnswer && lastAnswer.correct">
                    <i class="fa fa-thumbs-up fa-2x"></i>&nbsp; Yay! That's the correct answer!
                </div>
                <div class="panel widget" v-if="lastAnswer && !lastAnswer.correct">
                    <div class="panel-body">

                        <blockquote v-for="option in lastQuestion.options | filterBy true in 'correct'">
                            {{ option.text }}
                        </blockquote>
                        <p class="text-bold">
                            That's the correct answer. <i class="fa fa-thumbs-down text-danger"></i>&nbsp; Looks like you've missed it :(
                        </p>
                    </div>


                </div>
            </div>

            <!-- show the next question button only if there's a next question -->
            <div class="text-right" >
                <button v-show="questionAnswered && index < questions.length" type="button" name="button" role="button" v-on:click="nextQuestion" class="btn btn-primary">Next Question</button>
                <button v-show="questionAnswered && index == questions.length" type="button" name="button" role="button" v-on:click="finish" class="btn btn-success btn-lg">Finish Quiz!</button>
            </div>


        </div>
    </section>

</template>

<script>
import Question from './q-question.vue'
import { setAnswers } from '../../state/actions'
import { getAnswers, getPerson } from '../../state/getters'
import QuizService from '../../api/quizes/quizes'
/**
 * Implements the quiz
 */
export default {
    data() {
        return {
            questionAnswered: false,
            lastQuestion: null,
            lastAnswer: null,
            index: 1,
            answers: [],
            questions: []
        };
    },
    computed: {},
    ready() {
        console.log(this.person)
    },
    vuex: {
        getters: {
            getAnswers,
            person: getPerson
        },
        actions: {
            setAnswers
        }
    },
    methods: {
        /**
         * This method marks the user's question as answered, stores the answer
         * and prepares the view for a next step
         * @param  {api.quizes.models.Question} question [description]
         * @param  {api.quizes.models.Option} option   [description]
         * @return {undefined}          [description]
         */
        answer: function(question, option) {
            if (!this.questionAnswered) {
                console.debug('The user responded: ', option.text, ' to question ', (this.index + 1), ' which is ', option.correct)
                this.questionAnswered = true
                this.lastQuestion = question
                this.lastAnswer = option
                this.answers.push({ question: question, answer: option })
            }
        },
        /**
         * This method makes the wizard advance to the next question
         * @return {[type]} [description]
         */
        nextQuestion: function() {
            if (this.questionAnswered) {
                this.index++;
                this.questionAnswered = false
            }

        },
        /**
         * Stores the current answers in the application's state and redirects
         * to the finish page.
         * @return {undefined} This method does not return anything
         */
        finish: function() {
            this.setAnswers(this.answers)
            this.$router.go({name: 'quiz-finished'})
        },
        /**
         * Returns an array of randomly selected questions taken from questions,
         * with a maximum size of {size}
         * @param  {Array} questions An array containing questions
         * @param  {Number} size      The maximum number of questions being returned
         * @return {Array}           An array of randomly picked items taken
         * from questions, with a max size of {size}
         */
        shuffleQuestions: (questions, size) => {
            let result = []
            // there are  enough questions to pick some up

            while (result.length < size && result.length < questions.length) {
                //find a random item
                let candidateIndex = Math.floor(Math.random()*questions.length)
                let candidate = {}
                //the following code will get the random item from
                //the array and, in case it's already in our result, it will
                //look for the immediate next question in the array
                do {
                    candidate = questions[candidateIndex];
                    candidateIndex = (candidateIndex + 1)%questions.length
                } while (result.filter(q => q._id == candidate._id).length > 0)
                result.push(candidate)
            }
            return result
        }
    },
    components: {
        'q-question': Question
    },
    created: function(){
        let self = this
        //the user has not filled in data, so let's take him/her back
        if (!this.person.name || !this.person.email) {
            this.$router.go({name: 'quiz-start'})
            return;
        }
        QuizService.getQuestions().then((response)=>{
            self.questions = self.shuffleQuestions(response.body, 10)
        }, (response) => {
            //error callback
            console.log(response)
        })
    }
};
</script>

<style lang="css">
</style>
