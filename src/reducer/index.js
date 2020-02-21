import moveObjects from './moveObjects';
import fire from './player-fire';

const fieldWidth = 500;
const tankWidth = 30;

const initialState = {
    field: {
        width: fieldWidth,
        height: fieldWidth,
        pause: false,
        gameOver: true,
        score: 0,
        lifes: 2,
    },
    walls: [
        {
            width: 90,
            height: 30,
            posX: 0,
            posY: 30,
            type: 'brick'
        },
        {
            width: 30,
            height: 80,
            posX: 60,
            posY: 60,
            type: 'brick'
        },
        {
            width: 30,
            height: 240,
            posX: 340,
            posY: 50,
            type: 'brick'
        },
        {
            width: 260,
            height: 30,
            posX: 240,
            posY: 140,
            type: 'brick'
        },
        {
            width: 200,
            height: 30,
            posX: 0,
            posY: 210,
            type: 'brick'
        },
        {
            width: 40,
            height: 40,
            posX: 260,
            posY: 210,
            type: 'steel'
        },
        {
            width: 30,
            height: 180,
            posX: 100,
            posY: 320,
            type: 'brick'
        },
        {
            width: 200,
            height: 30,
            posX: 300,
            posY: 390,
            type: 'brick'
        },
    ],
    bullets: [],
    playerTank: {
        canShoot: true,
        shootingDelay: 500,
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
    },
    form: {
        nickname: '',
        password: '',
        link: '',
        authorized: false,
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "MOVE_OBJECTS":
            if(state.field.pause) {
                return state;
            } else {
                return moveObjects({ ...state }, action);
            }
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
            if(state.field.pause) {
                return state;
            } else {
                return {
                    ...state,
                    playerTank: {
                        ...state.playerTank,
                        direction: action.payload
                    }
                }
            }
        case "PLAYER_FIRE":
            return fire({ ...state }, true);
        case "COMPUTER_FIRE": 
            if(state.field.pause) {
                return state;
            }
            return fire({ ...state }, false);
        case "TOGGLE_PAUSE":
            return {
                ...state,
                field: {
                    ...state.field,
                    pause: !state.field.pause
                }
            }
        case "MAKE_SHOOT_AVALIABLE":
            return {
                ...state,
                playerTank: {
                    ...state.playerTank,
                    canShoot: true,
                }
            }
        case "AUTHORIZE":
            return {
                ...state,
                form: {
                    ...state.form,
                    authorized: true,
                }
            }
        case "UPDATE_FORM_VALUES":
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.key]: action.value,
                }
            }
        default:
            return state; 
    }
} 

export default reducer;