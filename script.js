var form = document.getElementById('form');
var displayElement = document.getElementById('Resume-display');
form.addEventListener("submit", function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var name = document.getElementById('name').value;
    var Email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var Education = document.getElementById("Education").value;
    var Experience = document.getElementById("Experience").value;
    var Skills = document.getElementById("Skills").value;
    //generate editable and dynamic resume
    var resumeHtml = "\n    <h1>Editable and Dynamic Resume</h1>\n    <h2>Personal Information</h2>\n    <p><b>Name:</b><span contenteditable=\"true\"> ".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\"> ").concat(Email, "</span></p>\n    <p><b>Phone:</b><span contenteditable=\"true\"> ").concat(phone, "</span></p>\n\n    <h2>Education:</h2>\n    <p contenteditable=\"true\"> ").concat(Education, "</p>\n\n    <h2>Experience:</h2>\n    <p contenteditable=\"true\"> ").concat(Experience, "</p>\n\n    <h2>Skills:</h2>\n    <p contenteditable=\"true\"> ").concat(Skills, "</p>\n\n    ");
    //dispaly genratated resume
    if (displayElement) {
        displayElement.innerHTML = resumeHtml;
    }
    else {
        console.error('Your resume is not completed.');
    }
});
