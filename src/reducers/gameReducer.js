import $ from 'jquery';
let initialState = {
    selectedImage : '',
    selectedSize : [],
    outerDivStyle :{},
    cells : [],
    prevSelected : -1,
    timeLapsed:0,
    moveCount:0,
    won:false
}
export default function reducer(state=initialState,action){
    switch(action.type){
        case 'SELECT_IMAGE':{
            return {...state, selectedImage:action.payload};  
        }
        case 'SELECT_SIZE':{
            return {...state, selectedSize:action.payload};
        }
        case 'LOAD_GAME':{
            let {outerDivStyle,cells} = initializeGameTiles(state.selectedImage,state.selectedSize);
            return {...state, outerDivStyle : outerDivStyle,cells:randomize(cells)};
        }
        case 'SELECT_CELL':{
            let selectedCell = action.payload;
            if(state.prevSelected === -1){
                return {...state, prevSelected : selectedCell};
            }
            else if(state.prevSelected === selectedCell){
                return {...state, prevSelected : -1};
            }
            else{
                let newCells = changePosition(state.cells,state.prevSelected,selectedCell);
                return {...state, prevSelected : -1,cells:newCells,moveCount:state.moveCount+1,won:checkTiles(newCells)};
            }

        }
        case 'INC_TIME':{
            return {...state,timeLapsed:state.timeLapsed+1};
        }
        case 'RESET_GAME':{
            return {...initialState}
        }
        default:{
            return state;
        }
    }
}
function initializeGameTiles(image,size){
    let outerWidth = $('.container').width();
    let [row,col] = size;
    let width = 100;
    if(col * width > outerWidth){
        width = Math.floor(outerWidth/col);
    }
    let cells = [];
    let outerDivStyle = {
        width: width*col+'px'
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let cell = {};
            cell.style = {
                backgroundImage: 'url('+image+')',
                backgroundPosition: -width * j + 'px ' + -width * i + 'px',
                backgroundSize : width * col + 'px '+width * row + 'px',
                width:width+'px',
                height:width+'px'
            }
            cell.index = cells.length;
            cells.push(cell);
        }
    }
    
    return {outerDivStyle : outerDivStyle,cells : (cells)};
}
function randomize(cells) {
    var temp = cells;
    cells = [];
    for (var i = 0; i < temp.length; i++) {
        var index = 0;
        do {
            index = Math.floor(Math.random() * temp.length);
        } while (cells[index] !== undefined);
        cells[index] = temp[i];
    }
    return cells;
}
function changePosition(cells,prevIndex, curIndex) {
    cells = [...cells];
    var tempCell = cells[prevIndex];
    cells[prevIndex] = cells[curIndex];
    cells[curIndex] = tempCell;
    return cells;
}
function checkTiles(cells) {
    for (var i = 0; i < cells.length; i++) {
        var index = cells[i].index;
        if (index !== i) {
            return false;
        }
    }
    return true;
}