const form = document.getElementById('form') as HTMLFormElement;
const displayElement = document.getElementById('Resume-display') as HTMLDivElement

form.addEventListener(`submit`, (event: Event)=> {
    event.preventDefault(); //prevent page reload

    //collect input values
    
    const name = (document.getElementById('name')as HTMLInputElement).value
    const Email = (document.getElementById(`email`)as HTMLInputElement).value
    const phone = (document.getElementById(`phone`)as HTMLInputElement).value
    const Education = (document.getElementById(`Education`)as HTMLInputElement).value
    const Experience = (document.getElementById(`Experience`)as HTMLInputElement).value
    const Skills = (document.getElementById(`Skills`)as HTMLInputElement).value

    //generate editable and dynamic resume
    const resumeHtml = `
    <h1>Editable and Dynamic Resume</h1>
    <h2>Personal Information</h2>
    <p><b>Name:</b><span contenteditable="true"> ${name}</span></p>
    <p><b>Email:</b><span contenteditable="true"> ${Email}</span></p>
    <p><b>Phone:</b><span contenteditable="true"> ${phone}</span></p>

    <h2>Education:</h2>
    <p contenteditable="true"> ${Education}</p>

    <h2>Experience:</h2>
    <p contenteditable="true"> ${Experience}</p>

    <h2>Skills:</h2>
    <p contenteditable="true"> ${Skills}</p>

    `;

    //dispaly genratated resume
    if(displayElement) {
        displayElement.innerHTML = resumeHtml;}
    else{
        console.error('Your resume is not completed.');
    }

    })