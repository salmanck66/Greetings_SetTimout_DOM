let existingH1 = document.getElementById('hi'); // Access the existing <h1> element by its ID
let newH1 = document.createElement("h1"); // Create a new <h1> element
let newH2 = document.createElement("h1"); // Create a new <h1> element
let newH3 = document.createElement("h1"); // Create a new <h1> element

setTimeout(() => {
    newH1.textContent = "hola"; // Set the text content of the new <h1> element
    existingH1.parentNode.replaceChild(newH1, existingH1); // Replace the existing <h1> element with the new <h1> element
}, 3000);

setTimeout(() => {
    newH2.textContent = "Namste"; // Set the text content of the new <h1> element
    newH2.id = "hi"; // Set the ID of the new <h1> element to "hi"
    newH1.parentNode.replaceChild(newH2, newH1); // Replace the existing <h1> element with the new <h1> element
}, 6000); // Delay the second function by 6 seconds (3 seconds after the first function)

setTimeout(() => {
    newH3.textContent = "Bonjour"; // Set the text content of the new <h1> element
    newH3.id = "hi"; // Set the ID of the new <h1> element to "hi"
    newH2.parentNode.replaceChild(newH3, newH2); // Replace the existing <h1> element with the new <h1> element
}, 9000); // Delay the third function by 9 seconds (3 seconds after the second function)

// Additional greetings
setTimeout(() => {
    newH3.textContent = "Ciao"; // Italian
    newH3.id = "hi";
    newH2.parentNode.replaceChild(newH3, newH2);
}, 12000);

setTimeout(() => {
    newH3.textContent = "Konnichiwa"; // Japanese
    newH3.id = "hi";
    newH2.parentNode.replaceChild(newH3, newH2);
}, 15000);

setTimeout(() => {
    newH3.textContent = "Olá"; // Portuguese
    newH3.id = "hi";
    newH2.parentNode.replaceChild(newH3, newH2);
}, 18000);

