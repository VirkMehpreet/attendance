const student_names = ["Mehpreet Kaur", "Bhavroop Kaur", "kwkdvbliuahjnb", ";ndvr;i", "aeilfjgv"];
const namesDiv = document.getElementById("names");

student_names.forEach(name => {
  const label = document.createElemtent("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "attendance";
  checkbox.value = name;
  
// Add text after the checkbox
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(" " + name));

  // Add the label to the page, and a line break
  nameList.appendChild(label);
  nameList.appendChild(document.createElement("br"));
  
});
