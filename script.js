let numSelected = null;
let tileSelected = null;

let errors = 0;

const board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

const solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

window.onload = function() {
    setGame();
}

function setGame() {
    // Digits 1-9
    for (let i = 1; i <= 9; i++) {
        //<div id="1" class="number">1</div>
        let number = document.createElement("div");
        number.id = i
        number.innerText = i;
        number.addEventListener("click", SelectedNumber);
        number.classList.add("number");
        document.getElementById("digit").appendChild(number);
        
    }

    // Board 9x9
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();        //create row and column
            if (board[r][c] != "-") {
                tile.innerText = board[r][c];
                tile.classList.add("tile-start");
            }
            if (r == 2 || r == 5) {
                tile.classList.add("horizontal-line");              // draw a  bold line row = 2 and column = 5
            }
            if (c == 2 || c == 5) {
                tile.classList.add("vertical-line");                // draw a bold line row = 5 and column = 2
            }
            tile.addEventListener("click", SelectedTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

function SelectedNumber(){
    if(numSelected != null){
        numSelected.classList.remove("number-selected")     //Remove Selected Number
    }
    numSelected= this;
    numSelected.classList.add("number-selected");


}
function SelectedTile(){
    if(numSelected){
        if(this.innerText != ""){                   // already enter Not Overwrite
            return;
        }
        

        let codes = this.id.split("-");
        let r = parseInt(codes[0]);
        let c = parseInt(codes[1]);
        if (solution[r][c] == numSelected.id) {
            this.innerText = numSelected.id;
        }
        else {
            errors += 1;
            document.getElementById("error").innerText = "Wrong answer : "+errors;
        }
    }
}
