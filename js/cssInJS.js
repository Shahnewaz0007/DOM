// console.log('Hello, CSS in JS!');

// const section=document.getElementsByTagName('section');

const section=document.querySelectorAll('section');
// console.log(section);
// for(const s of section){
//     console.log(s);
//     s.style.backgroundColor='blue';
//     s.style.border='1px solid red';
//     s.style.color='white';
//     s.style.marginBottom='10px';
    
// }


// We can also add class to the element and write the css in style.css file. This is a better approach as we can reuse the class and keep our js file clean.
for(const s of section)
{
    s.classList.add('section-card')
}
