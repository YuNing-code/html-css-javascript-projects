# Note of day 1
## broder-radius
- The border-radius property
The property "border-radius" is short hand for 
border-top-left-radius
border-top-right-radius
border-bottom-right-radius
border-bottom-left-radius

/* top-left | top-right | bottom-right | bottom-left */
border-radius: 1px 0 3px 4px;

/* top-left-and-bottom-right | top-right-and-bottom-left */
border-radius: 10px 5%;

/* top-left | top-right-and-bottom-left | bottom-right */
border-radius: 2px 4px 2px;


/* The syntax of the second radius allows one to four values */
/* (first radius values) / radius */
border-radius: 1em / 5em;

/* It is equivalent to:  两个参数形成的就不是标准的圆角了，而是椭圆的数据*/
border-top-left-radius: 1em 5em; 
border-top-right-radius: 1em 5em;
border-bottom-right-radius: 1em 5em;
border-bottom-left-radius: 1em 5em;


border-radius: 4px 3px 6px / 2px 4px;

/* It is equivalent to: 如果对角只设置了一个数据，那么适用于这两个角*/
border-top-left-radius: 4px 2px;
border-top-right-radius: 3px 4px;
border-bottom-right-radius: 6px 2px;
border-bottom-left-radius: 3px 4px;

## transition
shorthand for 
transition-behavior
transition-delay
transition-duration
transition-property
transition-timing-function

格式语法
transition = 
  <single-transition>#  

<single-transition> = 
  [ none | <single-transition-property> ]  ||
  <time>                                   ||
  <easing-function>                        ||
  <time>                                   ||
  <transition-behavior-value>      

  <transition-behavior-value> = 
  normal          |
  allow-discrete  /* 用这个标签后既可以分别各自用最上面被缩盖的属性 */

<linear-easing-function> = 
  linear      |
  <linear()>  

<cubic-bezier-easing-function> = 
  ease              |
  ease-in           |
  ease-out          |
  ease-in-out       |
  <cubic-bezier()>  

<step-easing-function> = 
  step-start  |
  step-end    |
  <steps()>   

