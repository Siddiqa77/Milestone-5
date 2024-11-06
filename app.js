// Function to handle form submission
function handleFormSubmit(event) {
    var _a;
    event.preventDefault();
    // Get form input values
    var fullnameInput = document.getElementById("fullname");
    var professionInput = document.getElementById("profession");
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var addressInput = document.getElementById("address");
    var skillsInput = document.getElementById("skills");
    var experienceInput = document.getElementById("experience");
    var educationInput = document.getElementById("education");
    var aboutInput = document.getElementById("about");
    var cert1Input = document.getElementById("cert1-name");
    var certdescInput = document.getElementById("cert1-description");
    var cert2Input = document.getElementById("cert2-name");
    var cert2descInput = document.getElementById("cert2-description");
    var languageInput = document.getElementById("language");
    var imguploadInput = document.getElementById("image-upload");
    // Collect form data
    var resumeData = {
        fullname: fullnameInput.value,
        profession: professionInput.value,
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        address: addressInput.value,
        skills: skillsInput.value.split(",").map(function (skill) { return skill.trim(); }),
        experience: experienceInput.value,
        education: educationInput.value,
        about: aboutInput.value,
        cert1name: cert1Input.value,
        cert2name: cert2Input.value,
        cert1desc: certdescInput.value,
        cert2desc: cert2descInput.value,
        language: languageInput.value,
        imgupload: ((_a = imguploadInput.files) === null || _a === void 0 ? void 0 : _a[0])
            ? URL.createObjectURL(imguploadInput.files[0])
            : "",
    };
    console.log(resumeData); // Check if data is being collected
    // Call function to generate resume
    generateResume(resumeData);
}
// Function to generate a shareable link
function generateShareableLink(data) {
    var encodedData = encodeURIComponent(JSON.stringify(data));
    var baseUrl = window.location.origin + window.location.pathname;
    return "".concat(baseUrl, "?resumeData=").concat(encodedData);
}
// Function to generate and display the resume
function generateResume(data) {
    var outputDiv = document.getElementById("resume-output");
    var shareableLinkContainer = document.getElementById('shareable-link-container');
    var shareableLinkElement = document.getElementById('shareable-link');
    if (outputDiv) {
        outputDiv.innerHTML = "\n              <div class=\"resume-section\">\n    \n          <div class=\"layout\">\n            <!-- Left-hand side: Image side -->\n    \n            \n            <div class=\"image-container\">\n            <img src=\"".concat(data.imgupload, "\" alt=\"Profile Picture\" class=\"pic\" id=\"profile-pic\" />\n           \n          </div>\n    \n    \n            <form id=\"career-cert-form\">\n              <!-- Career Objective -->\n              <div class=\"form-group\">\n                <label for=\"career-objective\">About Me</label>\n                <textarea id=\"career-objective\" placeholder=\"Enter your career objective\" contenteditable=\"true\" >").concat(data.about, "</textarea>\n              </div>\n    \n              <!-- Certification 1 -->\n              <div class=\"form-group\">\n                <label for=\"cert1-name\">Certification 1 Name</label>\n                <input type=\"text\" id=\"cert1-name\" placeholder=\"Enter the name of your first certification\" contenteditable=\"true\" value=\"").concat(data.cert1name, "\" >\n              </div>\n    \n              <div class=\"form-group\">\n                <label for=\"cert1-description\">Certification 1 Description</label>\n                <textarea id=\"cert1-description\" readonly placeholder=\"Enter a description for your first certification\" contenteditable=\"true\"\n                  >").concat(data.cert1desc, "</textarea>\n              </div>\n    \n              <!-- Certification 2 -->\n              <div class=\"form-group\">\n                <label for=\"cert2-name\">Certification 2 Name</label>\n                <input type=\"text\" id=\"cert2-name\" readonly placeholder=\"Enter the name of your second certification\" contenteditable=\"true\" value=\"").concat(data.cert2name, "\" >\n              </div>\n    \n              <div class=\"form-group\">\n                <label for=\"cert2-description\">Certification 2 Description</label>\n                <textarea id=\"cert2-description\" readonly placeholder=\"Enter a description for your second certification\" contenteditable=\"true\"\n                  >").concat(data.cert2desc, "</textarea>\n              </div>\n               <div class=\"form-group\">\n                <label for=\"language\">Language</label>\n                <textarea class=\"text\" id=\"language\" placeholder=\"languages\" contenteditable=\"true\"\n                  >").concat(data.language, "</textarea>\n              </div>\n            </form>\n          </div>\n    \n          <!-- Right-hand side: info detail-->\n          <div class=\"right-container\">\n            <h1 class=\"name-heading\" id=\"fullname\" contenteditable=\"true\">").concat(data.name, "</h1>\n            <span class=\"span\" id=\"profession\" contenteditable=\"true\">").concat(data.profession, "</span>\n           \n            \n            <form id=\"resume-form\">\n          \n              <div class=\"form-group\">\n                <label for=\"name\">Full Name</label>\n                <input type=\"text\" id=\"name\" placeholder=\"Enter your name\" contenteditable=\"true\" value=\"").concat(data.name, "\">\n              </div>\n             \n    \n              <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input type=\"email\" id=\"email\" placeholder=\"Enter your email\" contenteditable=\"true\" value=\"").concat(data.email, "\">\n              </div>\n    \n              <div class=\"form-group\">\n                <label for=\"phone\">Phone Number</label>\n                <input type=\"text\" id=\"phone\" placeholder=\"Enter your phone number\" contenteditable=\"true\" value=\"").concat(data.phone, "\" >\n              </div>\n    \n              <div class=\"form-group\">\n                <label for=\"address\">Address</label>\n                <input type=\"text\" id=\"address\" placeholder=\"Enter your address\" contenteditable=\"true\" value=\"").concat(data.address, "\" >\n              </div>\n    \n              <div class=\"form-group\">\n                <label for=\"skills\">Skills</label>\n                <textarea id=\"skills\" placeholder=\"List your skills (comma-separated)\" contenteditable=\"true\" >").concat(data.skills, "</textarea>\n              </div>\n    \n              <div class=\"form-group\">\n                <label for=\"experience\">Experience</label>\n                <textarea id=\"experience\" placeholder=\"Describe your experience\" contenteditable=\"true\" >").concat(data.experience, "</textarea>\n              </div>\n    \n              <div class=\"form-group\">\n                <label for=\"education\">Education</label>\n                <textarea id=\"education\" placeholder=\"Describe your education\" contenteditable=\"true\" >").concat(data.education, "</textarea>\n              </div>\n    \n            </form>\n    \n          </div>\n    \n        </div>\n\n          ");
        // Display shareable link
        var shareableLink = generateShareableLink(data);
        if (shareableLinkContainer && shareableLinkElement) {
            shareableLinkContainer.style.display = "block"; // Show container
            shareableLinkElement.href = shareableLink;
            shareableLinkElement.textContent = "Shareable Link";
        }
    }
}
// Attach event listeners
var form = document.getElementById("resume-form");
if (form) {
    form.addEventListener("submit", handleFormSubmit);
}
// Print functionality
var printButton = document.getElementById("print-resume");
if (printButton) {
    var outputDiv = document.querySelector(".resume-section");
    printButton.addEventListener("click", function () {
        window.print(); // This will open the print dialog
    });
}
// Image uploader functionality
var imageUploadInput = document.getElementById("image-upload");
if (imageUploadInput) {
    imageUploadInput.addEventListener("change", function (event) {
        var target = event.target;
        if (target.files && target.files.length > 0) {
            var file = target.files[0];
            var reader = new FileReader();
            // When the file is read, set the data URL to the input field and display the image in the preview section
            reader.onload = function (e) {
                var _a;
                var result = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                imageUploadInput.dataset.url = result; // Store data URL in a custom data attribute
                var profilePic = document.getElementById("profile-pic");
                if (profilePic)
                    profilePic.src = result; // Preview the image in the input area
            };
            // Read the image file as a data URL
            reader.readAsDataURL(file);
        }
    });
}
