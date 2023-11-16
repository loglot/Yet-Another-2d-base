'use strict';

import { Game } from "./imports/import.js"

class Main {

    game = new Game()

    async startGame() {
        while (true) {
            this.updateGame();
            
            this.game.gameDisplayer.drawGameFrame()
            await this.sleep(1000/60);
        }
    } 

    updateGame() {

        // Update variables

        // Update input
        this.game.keyManager.update()
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}

var game = new Main();

game.startGame();