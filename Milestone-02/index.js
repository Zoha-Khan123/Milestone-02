// function takeValue():void {
//     const name = (document.getElementById("Name")as HTMLInputElement).value;
//     const email = (document.getElementById("Email")as HTMLInputElement).value;
//     const phone = (document.getElementById("Phone")as HTMLInputElement).value;
//     const about = (document.getElementById("About")as HTMLInputElement).value;
//     const experience = (document.getElementById("Experience")as HTMLInputElement).value;
//     const skills = (document.getElementById("Skills")as HTMLInputElement).value;
//     const output = `
//     <h1>Your Generated CV</h1><br><br>
//     Your name is: ${name}<br>
//     Your email is: ${email}<br>
//     Your phone no is: ${phone}<br>
//     Your about section: ${about}<br>
//     Your experience: ${experience}<br>
//     Your skills: ${skills}<br>
//   `;
//   document.write(output);
// }
function takeValue() {
    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    var phone = document.getElementById("Phone").value;
    var about = document.getElementById("About").value;
    var experience = document.getElementById("Experience").value;
    var skills = document.getElementById("Skills").value;
    var output = "\n      <h1>Your Generated CV</h1><br><br>\n      Your name is: ".concat(name, "<br>\n      Your email is: ").concat(email, "<br>\n      Your phone no is: ").concat(phone, "<br>\n      Your about section: ").concat(about, "<br>\n      Your experience: ").concat(experience, "<br>\n      Your skills: ").concat(skills, "<br>\n  ");
    document.write(output);
    // Return false to prevent form submission
    return false;
}
