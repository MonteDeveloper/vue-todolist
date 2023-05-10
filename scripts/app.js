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
            ]
        }
    },
    mounted() {
        console.log(this.toDoList);
    },
    methods: {
        
    }
}).mount('#app')