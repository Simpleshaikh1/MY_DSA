// Maximum point on the same line/

let gcd = function(a, b){
    if(!b)
        return a;
    return gcd(b, a % b);
}

function maxPointOnSameLine(points){
    let n = points.length;

    let maxPoint = 0;
    let curMax, verticalPoint, overLapPoint;

    let slopeMap = new Map()

    for(let i = 0; i < n; i++){

        curMax = 0;
        verticalPoint = 0;
        overLapPoint = 0;

        for(let j = i + 1; j < n; j++){
            if(points[i] === points[j]){
                overLapPoint++
            }else if(points[i][0] === points[j][0]){
                verticalPoint++
            }else{
                let yDif = points[i][1] - points[j][1];
                let xDif = points[i][0] - points[j][0];

                let g = gcd(xDif, yDif)

                yDif = Math.floor(yDif / g);
                xDif = Math.floor(xDif / g);

                let tmp = [yDif, xDif];

                if(slopeMap.has(tmp.join(' '))){
                    slopeMap.set(tmp.join(' '), slopeMap.get(tmp.join(' ')) + 1);
                }else{
                    slopeMap.set(tmp.join(' '), 1)
                }
                curMax = Math.max(curMax, slopeMap.get(tmp.join(' ')))
            }
            curMax = Math.max(curMax, verticalPoint)
        }
        maxPoint = Math.max(maxPoint, curMax + overLapPoint + 1);

        slopeMap.clear();
    }

    return maxPoint;
}

function maxPointOnSameLine(arr){
    let n = arr.length;

    let maxPoint = 0;
    let curMax, verticalPoint, overLapPoint;

    let slopeMap = new Map();

    for(let i = 0; i < n; i++){
        curMax = 0;
        verticalPoint = 0;
        overLapPoint = 0;

        for(let j = i+1; j < n; j++){
            if(arr[i] === arr[j]){
                overLapPoint++
            }else if(arr[i][0] === arr[j][0]){
                verticalPoint++
            }else{
                let yDif = arr[i][1] - arr[j][1];
                let xDif = arr[i][0] - arr[j][0];

                let g = gcd(xDif, yDif);

                yDif = Math.floor(yDif / g);
                xDif = Math.floor(xDif / g);

                let temp = [yDif, xDif];

                if(slopeMap.has(temp.join(''))){
                    slopeMap.set(temp.join(''), slopeMap.get(temp.join('')) + 1);
                }else{
                    slopeMap.set(temp.join(''), 1)
                }
                curMax = Math.max(curMax, slopeMap.get(temp.join('')))
            }
            curMax = Math.max(curMax, verticalPoint)
        }
        maxPoint = Math.max(maxPoint, curMax + verticalPoint + 1);

        slopeMap.clear();
    }
    return maxPoint;
}

// Driver code
{
    let N = 6;
    let arr = [[-1, 1], [0, 0], [1, 1], [2, 2],
                    [3, 3], [3, 4]];
 
    console.log(maxPointOnSameLine(arr));
}