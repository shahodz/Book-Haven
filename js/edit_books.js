const button1 = document.getElementById("confirmEdit");
button1.addEventListener("click", function () {
  alert("Book is edited successfully!");
  window.location.href = "adminBooks.html";
});

const button2 = document.getElementById("deleteBook");
button2.addEventListener("click", function () {
  alert("Book is deleted successfully!");
  window.location.href = "adminBooks.html";
});

function myFunction() {
  if (confirm("Are you sure you want to reset fields?")) {
    return true;
  }
  return false;
}
