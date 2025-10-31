// Hospital data (same as your backend C++ data)
const hospitals = [
  { name: "H1", location: "Bangalore", beds: 4, rating: 5.2, contact: "657534XXX7", doctor: "D1", price: 100 },
  { name: "H2", location: "Bangalore", beds: 5, rating: 4.1, contact: "298766XXX2", doctor: "D4", price: 200 },
  { name: "H4", location: "Mumbai", beds: 6, rating: 3.4, contact: "324565XXX9", doctor: "D3", price: 100 },
  { name: "H3", location: "Prayagraj", beds: 9, rating: 5.9, contact: "343456XXX4", doctor: "D2", price: 290 }
];

// Select HTML elements
const tableBody = document.querySelector("#hospitalTable tbody");
const hospitalSelect = document.querySelector("#hospital");

// Populate hospital table and dropdown
hospitals.forEach(hospital => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${hospital.name}</td>
    <td>${hospital.location}</td>
    <td>${hospital.beds}</td>
    <td>${hospital.rating}</td>
    <td>${hospital.contact}</td>
    <td>${hospital.doctor}</td>
    <td>${hospital.price}</td>
  `;
  tableBody.appendChild(row);

  // Add to dropdown list
  const option = document.createElement("option");
  option.value = hospital.name;
  option.textContent = `${hospital.name} - ${hospital.location}`;
  hospitalSelect.appendChild(option);
});

// Handle patient registration form
document.querySelector("#patientForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.querySelector("#pname").value;
  const id = document.querySelector("#pid").value;
  const contact = document.querySelector("#contact").value;
  const hospital = document.querySelector("#hospital").value;

  if (!hospital) {
    alert("⚠️ Please select a hospital!");
    return;
  }

  alert(`✅ Patient Registered!\n\nName: ${name}\nID: ${id}\nContact: ${contact}\nHospital: ${hospital}`);

  // Clear the form
  this.reset();
});