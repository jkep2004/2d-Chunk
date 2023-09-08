class Block {

    static FOREGROUND = 1;
    static BACKGROUND = 0;

    constructor (id, pos_x, pos_y, blockType = "AIR") {
        this._id = id;
        this._pos = {
            x: pos_x,
            y: pos_y,
        }
        this._blockState = new BlockState (this._id, blockType, Block.FOREGROUND);
        this._background = new BlockState (this._id, blockType, Block.BACKGROUND);
    }

    draw () {
        switch (this._blockState.getState()) {
            case "DIRT":
                noStroke();
                fill(139, 69, 19);
                square(this._pos.x * Chunk.SIZE, this._pos.y * Chunk.SIZE, width / 16);
                noFill();
                break;
            case "STONE":
                noStroke();
                fill(100, 100, 100);
                square(this._pos.x * Chunk.SIZE, this._pos.y * Chunk.SIZE, width / 16);
                noFill();
                break;
        }
    }

}