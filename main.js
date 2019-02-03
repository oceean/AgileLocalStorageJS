const rows = JSON.parse(localStorage.getItem("rows") || '{"Намечается":[],"Выполняется":[],"Выполнено":[]}');

app = new Vue({
    el: "#app",
    data: {
        styleMode: "night",
        drag: false,
        edit: {disablet: "yet"},
        rows: rows,
    },
    methods: {
        lookup: function() {
            localStorage.setItem("rows", JSON.stringify(this.rows));
        }
    }
})