
function takeValue(): boolean {
  const name = (document.getElementById("Name") as HTMLInputElement).value;
  const email = (document.getElementById("Email") as HTMLInputElement).value;
  const phone = (document.getElementById("Phone") as HTMLInputElement).value;
  const about = (document.getElementById("About") as HTMLTextAreaElement).value;
  const experience = (document.getElementById("Experience") as HTMLTextAreaElement).value;
  const skills = (document.getElementById("Skills") as HTMLTextAreaElement).value;

  const output = `
      <h1>Your Generated CV</h1><br><br>
      Your name is: ${name}<br>
      Your email is: ${email}<br>
      Your phone no is: ${phone}<br>
      Your about section: ${about}<br>
      Your experience: ${experience}<br>
      Your skills: ${skills}<br>
  `;

  document.write(output);

  // Return false to prevent form submission
  return false;
}
