'use strict';

// rename this to Player.js

export class Camera {

    x;
    y;
    mouseX
    mouseY
    mouseXSto
    mouseYSto

    constructor(x, y) {
        this.x = x
        this.y = y
    }

    update() {
        this.keyMan.camY = this.y
        this.keyMan.camX = this.x
    }

}
