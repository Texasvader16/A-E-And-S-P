// JavaScript Code
function transformString(str) {
    // Create an empty result string
    let result = "";
    
    // Iterate over each character in the input string
    for (let i = 0; i < str.length; i++) {
      // Get the current character
      let char = str[i];
      
      // Check if the character is "a" and replace it with "e"
      if (char === "a") {
        result += "e";
      }
      // Check if the character is "s" and replace it with "p"
      else if (char === "s") {
        result += "p";
      }
      // If the character is neither "a" nor "s", just add it to the result string
      else {
        result += char;
      }
    }
    
    // Return the result string
    return result;
  }
  
  // Get a reference to the form and the output element
  const form = document.getElementById("form");
  const output = document.getElementById("output");
  
  // Add an event listener to the form to handle submit events
  form.addEventListener("submit", (event) => {
    // Prevent the form from refreshing the page
    event.preventDefault();
    
    // Get the value of the input field
    const input = document.getElementById("input").value;
    
    // Transform the input string and set it as the text of the output element
    output.textContent = transformString(input);
  });
  