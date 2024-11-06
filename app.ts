// Define interfaces for form data
interface ResumeData {
  fullname: string;
  profession: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  skills: string[];
  experience: string;
  education: string;
  about: string;
  cert1name: string;
  cert2name: string;
  cert1desc: string;
  cert2desc: string;
  language: string;
  imgupload: string;
}

// Function to handle form submission
function handleFormSubmit(event: Event): void {
  event.preventDefault();

  // Get form input values
  const fullnameInput = document.getElementById("fullname") as HTMLInputElement;
  const professionInput = document.getElementById(
    "profession"
  ) as HTMLInputElement;
  const nameInput = document.getElementById("name") as HTMLInputElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const phoneInput = document.getElementById("phone") as HTMLInputElement;
  const addressInput = document.getElementById("address") as HTMLInputElement;
  const skillsInput = document.getElementById("skills") as HTMLTextAreaElement;
  const experienceInput = document.getElementById(
    "experience"
  ) as HTMLTextAreaElement;
  const educationInput = document.getElementById(
    "education"
  ) as HTMLTextAreaElement;
  const aboutInput = document.getElementById("about") as HTMLTextAreaElement;
  const cert1Input = document.getElementById(
    "cert1-name"
  ) as HTMLTextAreaElement;
  const certdescInput = document.getElementById(
    "cert1-description"
  ) as HTMLTextAreaElement;
  const cert2Input = document.getElementById(
    "cert2-name"
  ) as HTMLTextAreaElement;
  const cert2descInput = document.getElementById(
    "cert2-description"
  ) as HTMLTextAreaElement;
  const languageInput = document.getElementById(
    "language"
  ) as HTMLTextAreaElement;
  const imguploadInput = document.getElementById(
    "image-upload"
  ) as HTMLInputElement;

  // Collect form data
  const resumeData: ResumeData = {
    fullname: fullnameInput.value,
    profession: professionInput.value,
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    address: addressInput.value,
    skills: skillsInput.value.split(",").map((skill) => skill.trim()),
    experience: experienceInput.value,
    education: educationInput.value,
    about: aboutInput.value,
    cert1name: cert1Input.value,
    cert2name: cert2Input.value,
    cert1desc: certdescInput.value,
    cert2desc: cert2descInput.value,
    language: languageInput.value,
    imgupload: imguploadInput.files?.[0]
      ? URL.createObjectURL(imguploadInput.files[0])
      : "",
  };

  console.log(resumeData); // Check if data is being collected

  // Call function to generate resume
  generateResume(resumeData);
}

// Function to generate a shareable link
function generateShareableLink(data: ResumeData): string {
  const encodedData = encodeURIComponent(JSON.stringify(data));
  const baseUrl = window.location.origin + window.location.pathname;
  return `${baseUrl}?resumeData=${encodedData}`;
}



