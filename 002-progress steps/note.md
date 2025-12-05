# Note of day 2

## CSS custom properties(variables)

### definition
represent specific values to be reused throughout a document.

Custom properties allow a value to be defined in one place, then referenced in multiple other places so that it's easier to work with. 

Another benefit is readability and semantics. For example, --main-text-color is easier to understand than the hexadecimal color #00ff00, especially if the color is used in different contexts.

### synatx
They are set using the @property at-rule or by custom property syntax 
(e.g., --primary-color: blue;). 
Custom properties are accessed using the CSS var() function
 (e.g., color: var(--primary-color);).

a common practice is to define custom properties on the :root pseudo-class, so that it can be referenced globally:

:root {
    --main-bg-color:brown;  //case sensitive
} //如果:root换成其他则有了适用范围限制

#### fallback in var
.one {
  /* Red if --my-var is not defined */
  color: var(--my-var, red);
}

.two {
  /* pink if --my-var and --my-background are not defined */
  color: var(--my-var, var(--my-background, pink));
}

#### fallback in property
@property --box-color {
  syntax: "<color>";
  initial-value: teal;
  inherits: false;
}
/*第一个是粉色，第二三个都是上面的teal色 */
.one {
  --box-color: pink;
  background-color: var(--box-color);
}

.two {
  --box-color: peenk;
  background-color: var(--box-color);
}

.three {
  --box-color: 2rem;
  background-color: var(--box-color);
}