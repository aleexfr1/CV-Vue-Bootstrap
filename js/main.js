var url = "./js/datos.json";
var app = new Vue({
    el: "#app",

    mounted: function(){
        this.getInfo();
    },
    data () { // Para cambiar el idioma de los datos del CV
        return {
            datos: [],
            es: true,
            en: false
        }
     },
    
    methods: {
        cambioEN: function ()  {
            this.en = true;
            this.es = false;
        },

        cambioES: function () {
            this.en = false;
            this.es = true;

        },
        getInfo: function(){
            axios.get("./js/datos.json").then((response) => {
                this.datos = response.data

            })
            .catch(function (error){
                console.log(error);
            });
        }
    }
});