var app = new Vue({
    el: "#root",

    data: {
        albums: []
        
    },

    mounted() {
        axios
            .get("https://flynn.boolean.careers/exercises/api/array/music")
            .then((response) => {
                for(let i = 0; i < response.data.response.length; i++){
                    let result = response.data.response[i];
                    console.log(result);
                    this.albums.push(result);
                };
            });
        console.log(this.albums);
        
    },

    methods: {

    }
});