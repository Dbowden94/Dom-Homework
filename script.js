// Get the elements we need from the HTML
const messageButton = document.getElementById("messageButton");
const welcomeMessage = document.getElementById("welcomeMessage");
const projectInput = document.getElementById("projectInput");
const addButton = document.getElementById("addButton");
const projectList = document.getElementById("projectList");

// Requirement 1: Button changes content
messageButton.addEventListener("click", function () {
    welcomeMessage.textContent =
        "Keep creating! Your next crochet project could be your best one yet. 🧶";
});

// Requirement 2: Style changes in real time while typing
projectInput.addEventListener("input", function () {
    if (projectInput.value.length > 0) {
        projectInput.style.backgroundColor = "#fff4c2";
        projectInput.style.borderColor = "#8a6d5a";
    } else {
        projectInput.style.backgroundColor = "white";
        projectInput.style.borderColor = "#c9b8a8";
    }
});

// Requirement 3: Dynamic list using createElement() and appendChild()
addButton.addEventListener("click", function () {
    const projectName = projectInput.value.trim();

    if (projectName === "") {
        welcomeMessage.textContent = "Please enter a project name first.";
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = projectName;

    // Bonus: Remove button for each project
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "removeButton";

    removeButton.addEventListener("click", function () {
        listItem.remove();
    });

    listItem.appendChild(removeButton);
    projectList.appendChild(listItem);

    projectInput.value = "";
    projectInput.style.backgroundColor = "white";
    projectInput.style.borderColor = "#c9b8a8";

    welcomeMessage.textContent = "Project added to your list!";
});
