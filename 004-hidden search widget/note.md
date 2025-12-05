# THE NOTE OF DAY FOUR

## toggle()
The toggle() method of the DOMTokenList interface removes an existing token from the list and returns false. If the token doesn't exist it's added and the function returns true.

### syntax

toggle(token)
toggle(token, force)

- force 可选参数，如果有该参数则toggle变为单项动作。如果是false,token会被去除，如果是true,token只会被添加。

### 其他同等效果
open.addEventListener("click", () => container.classList.add("show-nav"));
close.addEventListener("click", () => container.classList.remove("show-nav"));

用toogle比用classList增加/去除更加方便

  /**toggle函数这一行与下面用classList.add /remove 效果相同 */
  icon.classList.toggle("fa-times",search.classList.contains("active"))

  // if (search.classList.contains("active")){
  //   icon.classList.add("fa-times");
  // }else if (!search.classList.contains("active")){
  //   icon.classList.remove("fa-times")
  // }