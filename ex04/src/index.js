// Only change code below this line
function localScope() {
    var myVariable = "I am here!";
    console.log(myVariable);
}

console.log(localScope());
// Only change code above this line

// myVariable is not defined outside of localScope
if (typeof myVariable != "undefined") {
    console.log('inside localScope:', myVariable)
} else {
    console.log('outside localScope UNDEFINED!!!')
}

module.exports = localScope;