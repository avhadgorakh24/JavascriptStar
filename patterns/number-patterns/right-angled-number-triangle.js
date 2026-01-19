//// Method 1] function nested loops 

// Creates a function named numberTriangle
// rows decides how many lines will be printed
function numTriangle(rows){

    // Initializes an empty string
    // We store the full pattern inside this string
    let result = "";

    // Outer loop controls the number of rows
    // i = current row number
    for(let i = 1; i <= rows; i++){

        // Inner loop prints numbers in each row
        // j starts from 1 and goes till row number (i)
        for(let j = 1; j<=i; j++){

            // Adds number j to the string
            // Example: "12" → "123"
            result += j;
        }

        // Moves to the next line after finishing one row
        result += "\n";
    }

    // Prints the complete triangle at once
    console.log(result);
}

//Calls the function
numTriangle(5);


//// Method 2]  Spread Operator + map()

function numTriangles(rows){
    let results = "";

    for(let i = 1; i<= rows; i++){

        // Array(i) creates empty array of size i
        // .keys() gives index values
        // Spread operator converts iterator to array
        // Converts index values to numbers starting from 1
        // Converts numbers to string → "123"
        // Moves to next line
        results += [...Array(i).keys()].map(n=> n+1).join("")+ "\n";
    }

    console.log(results)
}

numTriangles(7)