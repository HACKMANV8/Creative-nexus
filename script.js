function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Handle Patient Form
document.getElementById("patientForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("pname").value;
  let age = document.getElementById("page").value;
  let disease = document.getElementById("pdisease").value;

  let table = document.getElementById("patientTable");
  let row = table.insertRow();
  row.insertCell(0).innerText = name;
  row.insertCell(1).innerText = age;
  row.insertCell(2).innerText = disease;

  this.reset();
});

// Handle Appointment Form
document.getElementById("appointmentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("apName").value;
  let doctor = document.getElementById("apDoctor").value;
  let date = document.getElementById("apDate").value;

  let table = document.getElementById("appointmentTable");
  let row = table.insertRow();
  row.insertCell(0).innerText = name;
  row.insertCell(1).innerText = doctor;
  row.insertCell(2).innerText = date;

  this.reset();
});