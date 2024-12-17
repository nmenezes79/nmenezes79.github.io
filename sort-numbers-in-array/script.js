function sortNumbers() {
    // Get The Input Value
    let input = document.getElementById("numbers").value;

    // Split The Input By Commas and Convert To A Number Array
    let numberArray = input.split(',').map(Number);

    // Sort The Array In Ascending Order
    numberArray.sort(function(a, b) {
        return a - b;
    });

    // Display The Sorted Array
    document.getElementById("result").innerHTML = "Sorted Numbers: " + numberArray.join(", ");
}