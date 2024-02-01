let string = "";
let boxes = document.querySelectorAll("button");
let inputbtn = document.querySelector("input");
let color = document.querySelector(".yellow");

boxes.forEach(function (box) {
  box.addEventListener("click", (e) => {
    try {
      if (e.target.innerHTML === "=") {
        // Avoid using eval due to security risks
        // Use a more secure method to evaluate expressions
        string = new Function("return " + string)();
        document.querySelector("input").value = string;
      } else if (e.target.innerHTML === "C") {
        string = "";
        document.querySelector("input").value = string;
      } else {
        console.log(e.target);
        string = string + e.target.innerHTML;
        document.querySelector("input").value = string;
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  });
});
