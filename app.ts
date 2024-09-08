//listing
document
  .getElementById("resume-form")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    //type assertion
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const addressElement = document.getElementById(
      "address"
    ) as HTMLInputElement;
    const educationElement = document.getElementById(
      "education"
    ) as HTMLInputElement;
    const experienceElement = document.getElementById(
      "experience"
    ) as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;

    // Url
    const usernameElement = document.getElementById(
      "username"
    ) as HTMLInputElement;

    if (
      nameElement &&
      emailElement &&
      phoneElement &&
      addressElement &&
      educationElement &&
      experienceElement &&
      skillsElement &&
      usernameElement
    ) {
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const address = addressElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillsElement.value;
      const username = usernameElement.value;
      const uniquePath = `resumes/${username.replace(/\s+/g, "")}_cv.html`;

      // Validate that all fields are filled
      if (
        nameElement &&
        emailElement &&
        phoneElement &&
        addressElement &&
        educationElement &&
        experienceElement &&
        skillsElement
      ) {
        // Create resume HTML
        const resumeOutput = `
            <h2>Resume</h2>
            <p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name}</span></p>
            <p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span></p>
            <p><strong>Phone Number:</strong> <span id="edit-phone" class="editable"> ${phone} </span></p>
            <p><strong>Address:</strong> <span id="edit-address" class="editable"> ${address} </span></p>
            
            <h3>Education</h3>
            <p id="edit-education" class="editable">${education}</p>
            
            <h3>Experience</h3>
            <p id="edit-experience" class="editable">${experience}</p>
            
            <h3>Skills</h3>
            <p id="edit-skills" class="editable">${skills}</p>
        `;

        //create downloadable link
        const downloadLink = document.createElement("a");
        downloadLink.href =
          `data:text/html;charset=utf-8,` + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = "Download your resume";

        // Output resume to the page

        const resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
          resumeOutputElement.innerHTML = resumeOutput;
          resumeOutputElement.appendChild(downloadLink);
        } else {
          console.error("Element with ID result is missing.");
        }
      } else {
        alert("Please fill out all fields.");
      }
    } else {
      console.error("One or more form elements are missing.");
    }
  });
