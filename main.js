// var countries = [
//     "Benin", "Burkina Faso", "Cape Verde",
//     "Gambia", "Ghana", "Guinea", "Guinea-Bissau",
//     "Ivory Coast", "Liberia", "Mauritania", "Mali",
//     "Niger", "Nigeria", "Senegal", "Sierra Leone", "Togo"
//     // You can add more countries if you want
// ];

// // Get the input element
// var input = document.getElementById('countryInput');

// // Add the event listener for input changes
// input.addEventListener("input", function() {

//     // Get the value entered in the input
//     var inputValue = input.value;

//     // Filter the country array based on the input value
//     var filteredCountries = countries.filter(function(country){
//         return country.toLowerCase().startsWith(inputValue.toLowerCase());
//     });

//     // Display the first matching country name
//     if(filteredCountries.length > 0){
//         var countryName = filteredCountries[0];
//         console.log(countryName); // Replace this line with your desired code to replace the country name
//     }
// });

// Array of country names
/*const countryNames = ["Argentina", "Brazil", "Canada", "Denmark", "Egypt", "France", "Germany", "Hungary", "Italy", "Japan", "Kenya", "Mexico", "Netherlands", "Oman", "Poland", "Qatar", "Russia", "Spain", "Thailand", "United States", "Vietnam", "Yemen", "Zimbabwe"];

const countryInput = document.getElementById("countryInput");

countryInput.addEventListener("keyup", function (event) {
    const inputText = event.target.value.trim();

    if (inputText.length === 1) {
        const filteredCountries = countryNames.filter(function (country) {
            return country.charAt(0).toLowerCase() === inputText.toLowerCase();
        });

        if (filteredCountries.length > 0) {
            console.log(filteredCountries);
        }
    }
});*/
