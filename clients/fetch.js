
addclient="http://127.0.0.1:4000/clients/addClient";
loginURL="http://127.0.0.1:4000/clients/login";
getCoursesUrl="http://127.0.0.1:4000/courses/getCourses";
reserveCourseUrl="http://127.0.0.1:4000/clients/reserveCourse";


const signUpForm = document.getElementById('sign');
const loginForm = document.getElementById('login');

async function fetchcourses(){
    const token =window.localStorage.getItem("token");
    try{

    const deta={
        "token":token
    };
  let response=   await fetch(getCoursesUrl,{

    method:"post",
    headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    body:JSON.stringify(deta)
  });
  const courses= await response.json();
  console.log("response",response);
  // if (response.status!=200) {
  //   throw console.error(" no valid Json");
  // }
  // console.log(courses );
  const course_ele=document.getElementById("courses_container");
  for (let index = 0; index < courses.length; index++) {
    const element = courses[index];
    course_ele.innerHTML+=`            <div class="course">
    <div class="image"> <img src="./images/code.org.gif " alt=""> </div>
    <div class="discription"> ${JSON.stringify(element.title)} </div>
</div>

`;
    
  }
    }
    catch(e){
      course_ele.innerHTML="eee";
      setTimeout(() => {
        window.location.href="log in .html";
      }, 5000);
    }
   

}


function myFunction(){
    let a1=document.getElementById("a1").innerText="log in  fun  ";

}





async function login(){
const email = loginForm.elements.email.value;
 
const password = loginForm.elements.password.value;
const data={
    "email":email,
    "password":password
}

    var response= await fetch(loginURL,{
        method:"post",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body:JSON.stringify(data)
    });
    var token= await response.json();
    window.localStorage.setItem("token",token);
    window.location.href="client page.html";
}




async function reserveCourse(){
  bodyData={
    token:localStorage.getItem("token"),
    id:"aa"
  }

  let response= await fetch(reserveCourseUrl,{
    method:"post",
    headers:{
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body:JSON.stringify(bodyData)
  })

  window.alert(await response.json());


}