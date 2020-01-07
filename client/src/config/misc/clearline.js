const checkLine = (line) => {
    let x = 0;
    for (let i=0; i<10; i++) {
        if (line[i] == 1) {
            x++;
        }
    }
    return x > 9 ? true : false
}

const removeLiner = (lines, field/*, user*/, room) => {
    let clearline = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  //  socket.emit(MALUS, {user, room})
    for (let i in lines) {
       field.splice(lines[i], 1) //remove line at index i
       field.unshift(clearline) //insert new clear line 
    }                                  //at index 0
    //console.log(field)
    return field;
}

const checkForLine = (field, room/*, user*/) => {// field, room, yourID
    let linesArray = [];
    for (let i=0; i<20; i++){
        if (checkLine(field[i]) == true) {
            linesArray.push(i);
        }
    }
    if (linesArray.length > 0){
        return ({field: removeLiner(linesArray, field/*, user*/, room),
                score: linesArray.length})
    }
    return ({field: field, score: 0})
}

export default checkForLine;