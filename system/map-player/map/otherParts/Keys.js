const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

export class Keys {
    camera;
    //[name] = new Image();


    constructor(camera){
        this.camera = camera
        //this.[name].src = 'Path-To-Image';

    }
    drawKeys() {
        //ctx.drawImage(this.[name], "x position" + this.camera.x, "y position" + this.camera.y)
    }
    
}