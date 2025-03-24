//your JS code here. If required.
const colorSelect = document.getElementById("colorSelect");
const removeButton = document.querySelector('input[type="button"][value="Select and Remove"]');

removeButton.addEventListener("click", () => {
  const selectedOption = colorSelect.options[colorSelect.selectedIndex];

  if (selectedOption) {
    colorSelect.removeChild(selectedOption);
  }
});