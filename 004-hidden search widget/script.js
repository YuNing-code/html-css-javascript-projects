const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const icon = document.querySelector(".fas")


btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();

  /**toggle函数这一行与下面用classList.add /remove 效果相同 */
  icon.classList.toggle("fa-times",search.classList.contains("active"))

  // if (search.classList.contains("active")){
  //   icon.classList.add("fa-times");
  // }else if (!search.classList.contains("active")){
  //   icon.classList.remove("fa-times")
  // }
     
});
