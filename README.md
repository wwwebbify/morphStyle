# morphStyle
morph element to randomly selected (pre-set) styles

##### Directions:
The 'styles' object contains the desired styles and values that you want to randomly pick from.
The function will randomly pick from the available 'styles' objects, then construct an object to be used in an animation library.

In this case, the function will use GSAP TweenLite to animate the style change, and return the element.

###### Usage:
morphStyle(someElement);

Will animate 'someElement' to one of the randomly chosen styles.
