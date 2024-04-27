/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let rowsMap = new Map();
    let colMap = new Map();

    let pairs = 0;

    grid.forEach(row=>{
        row = row.join(',');
        if(rowsMap.has(row)){
            rowsMap.set(row, rowsMap.get(row)+1)
        }
        else{
            rowsMap.set(row, 1);
        }
    })

    for(let j = 0; j < grid[0].length; j++){
        let col = [];
        for(let i = 0; i < grid.length; i++){
            ////console.log(grid[i][j]);
            col.push(grid[i][j]);
        }

        col = col.join(',');
        //console.log("COL TO ADD", col)

        if(colMap.has(col)){
            colMap.set(col, colMap.get(col)+1)
        }
        else{
            colMap.set(col, 1);
        }
    }

    //console.log("ROWS MAP:", rowsMap);
    //console.log("COL MAP:", colMap);

    grid.forEach(row=>{
        //console.log(row);
    })

    rowsMap.forEach((value,key)=>{
        if(colMap.has(key)){
            //console.log("Row:", key);
            //console.log("Times in grid:", value);
            let start = 0;
            //console.log("Times matching Col:", colMap.get(key));
            while(start < (value * colMap.get(key))){
                pairs++;
                start++;
                //console.log("Pair found");
            }
        }
    })

    return pairs;
};

let grid = [[3,2,1],[1,7,6],[2,7,7]];
console.log(equalPairs(grid));

grid = [[3,1,2,2],[1,4,4,4],[2,4,2,2],[2,4,2,2]];
console.log(equalPairs(grid));

grid = [[11,1],[1,11]]
console.log(equalPairs(grid));