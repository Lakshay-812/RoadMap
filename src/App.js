// import logo from "./logo.svg";
import "./App.css";

import News from "./news";

function App() {
  var $cont = document.querySelector(".cont");
  var $elsArr = [].slice.call(document.querySelectorAll(".el"));
  var $closeBtnsArr = [].slice.call(
    document.querySelectorAll(".el__close-btn")
  );

  setTimeout(function () {
    $cont ? $cont.classList.remove("s--inactive") : < > </>;
  }, 200);

  $elsArr.forEach(function ($el) {
    $el.addEventListener("click", function () {
      if (this.classList.contains("s--active")) return;
      $cont.classList.add("s--el-active");
      this.classList.add("s--active");
    });
  });

  $closeBtnsArr.forEach(function ($btn) {
    $btn.addEventListener("click", function (e) {
      e.stopPropagation();
      $cont.classList.remove("s--el-active");
      document.querySelector(".el.s--active") ? (
        document.querySelector(".el.s--active").classList.remove("s--active")
      ) : (<>
      </>
      );
    });
  });

  const show = (a) => {
    document.querySelector(".scope").style.display = "none";
    document.querySelector(".news").style.display = "block";
    document.querySelector('.newstext').innerHTML = News[a];
  }

  const hide = () => {
    document.querySelector(".scope").style.display = "block";
    document.querySelector(".news").style.display = "none";
  }

  return (
    <div className="App" >
      <div class="cont s--inactive" >
        < p class="landHead" > SNU - RoadMap </p> <div class="cont__inner" >
          <div class="el" >

            <div class="el__overflow" >
              <div class="el__inner" >
                <div class="el__bg" > </div>
                <div class="el__preview-cont" >
                  <h2 class="el__heading" > SNU Mart </h2> </div >
                <div class="el__content" >
                  <div class="el__text" > SNU Mart </div> <div class="el__close-btn" > </div> <div class="el__paragraph" >
                    This module would display the products in Mini - Mart along with their availability and prices. < br />
                    <br />
                    Students would be able to add products to their carts and pay
                    for them and can pick up their order at any convenient time. < br />
                    <br />
                    Additionally, we would render 3 d models of items
                    for aesthetic purposes. </div> <a href="http://localhost/online-store-main/index.php"
                      target="_blank" >
                    <button className="btn btn-link" > Visit </button> </a > </div> </div > </div> </div > <div class="el" >
            <div class="el__overflow" >
              <div class="el__inner" >
                <div class="el__bg" > </div> <div class="el__preview-cont" >
                  <h2 class="el__heading" > SNU Library </h2> </div > <div class="el__content" >
                  <div class="el__text" > SNU Library </div> <div class="el__close-btn" > </div> <div class="el__paragraph" >
                    A platform that will aid in the management of books currently available in the library.It will contain records of all the books from the library. <br />
                    <br /> Snulib will contain two views, notably admin view and student view, with a secure authentication system.The admin side will help in maintaining the records of books that are present in the library, the list of books that have been issued by students.The student view contains the list of
                    books that are relevant to his / her department and also the list of all the books through which they can search and see their location(section, floor) in the library. </div>
                  <a href="https://snu-lib.herokuapp.com/"
                    target="_blank" >
                    <button className="btn btn-link" > Visit </button> </a > </div> </
              div > </div> </div >
          <div class="el" >
            <div class="el__overflow" >
              <div class="el__inner" >
                <div class="el__bg" > </div> <div class="el__preview-cont" >
                  <h2 class="el__heading" > SNU Resource Bank </h2> </
                div > <div class="el__content" >
                  <div class="el__text" > SNU Resource </div> <div class="el__close-btn" > </div> <div class="el__paragraph" >
                    Students can see the reviews provided by their peers or their seniors who have already completed the course and devise their strategy.The students can contribute resources, past quizzes and, other related materials.This system helps to clear doubts and confusion regarding how to begin preparing
                    for a particular course and, students can learn from others experiences. </div>
                  <a target="_blank"
                    href="http://resource-bank.herokuapp.com/" >
                    <button className="btn btn-link" > Visit </button> </a > </div> </
              div > </div> </ div > <div class="el" >
            <div class="el__overflow" >
              <div class="el__inner" >
                <div class="el__bg" > </div> <div class="el__preview-cont" >
                  <h2 class="el__heading" > SNU News </h2> </div > <div class="el__content" >
                  <div class="el__text" > SNU News </div> <div class="el__close-btn" > </div>

                  <div class="el__paragraph-t" >
                    <div className="news"
                      style={
                        {
                          display: "none"
                        }
                      } >
                      <p className="newstext" > </p> <button onClick={
                        () => hide()
                      }
                        style={
                          {
                            padding: ".4rem .6rem",
                            marginTop: "1rem"
                          }
                        } > Back </button>                     </div > <div class="scope" >
                      <span onClick={
                        () => show(1)
                      }
                        style={
                          {
                            "--i": "1"
                          }
                        } >
                        <img src="https://snu.edu.in/sites/default/files/styles/image_size__900_x_600/public/news-IOE%20%282%29.jpg?itok=li3MByZl"
                          alt="not found" >
                        </img> </span > <a > </a>
                      <span onClick={
                        () => show(2)
                      }
                        style={
                          {
                            "--i": "2"
                          }
                        } >

                        <img src="https://snu.edu.in/sites/default/files/styles/image_size__300_x_200/public/news%20%2819%29.jpg?itok=HPTGkoo-"
                          alt="not found" >
                        </img> </span >
                      <span onClick={
                        () => show(3)
                      }
                        style={
                          {
                            "--i": "3"
                          }
                        } >

                        <img src="https://snu.edu.in/sites/default/files/styles/image_size__300_x_200/public/900-600%20POST_1.png?itok=gltf02Eh"
                          alt="not found" >
                        </img> </span >
                      <span onClick={
                        () => show(4)
                      }
                        style={
                          {
                            "--i": "4"
                          }
                        } >

                        <img src="https://snu.edu.in/sites/default/files/styles/image_size__300_x_200/public/news%20%2815%29.jpg?itok=ZZ5bzAC1"
                          alt="not found" >
                        </img> </span >
                      <span onClick={
                        () => show(5)
                      }
                        style={
                          {
                            "--i": "5"
                          }
                        } >
                        <img src="https://snu.edu.in/sites/default/files/styles/image_size__300_x_200/public/Team-vidyut.jpg?itok=8lNDgDV9"
                          alt="not found" >
                        </img> </span >

                    </div> </div > </div> </div > </div>
          </div > </div> </div > </div>
  );
}

export default App;
