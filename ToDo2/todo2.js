//reverse in place

myArray= [5, 18, 76, 81, 87, 42];

function reverse(arr){
    var length = 0;
    for(var value in arr){
        length++;
    }
    var switches = (length - length%2)/2;
    for(var i = 0; i < switches; i++){
        var holder = arr[i];
        arr[i] = arr[length -1 -i];
        arr[length-1 -i] = holder;
    }


    return arr;

}
console.log(myArray);
reverse(myArray);
console.log(myArray);

// Rotate
/*Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 
'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), 
change the array to [3,1,2]. Don't use built-in functions.
Second: allow negative shiftBy (shift L, not R).
Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
Fourth: minimize the touches of each element.*/

// 1, 2 , 3, 4 , 5   
// 

// 4, 5, 1, 2, 3 -- offset is 2
// 3, 4, 5, 1 ,2 -- offset is 3
function rotate(arr, offset){
    var length = 0;
    for(var value in arr){
        length++;
    }

    if(offset%length == 0){
        return arr;
    }

    var actual = Math.abs(offset);
    if(offset > length){
        actual = offset%length;
    }

    for(var r = 0; r < actual; r++){
        console.log("Rotation: ");
        console.log(r);
        
        if(offset > 0){
            var last = arr[length-1];
            for(var i = length - 2; i >= 0; i--){
                arr[i+1] = arr[i];            
            }
            arr[0] = last;
        } else {

            console.log("negative!")
            var first = arr[0];
            for(var i = 0; i < length-1; i++){
                arr[i] = arr[i+1];
            }
            arr[length-1] = first;
        }
        
    }
    return arr;
}

var rotateArr = [1, 2, 3, 4, 5];

console.log(rotateArr);

rotateArr = rotate(rotateArr, -1);

console.log("Done!");
console.log(rotateArr);

rotateArr = rotate(rotateArr, 2);

console.log(rotateArr);


// Filter Range
/* Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. 
Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, 
with values in original order. No built-in array functions. */

function filterRange(arr, min, max){
    var length = 0;
    for(var value in arr){
        length++;
    }
    var invalids = 0;
    var place = 0;
    for(var i = 0; i < length; i++){
        
        if(arr[i] < min || arr[i] > max){
            invalids++;
            continue;
        } else {
            var temp = arr[i];
            arr[place] = temp;
            place++;
        }
    }
    for(var j = 1; j <= invalids; j++){
        arr[length-j] = null;
    }
    return arr;
}

thirdArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

thirdArray = filterRange(thirdArray, 2, 5);
console.log(thirdArray);

//Concat
/* Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. 
Return a new array containing the first array's elements, followed by the second array's elements. 
Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].*/

function newConcat(arr1, arr2){
    var newArr = arr1 + arr2;
    return newArr
}

var newArray = newConcat(rotateArr, myArray);
console.log(newArray);

