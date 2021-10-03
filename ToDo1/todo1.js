//Push Front
function pushFront(arr, val){
    var new_array = new Array(1);
    new_array[0] = val;
    var i = 1;
    for(var value in arr){
        new_array[i] = arr[i-1];
        i++;
    }
    return new_array;
}

my_array = [1, 2, 4, 6, 8, 72];

my_array = pushFront(my_array, 0);

console.log(my_array);

//Pop front

function popFront(arr){
    new_arr = new Array(1);
    console.log(arr[0]);
    var i = 0;
    for(var value in arr){
        if(i == 0){
            i++;
            continue;
        }
        new_arr[i-1] = arr[i];
        i++;
    }

    return new_arr;
}

my_array = popFront(my_array);
console.log(my_array);

//insert at

function insertAt(arr, ind, newVal){
    new_arr = new Array(ind+1);
    new_arr[ind] = newVal
    var i = 0;
    for(var val in arr){
        if(i < ind){
            new_arr[i] = arr[i];
        } else if (i >= ind){
            new_arr[i+1] = arr[i];
        }
        i++
    }
    return new_arr;
}

my_array = insertAt(my_array, 3, 88);
console.log(my_array);

//remove at

function removeAt(arr, ind){
    newArr = new Array(1);

    var i = 0;
    for(var val in arr){
        if(i < ind){
            newArr[i] = arr[i];
            i++;
        } else if (i == ind){
            i++;
            continue;
        } else {
            newArr[i-1] = arr[i];
            i++;
        }
    }
    console.log(arr[ind]);
    return newArr;
}

my_array = removeAt(my_array, 3);
console.log(my_array);

//Swap Pairs

function swapPairs(arr){
    var length = 0;
    for(var value in arr){
        length++;
    }
    var pairs = 0;
    if(length%2 == 0){
        pairs = length
    } else {
        pairs = length - 1;
    }

    for(var i = 0; i < pairs; i += 2){
        var temp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

my_array = swapPairs(my_array);
console.log(my_array);


