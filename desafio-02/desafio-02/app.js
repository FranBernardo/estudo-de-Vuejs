new Vue({
    el: '#desafio',
    data: {
        valor: ''
    }, methods: {
        alert (){
            alert("clicou no botao!")
        },
        alterar(event){
            this.valor = event.target.value
        }

    }
})