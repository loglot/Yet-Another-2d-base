'use strict';

const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

export class DrawUtils {
    
    Bean(x, y, width, height) {

        ctx.beginPath();
        ctx.arc(x - 5, (y + 5) - (height / 2), width / 2 +5, 0, ( Math.PI/180 ) * 190, ( Math.PI/180 ) * 180,  false);
        ctx.fillStyle = "rgba(0, 0, 0, .1)";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(x - 5, (y + (height - (width / 2)) + 5) - (height / 2), width / 2 +5, 0, Math.PI / 1.06, false);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect((x - 10) - (width / 2), y - (height / 2), width + 10 , height - width / 2 + 10);
        ctx.fill();
        ctx.closePath();    


        ctx.beginPath();
        ctx.rect((x - 5) - (width / 2) , (y - 5) - (height / 2), width + 10 , height - width / 2 + 10);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(x, (y + (height - (width / 2))) - (height / 2) , width / 2 + 5, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(x, y - (height / 2), width / 2 +5, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();

        // Draw inside color of bean

        ctx.beginPath();
        ctx.rect(x - (width / 2), y - (height / 2), width, height - width / 2);
        ctx.fillStyle = "#afbfaf";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(x, (y + (height - (width / 2))) - (height / 2), width / 2, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(x, y - (height / 2), width / 2, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
        
    }

    Text(text, x, y, strokeColor = 'black', fillColor = 'white') {
        ctx.font = '80px Sans-serif';
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 8;
        ctx.lineJoin="miter";
        ctx.miterLimit=2;
        ctx.strokeText(text, x, y);
        ctx.fillStyle = fillColor;
        ctx.fillText(text, x, y);
    }

    Line(x1, y1, x2, y2, color) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineWidth = 20
        ctx.strokeStyle = color;
        ctx.lineCap = "round";
        ctx.stroke();
    }

}