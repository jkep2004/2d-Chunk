
class BlockState {
    
    static BLOCKS = [
        "AIR",
        "DIRT",
        "STONE",
    ]
    
    constructor (id, state) {
        this._id = id;
        this._state = state;
    }

    getId () {
        return this._id;
    }

    setState (newState) {
        if (!BLOCKS.contains(newState)) {
            console.error("Invalid BlockState set");
            return false;
        }

        this._state = newState;
        return true;
    }

    getState () {
        return this._state;
    }

}