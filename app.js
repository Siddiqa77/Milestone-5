var _a;
//listing
(_a = document
    .getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    //type assertion
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var addressElement = document.getElementById("address");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    // Url
    var usernameElement = document.getElementById("username");
    if (nameElement &&
        emailElement &&
        phoneElement &&
        addressElement &&
        educationElement &&
        experienceElement &&
        skillsElement &&
        usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var username = usernameElement.value;
        var uniquePath = "resumes/".concat(username.replace(/\s+/g, ""), "_cv.html");
        // Validate that all fields are filled
        if (nameElement &&
            emailElement &&
            phoneElement &&
            addressElement &&
            educationElement &&
            experienceElement &&
            skillsElement) {
            // Create resume HTML
            var resumeOutput = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\"> ".concat(name_1, "</span></p>\n            <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span></p>\n            <p><strong>Phone Number:</strong> <span id=\"edit-phone\" class=\"editable\"> ").concat(phone, " </span></p>\n            <p><strong>Address:</strong> <span id=\"edit-address\" class=\"editable\"> ").concat(address, " </span></p>\n            \n            <h3>Education</h3>\n            <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n            \n            <h3>Experience</h3>\n            <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n            \n            <h3>Skills</h3>\n            <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n        ");
            //create downloadable link
            var downloadLink = document.createElement("a");
            downloadLink.href =
                "data:text/html;charset=utf-8," + encodeURIComponent(resumeOutput);
            downloadLink.download = uniquePath;
            downloadLink.textContent = "Download your resume";
            // Output resume to the page
            var resumeOutputElement = document.getElementById("resumeOutput");
            if (resumeOutputElement) {
                resumeOutputElement.innerHTML = resumeOutput;
                resumeOutputElement.appendChild(downloadLink);
            }
            else {
                console.error("Element with ID result is missing.");
            }
        }
        else {
            alert("Please fill out all fields.");
        }
    }
    else {
        console.error("One or more form elements are missing.");
    }
});
