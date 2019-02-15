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
            for (row_index in this.rows) {
                if (!this.rows[row_index].t) {
                    this.rows.slice(row_index, 1);
                }
            }
            localStorage.setItem("rows", JSON.stringify(this.rows));
        }
    }
})

onmousedown = (e) => {
    let logic = false;
    for (turn of e.path) {
        findClass = "sticker";
        if (turn.className && turn.className.includes(findClass)) {
            logic = true;
        }
    }
    if (!logic) {
        app.lookup()
    }
};