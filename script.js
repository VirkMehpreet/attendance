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





const radios = document.querySelectorAll('input[name="slides"]');
    let i = 0;
    setInterval(() => {
      radios[i].checked = false;
      i = (i + 1) % radios.length;
      radios[i].checked = true;
    }, 4000);
