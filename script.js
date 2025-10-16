const student_names = ["Mehpreet Kaur", "Bhavroop Kaur", "kwkdvbliuahjnb", ";ndvr;i", "aeilfjgv"];
const namesList = document.getElementById("names");

student_names.forEach(name => {
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "attendance";
  checkbox.value = name;
  
// Add text after the checkbox
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(" " + name));

  // Add the label to the page, and a line break
  namesList.appendChild(label);
  namesList.appendChild(document.createElement("br"));
  
});
