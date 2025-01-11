class CanvasPie {
    constructor(width, height) {
        this.canvas = document.createElement("canvas");
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx = this.canvas.getContext("2d");

        this.wrap = "canvas-pie-wrap";
    }

    scene(renderFunction) {
        // Вызов переданной функции для рендера данных
        renderFunction(this.ctx, this.canvas, this.canvas.width, this.canvas.height);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    init() {
        if( document.querySelector(`#${this.wrap}`) ) {
            document.querySelector(`#${this.wrap}`).appendChild(this.canvas);
        } else {
            const wrap = document.createElement('div');
            wrap.id = this.wrap;
            wrap.appendChild(this.canvas);
            document.body.prepend(wrap);
        }
    }
}