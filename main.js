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
            for (row_index in rows) {
                if (!rows[row_index].t) {
                    rows.splice(row_index, 1);
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