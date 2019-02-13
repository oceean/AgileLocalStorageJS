const rows = JSON.parse(localStorage.getItem("rows") || '{"Thinking":[],"Working":[],"Complited":[]}');

app = new Vue({
    el: "#app",
    data: {
        styleMode: "night",
        drag: false,
        edit: {disabled: "yet"},
        rows: rows,
    },
    methods: {
        lookup: function() {
            this.edit = null;
            localStorage.setItem("rows", JSON.stringify(this.rows));
        }
    }
})

onmousedown = (e) => {
    let logic = false;
    for (turn of e.path) {
        findClass = "box sticker";
        if (turn.className == findClass) {
            logic = true;
        }
    }
    if (!logic) {
        app.lookup()
    }
};