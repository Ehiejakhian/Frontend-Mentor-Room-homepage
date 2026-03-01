# Frontend Mentor - Room homepage solution

Hi! I'm Ehi. This is my solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Meet me](#hi)
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

# Hi!
I'm Ehi. I'm a front-end web developer and sketch artist! I live in Edostate, Nigeria. I love code.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![](./design/desktop-design-slide-1.jpg)
**My Competition**

![](./design/mine/desktop.png)
**My Design**

I did it. Its decent and I'm happy with it.

### Links

- Solution URL: [https://github.com/Ehiejakhian/Frontend-Mentor-Room-homepage](https://github.com/Ehiejakhian/Frontend-Mentor-Room-homepage)
- Live Site URL: [**https://ehiejakhian.github.io/Frontend-Mentor-Room-homepage/**](https://ehiejakhian.github.io/Frontend-Mentor-Room-homepage/)

## My process
I usually start by writing my creating my project structure. I have a template model I work on to create my files. And this is especially makes specifying file paths accurate for my compiled CSS from SCSS easy to write and understand.
I then take some time to look at the project's design files, at least 3 minutes. I chheck the atates, the mobile and desktop proportions and then organize what I see into sections that I can style easily with SCSS. Then I create a git repo to house my changes to the project and publish it.  

### Built with
I built this page with:
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- **SCSS/SASS**
- and JavaScript

### What I learned

CSS **anchor positioning** is probaply one of the best things that ever happened to me on tis project. Apply an anchor name to the parent, use the **`position-anchor`** and **`position-area`** rules on the child element and you're good to go. Just like this:

```scss
.parent {
  anchor-name: --whatever;
  &__child {
    position: absolute;
    position-anchor: --whatever;
    // position-area: bottom left;
    // or
    // left: anchor(left);
    // bottom: anchor(bottom);
  }
}
```
Yes. Just like that.

<!--
### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**


### Useful resources
- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.
-->

## Author

- Website - [**ehiejakhian.github.io**](https://ehiejakhian.github.io/)
- Frontend Mentor - [@EhiEjakhian](https://www.frontendmentor.io/profile/EhiEjakhian)


## Acknowledgments

A big **thank you** to everyone out there who offers free online resources to learn code and oter stuff out there. Thanks for viewing my solution too. It truly means a lot to me that you’re looking at my Frontend Mentor solution. I don’t take that for granted at all. Thank you.
