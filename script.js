var expenses = [];

function addExpense() {
  var expenseInput = document.getElementById("expenseInput");
  var categorySelect = document.getElementById("categorySelect");
  var customCategoryInput = document.getElementById("customCategoryInput");
  var dateInput = document.getElementById("dateInput");
  var expenseList = document.getElementById("expenseList");

  var expense = {
    amount: expenseInput.value,
    category: categorySelect.value === "custom" ? customCategoryInput.value : categorySelect.value,
    date: dateInput.value
  };

  expenses.push(expense);

  var listItem = document.createElement("li");

  var expenseText = document.createElement("span");
  expenseText.innerText = expense.amount + " грн.";
  listItem.appendChild(expenseText);

  var categoryText = document.createElement("span");
  categoryText.innerText = expense.category;
  categoryText.classList.add("category");
  listItem.appendChild(categoryText);

  var dateText = document.createElement("span");
  dateText.innerText = expense.date;
  listItem.appendChild(dateText);

  var deleteButton = document.createElement("button");
  deleteButton.innerText = "Видалити";
  deleteButton.addEventListener("click", function() {
    deleteExpense(expense);
    listItem.remove();
  });
  listItem.appendChild(deleteButton);

  expenseList.appendChild(listItem);

  updateTotalExpense();

  expenseInput.value = "";
  customCategoryInput.value = "";
}

function deleteExpense(expense) {
  var index = expenses.indexOf(expense);
  if (index !== -1) {
    expenses.splice(index, 1);
    updateTotalExpense();
  }
}

function updateTotalExpense() {
  var totalExpense = document.getElementById("totalExpense");
  var totalAmount = expenses.reduce(function(total, expense) {
    return total + parseFloat(expense.amount);
  }, 0);
  totalExpense.innerText = totalAmount.toFixed(2);
}

function toggleCustomCategoryInput() {
  var categorySelect = document.getElementById("categorySelect");
  var customCategoryInputContainer = document.getElementById("customCategoryInputContainer");
  
  if (categorySelect.value === "custom") {
    customCategoryInputContainer.style.display = "block";
  } else {
    customCategoryInputContainer.style.display = "none";
  }
}

// Изменения в коде для перевода интерфейса на украинский язык

var langSelect = document.getElementById("langSelect");
langSelect.addEventListener("change", function() {
  var lang = langSelect.value;
  setLanguage(lang);
});

function setLanguage(lang) {
  var langStrings = {};

  if (lang === "ukrainian") {
    langStrings = {
      expenseLabel: "Витрата:",
      categoryLabel: "Категорія:",
      customCategoryLabel: "Своя категорія:",
      dateLabel: "Дата:",
      addButton: "Додати",
      deleteButton: "Видалити",
      totalExpenseLabel: "Загальна сума витрат:",
      langLabel: "Мова:",
      langOptionEnglish: "Англійська",
      langOptionUkrainian: "Українська"
    };
  } else {
    langStrings = {
      expenseLabel: "Expense:",
      categoryLabel: "Category:",
      customCategoryLabel: "Custom Category:",
      dateLabel: "Date:",
      addButton: "Add",
      deleteButton: "Delete",
      totalExpenseLabel: "Total Expense:",
      langLabel: "Language:",
      langOptionEnglish: "English",
      langOptionUkrainian: "Ukrainian"
    };
  }

  var expenseLabel = document.getElementById("expenseLabel");
  expenseLabel.innerText = langStrings.expenseLabel;

  var categoryLabel = document.getElementById("categoryLabel");
  categoryLabel.innerText = langStrings.categoryLabel;

  var customCategoryLabel = document.getElementById("customCategoryLabel");
  customCategoryLabel.innerText = langStrings.customCategoryLabel;

  var dateLabel = document.getElementById("dateLabel");
  dateLabel.innerText = langStrings.dateLabel;

  var addButton = document.getElementById("addButton");
  addButton.innerText = langStrings.addButton;

  var deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach(function(button) {
    button.innerText = langStrings.deleteButton;
  });

  var totalExpenseLabel = document.getElementById("totalExpenseLabel");
  totalExpenseLabel.innerText = langStrings.totalExpenseLabel;

  var langLabel = document.getElementById("langLabel");
  langLabel.innerText = langStrings.langLabel;

  var langOptionEnglish = document.getElementById("langOptionEnglish");
  langOptionEnglish.innerText = langStrings.langOptionEnglish;

  var langOptionUkrainian = document.getElementById("langOptionUkrainian");
  langOptionUkrainian.innerText = langStrings.langOptionUkrainian;
}

// Изначально установите язык на украинский
setLanguage("ukrainian");
