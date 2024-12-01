function pairSum(matrix, sum){
    let m = matrix.length;
    let n = matrix[0].length;
    let count = 0
    for(let i = 0; i < m; i++){
        for(let j = i + 1; j < m; j++){
            for(let k = 0; k < n; k++){
                for(let l = 0; l < n; l++){
                    if(matrix[i][k] + matrix[j][l] === sum){
                        console.log("(", matrix[i][k], ", ", matrix[j][l], "), ");
                    }
                }
            }
        }
    }

    return count
}

//Usng the sort method, 
function pairSum(mat, n, sum){
    for(let i = 0; i < n; i++){
        mat[i].sort((a,b) => a - b);
    }

    for(let i = 0; i < n - 1; i++){
        for(let j = i + 1; j < n; j++){
            let left = 0, right = n - 1;

            while(left < n && right >= 0){
                if((mat[i][left] + mat[j][right]) ===  sum){
                    console.log("(", mat[i][left], ", ", mat[j][right], "), ");

                    left++;
                    right--;
                }else{
                    if((mat[i][left] + mat[j][right]) < sum){
                        left++;
                    }else{
                        right--;
                    }
                }
            }
        }
    }
}

// Driver program to run the case 
let sum = 11; 
let n = 4;
let mat = [[ 1, 3, 2, 4, ], 
           [5, 8, 7, 6, ], 
           [ 9, 10, 13, 11, ], 
            [12, 0, 14, 15,]]; 
pairSum(mat, n , sum);