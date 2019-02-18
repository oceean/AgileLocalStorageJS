app = new Vue({
    el: "#app",
    data: {
        styleMode: localStorage.getItem("styleMode") || "night",
        drag: false,
        edit: {disabled: "yet"},
        rows: JSON.parse(localStorage.getItem("rows") || '{"Thinking":[],"Working":[],"Complited":[]}'),
    },
    watch: {
        styleMode: function (val) {
            localStorage.setItem("styleMode", val);
        }
    },
    methods: {
        lookup: function () {
            this.edit = null;
            for (row_index in this.rows) {
                if (this.rows[row_index].t == "") {
                    this.rows.slice(row_index, 1);
                }
            }
            localStorage.setItem("rows", JSON.stringify(Object.assign({}, this.rows)));
        }
    }
})

onmousedown = (e) => {
    let logic = false;
    for (turn of e.path) {
        findClass = "sticker";
        if (turn.className && turn.className.includes && turn.className.includes(findClass)) {
            logic = true;
        }
    }
    if (!logic) {
        app.lookup()
    }
};