// Function to generate and display the resume
function generateResume(data: ResumeData): void {
  const outputDiv = document.getElementById("resume-output") as HTMLDivElement;
  const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
  const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;


  if (outputDiv) {
    outputDiv.innerHTML = `
              <div class="resume-section">
    
          <div class="layout">
            <!-- Left-hand side: Image side -->
    
            
            <div class="image-container">
            <img src="${data.imgupload}" alt="Profile Picture" class="pic" id="profile-pic" />
           
          </div>
    
    
            <form id="career-cert-form">
              <!-- Career Objective -->
              <div class="form-group">
                <label for="career-objective">About Me</label>
                <textarea id="career-objective" placeholder="Enter your career objective" contenteditable="true" >${data.about}</textarea>
              </div>
    
              <!-- Certification 1 -->
              <div class="form-group">
                <label for="cert1-name">Certification 1 Name</label>
                <input type="text" id="cert1-name" placeholder="Enter the name of your first certification" contenteditable="true" value="${data.cert1name}" >
              </div>
    
              <div class="form-group">
                <label for="cert1-description">Certification 1 Description</label>
                <textarea id="cert1-description" readonly placeholder="Enter a description for your first certification" contenteditable="true"
                  >${data.cert1desc}</textarea>
              </div>
    
              <!-- Certification 2 -->
              <div class="form-group">
                <label for="cert2-name">Certification 2 Name</label>
                <input type="text" id="cert2-name" readonly placeholder="Enter the name of your second certification" contenteditable="true" value="${data.cert2name}" >
              </div>
    
              <div class="form-group">
                <label for="cert2-description">Certification 2 Description</label>
                <textarea id="cert2-description" readonly placeholder="Enter a description for your second certification" contenteditable="true"
                  >${data.cert2desc}</textarea>
              </div>
               <div class="form-group">
                <label for="language">Language</label>
                <textarea class="text" id="language" placeholder="languages" contenteditable="true"
                  >${data.language}</textarea>
              </div>
            </form>
          </div>
    
          <!-- Right-hand side: info detail-->
          <div class="right-container">
            <h1 class="name-heading" id="fullname" contenteditable="true">${data.name}</h1>
            <span class="span" id="profession" contenteditable="true">${data.profession}</span>
           
            
            <form id="resume-form">
          
              <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" placeholder="Enter your name" contenteditable="true" value="${data.name}">
              </div>
             
    
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" contenteditable="true" value="${data.email}">
              </div>
    
              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input type="text" id="phone" placeholder="Enter your phone number" contenteditable="true" value="${data.phone}" >
              </div>
    
              <div class="form-group">
                <label for="address">Address</label>
                <input type="text" id="address" placeholder="Enter your address" contenteditable="true" value="${data.address}" >
              </div>
    
              <div class="form-group">
                <label for="skills">Skills</label>
                <textarea id="skills" placeholder="List your skills (comma-separated)" contenteditable="true" >${data.skills}</textarea>
              </div>
    
              <div class="form-group">
                <label for="experience">Experience</label>
                <textarea id="experience" placeholder="Describe your experience" contenteditable="true" >${data.experience}</textarea>
              </div>
    
              <div class="form-group">
                <label for="education">Education</label>
                <textarea id="education" placeholder="Describe your education" contenteditable="true" >${data.education}</textarea>
              </div>
    
            </form>
    
          </div>
    
        </div>

          `;

          // Display shareable link
    const shareableLink = generateShareableLink(data);
    if (shareableLinkContainer && shareableLinkElement) {
      shareableLinkContainer.style.display = "block"; // Show container
      shareableLinkElement.href = shareableLink;
      shareableLinkElement.textContent = "Shareable Link";
    }
  }
}
  





// Attach event listeners
const form = document.getElementById("resume-form") as HTMLFormElement;
if (form) {
  form.addEventListener("submit", handleFormSubmit);
}

// Print functionality
const printButton = document.getElementById(
  "print-resume"
) as HTMLButtonElement;
if (printButton) {
  const outputDiv = document.querySelector(".resume-section") as HTMLDivElement;
  printButton.addEventListener("click", () => {
    window.print(); // This will open the print dialog
  });
}

// Image uploader functionality
const imageUploadInput = document.getElementById(
  "image-upload"
) as HTMLInputElement;
if (imageUploadInput) {
  imageUploadInput.addEventListener("change", (event) => {
    const target = event.target as HTMLInputElement;

    if (target.files && target.files.length > 0) {
      const file = target.files[0];
      const reader = new FileReader();

      // When the file is read, set the data URL to the input field and display the image in the preview section
      reader.onload = function (e) {
        const result = e.target?.result as string;
        imageUploadInput.dataset.url = result; // Store data URL in a custom data attribute
        const profilePic = document.getElementById(
          "profile-pic"
        ) as HTMLImageElement;
        if (profilePic) profilePic.src = result; // Preview the image in the input area
      };

      // Read the image file as a data URL
      reader.readAsDataURL(file);
    }
  });
}

