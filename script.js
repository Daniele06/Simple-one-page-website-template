// Make a new array for the navbar links
const sectionsLinks = [];
// IMPORTANT : Specify the number of links you are adding in (replace the number 5)
for (let i = 1; i <= 5; i++) {
  sectionsLinks.push(document.getElementById(`nav${i}`));
}

// Define what pages you want to be added in
const sectionsContent = Array.from(
  // Put your sections ID's here
  document.querySelectorAll("#page1, #page2, #page3, #page4, #page5")
);

// Define a function to handle section link clicks
function handleSectionLinkClick(index) {
  // Set default text decoration for all links to none
  sectionsLinks.forEach((link) => (link.style.textDecoration = "none"));
  // Set text decoration for clicked link to underline
  sectionsLinks[index].style.textDecoration = "underline";
  // Hide all other sections except the displayed one
  sectionsContent.forEach((section) => (section.style.display = "none"));
  // Display the selected section
  sectionsContent[index].style.display = "block";
}

// Set the default text decoration for the first link
sectionsLinks[0].style.textDecoration = "underline";

// Add event listeners to all section links
sectionsLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    handleSectionLinkClick(index);
  });
});
