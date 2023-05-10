const { createApp } = Vue;

createApp({
    data() {
        return {
            toDoList: [
                {
                    text: "Finire i compiti di matematica",
                    done: false
                },
                {
                    text: "Fare la spesa",
                    done: true
                },
                {
                    text: "Pulire la camera",
                    done: true
                },
                {
                    text: "Prenotare biglietti aereo per vacanza",
                    done: false
                },
                {
                    text: "Fare gli auguri a zia Peppina",
                    done: true
                }
            ],
            newToDo: ""
        }
    },
    mounted() {
        //creo un margine per far partire la mia pagina dopo l'header con fixed top
        this.updateMarginTop();
        window.addEventListener('resize', this.updateMarginTop);
    },
    methods: {
        removeToDoAtIndex(toDoIndex){
            this.toDoList.splice(toDoIndex, 1);
        },
        addNewToDo(){
            this.toDoList.push(
                {
                    text: this.newToDo,
                    done: false
                }
            );
            this.newToDo = "";
        },
        updateMarginTop() {
            var fixedElement = this.$el.querySelector('.fixed-top');
            var pageContent = this.$el.querySelector('#page-content');
            pageContent.style.marginTop = fixedElement.offsetHeight + 'px';
        }
    }
}).mount('#app')