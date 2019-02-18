app = new Vue({
    el: "#app",
    data: {
        styleMode: localStorage.getItem("styleMode") || "night",
        drag: false,
        edit: {disabled: "yet"},
        rows: JSON.parse(localStorage.getItem("rows") || '{"Thinking":[],"Working":[],"Complited":[]}'),
    },
    methods: {
        styleMode: function (val) {
            localStorage.setItem("styleMode", val);
        },
        lookup: function (val) {
            this.edit = null;
            for (row_index in val) {
                if (val[row_index].t == "") {
                    val.slice(row_index, 1);
                }
            }
            localStorage.setItem("rows", JSON.stringify(Object.assign([], val)));
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