
addclient="http://127.0.0.1:4000/clients/addClient";
loginURL="http://127.0.0.1:4000/clients/login";
getCoursesUrl="http://127.0.0.1:4000/courses/getCourses";



const signUpForm = document.getElementById('sign');
const loginForm = document.getElementById('login');


const login=()=>{
    const email = loginForm.elements.email.value;
 
    const password = loginForm.elements.password.value;
    
    const login_req=new XMLHttpRequest();

    login_req.open("POST",loginURL);
    login_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    login_req.send(`email=${email}&password=${password}`);
    login_req.onload=()=>{
        if( login_req.readyState==4 && login_req.status==200){
            console.log(login_req.responseText);
            
            window.localStorage.setItem("token",login_req.responseText);
            // courses_req.onload(login_req.responseText)
            // onload(login_req.responseText);
            // .getcourses(login_req.responseText);
            document.location="client page.html";

        }
    }
}



function myFunction(){
    let a1=document.getElementById("a1").innerText="log in  fun  ";

}


function myFunction1(){
    let a1=document.getElementById("a1").innerText=" client fun   ";
    let token=window.localStorage.getItem("token");
    if(token){
    console.log("tokennn is :",token);
    const courses_req=new XMLHttpRequest();

    courses_req.open("POST",getCoursesUrl);
    courses_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    console.log(" token : ",token);
    courses_req.send(`token=${token}`);

    courses_req.onload=()=>{
        if( courses_req.readyState==4 && courses_req.status==200){
            console.log(courses_req.responseText);
            
            arrofcourses=JSON.parse(courses_req.responseText);
            // document.location="client page.html";

            document.getElementById("a1").innerText=courses_req.responseText;
        }else{    window.location.replace("log in .html")
    }
}
}
else{
    window.location.replace("log in .html")
}

}
