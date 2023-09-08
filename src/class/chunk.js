class Chunk {
    static SIZE = 16;
    constructor (id, pos_x, pos_y) {

        this._pos = {
            x: pos_x,
            y: pos_y,
        }

        this._blocks = [];

        for (let y = 0; y < Chunk.SIZE; y ++) {
            this._blocks.push(new Array ());

            for (let x = 0; x < Chunk.SIZE; x ++) {
                let blockType;

                if (this._pos.y + y > 5) {
                    blockType = "STONE";
                } else {
                    blockType = "DIRT";
                }

                this._blocks[y][x] = new Block (
                    x + (y * Chunk.SIZE), 
                    (this._pos.x * Chunk.SIZE) + x, 
                    (this._pos.y * Chunk.SIZE) + y, 
                    blockType
                );
            }

        }
    }

    draw () {
        for (let layer of this._blocks) {
            for (let block of layer) {
                block.draw();
            }
        }
    }
}