// Write your code here!
const removeMain = document.getElementById("main").remove();

const newHeader = document.createElement('h1');
newHeader.textContent = "YOUR-NAME is the champion";
newHeader.id = "victory";
document.body.append(newHeader);

