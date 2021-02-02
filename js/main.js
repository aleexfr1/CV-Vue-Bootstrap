var url = "./js/datos.json";
var app = new Vue({
    el: "#app",

    mounted: function(){
        this.getInfo();
    },
    data: {
        datos: []
    },
    
    methods: {
        getInfo: function(){
            axios.get("./js/datos.json").then((response) => {
                this.datos = response.data
                //console.log(this.datos.ExperienciaLaboral[0].Trabajo)
            })
            .catch(function (error){
                console.log(error);
            });
        }
    }
});