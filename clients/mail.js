
// const signUpForm=document.getElementById('sign');
// // http://localhost:4000/clients/login



// console.log("abdullah");

// const  signUp=()=>{
//     const email=signUpForm.elements.email.value; 
//     const name=signUpForm.elements.name.value; 
//     const password=signUpForm.elements.password.value; 
//     // const xhttp = new XMLHttpRequest();//http://127.0.0.1:4000/courses/getAllCourses
//     //  xhttp.open("GET", "http://127.0.0.1:4000/courses/getAllCourses");
//     // xhttp.send();
//     //  console.log(xhttp.responseText);

//     let myreq=new XMLHttpRequest();
// myreq.open("POST","http://127.0.0.1:4000/clients/addClient");
// // myreq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// myreq.send("Email=email");
// myreq.onreadystatechange=()=>{
// console.log(myreq.readyState);       // if 404 the data not found in server 
// console.log(myreq.status);       // if 404 the data not found in server 
// // let jsdata=JSON.parse(myreq); 
// console.log(myreq.response);
// // console.log(jsdata);
// }
// }


addclient="http://127.0.0.1:4000/clients/addClient";
loginURL="http://127.0.0.1:4000/clients/login";
getCoursesUrl="http://127.0.0.1:4000/courses/getCourses";


const signUpForm = document.getElementById('sign');
const loginForm = document.getElementById('login');
let course_ele=document.getElementById("a1");
// course_ele.innerHTML="abdulal";

const signUp = () => {
    const email = signUpForm.elements.email.value;
    const name = signUpForm.elements.name.value;
    const password = signUpForm.elements.password.value;

    let myreq = new XMLHttpRequest();
    myreq.open("POST", addclient);
    myreq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    myreq.send(`email=${email}&name=${name}&password=${password}`);

    myreq.onreadystatechange = () => {
        console.log(myreq.readyState);
        console.log(myreq.status);

        if (myreq.readyState === 4 && myreq.status === 201) {

            console.log(myreq.responseText);
            window.location.href = "http://www.w3schools.com";


            // Process the response here
        }
    }
}

// const login_req=new XMLHttpRequest();

const login=()=>{
    const email = loginForm.elements.email.value;
 
    const password = loginForm.elements.password.value;
    
    
    login_req.open("POST",loginURL);
    login_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    login_req.send(`email=${email}&password=${password}`);
    login_req.onload=()=>{
        if( login_req.readyState==4 && login_req.status==200){
            console.log(login_req.responseText);
            // courses_req.onload(login_req.responseText)
            // onload(login_req.responseText);
            // .getcourses(login_req.responseText);
        }
    }
}

// onload=(e)=>{


    let arrofcourses=[];

// const getcourses=(e)=>{

    const courses_req=new XMLHttpRequest();

    courses_req.open("POST",getCoursesUrl);
    courses_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    courses_req.send(`token=${login_req.responseText}`);

    courses_req.onload=(e)=>{
        if( courses_req.readyState==4 && courses_req.status==200){
            console.log(courses_req.responseText);
            arrofcourses=JSON.parse(courses_req.responseText);
            document.location="client page.html";

                
        }
        // window.location.href = "http://www.w3schools.com";

        // window.location.href="client page.html";

    }
// }

// getcourses(e);
    if(course_ele){
        console.log(arrofcourses[0]);
        course_ele.innerHTML=arrofcourses[0];
        }

// }

// document.getElementById("a1").innerText="log ";
function myFunction(){
    let a1=document.getElementById("a1").innerText="log in  i  ";

}


function myFunction1(){
    let a1=document.getElementById("a1").innerText=" client fun   ";

}


