import moveObjects from './moveObjects';
import playerFire from './player-fire';

const fieldWidth = 500;
const tankWidth = 30;

const initialState = {
    field: {
        width: fieldWidth,
        height: fieldWidth,
    },
    walls: [
        {
            width: 100,
            height: 10,
            posX: 0,
            posY: 0,
            type: 'brick'
        },
        {
            width: 30,
            height: 100,
            posX: 200,
            posY: 100,
            type: 'steel'
        }
    ],
    bullets: [],
    playerTank: {
        moving: false,
        width: tankWidth,
        posX: (fieldWidth - tankWidth) / 2,
        posY: fieldWidth - tankWidth,
        direction: 'up'
    },
    computerTank: {
        width: tankWidth,
        posX:  (fieldWidth - tankWidth) / 2,
        posY: 0,
        direction: 'down'
    }
}

const reducer = (state = initialState, action) => {
    // console.log(action.type);
    switch (action.type) {
        case "MOVE_OBJECTS":
            return moveObjects({ ...state }, action);
        case "START_MOVING": 
            return {
                ...state,
                playerTank: {
                    ...state.playerTank,
                    moving: true,
                }
            }
        case "STOP_MOVING": 
            return {
                ...state,
                playerTank: {
                    ...state.playerTank,
                    moving: false,
                }
            }
        case "UPDATE_MOVING_DIRECTION":
            return {
                ...state,
                playerTank: {
                    ...state.playerTank,
                    direction: action.payload
                }
            }
        case "PLAYER_FIRE":
            return playerFire({ ...state } , action);
        default:
            return state; 
    }
} 

export default reducer;