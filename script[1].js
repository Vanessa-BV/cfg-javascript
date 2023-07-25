// Event listener for the Calculate button
document.getElementById("calculatebutton").addEventListener("click", function() {
  
// Get user inputs
  var name = document.getElementById("name").value;
  var salary = parseFloat(document.getElementById("salary").value) || 0;
  var otherIncome = parseFloat(document.getElementById("otherIncome").value) || 0;
  var rent = parseFloat(document.getElementById("rent").value) || 0;
  var utilities = parseFloat(document.getElementById("utilities").value) || 0;
  var transportation = parseFloat(document.getElementById("transportation").value) || 0;
  var phone = parseFloat(document.getElementById("phone").value) || 0;
  var insurances = parseFloat(document.getElementById("insurances").value) || 0;
  var subscriptions = parseFloat(document.getElementById("subscriptions").value) || 0;
  var personal = parseFloat(document.getElementById("personal").value) || 0;
  var restaurant = parseFloat(document.getElementById("restaurant").value) || 0;

  // Show totals
  var totalIncome = salary + otherIncome;
  var totalExpenses = rent + utilities + transportation + phone + insurances + subscriptions + personal + restaurant;
  var difference = totalIncome - totalExpenses;

  // Show the results section
  document.getElementById("result").classList.remove("hidden");

  // Personalized answer. If name is empty say "hi stranger" else show name
  var personalizedSentence;
  if (name.trim() === "") {
    personalizedSentence = "Hi stranger 👀,";
  } else {
    personalizedSentence = "Hi " + name + ",";
  }
  document.getElementById("budgetSentence").textContent =
    personalizedSentence + " here is an overview of your budget:";
  
// Show results
  document.getElementById("totalIncome").textContent = "Total Income: " + totalIncome.toFixed(2) + " EUR";
  document.getElementById("totalExpenses").textContent = "Total Expenses: " + totalExpenses.toFixed(2) + " EUR";
  document.getElementById("difference").textContent = "Remaining budget: " + difference.toFixed(2) + " EUR";
});
  
// Event listener for the Reset button
document.getElementById("resetbutton").addEventListener("click", function() {
  // Reset all input fields to empty
  document.getElementById("name").value = "";
  document.getElementById("salary").value = "";
  document.getElementById("otherIncome").value = "";
  document.getElementById("rent").value = "";
  document.getElementById("utilities").value = "";
  document.getElementById("transportation").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("insurances").value = "";
  document.getElementById("subscriptions").value = "";
  document.getElementById("personal").value = "";
  document.getElementById("restaurant").value = "";

  // Hide the results section
  document.getElementById("result").classList.add("hidden");  
});