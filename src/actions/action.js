export function selectImage(image){
    return {
        type:'SELECT_IMAGE',
        payload:image
    }
}
export function selectGrid(grid){
    return {
        type:'SELECT_SIZE',
        payload:grid
    }
}
export function loadGame(){
    return {
        type:'LOAD_GAME'
    }
}
export function resetGame(){
    return {
        type:'RESET_GAME'
    }
}
export function selectCell(cellIndex){
    return {
        type:'SELECT_CELL',
        payload:cellIndex
    }
}
export function incrementTime(){
    return {
        type:'INC_TIME'
    }
}