"use strict";

/*********projects******/
const containerSlidersProjects = document.querySelector(".section-projects__container-cards");
const slideProject = document.querySelector(".section-projects__card-project");
const buttonNextSlideProject = document.querySelector(".section-projects__btn-next");
const buttonPreviousSlideProject = document.querySelector(".section-projects__btn-previous");
/******testimonial*****/
const containerSlidersTestimonials = document.querySelector(".section-testimonials__container-cards");
const slideTestimonial = document.querySelector(".section-testimonials__card");
const buttonPreviousSlideTestimonial = document.querySelector(".section-testimonials__btn-previous");
const buttonNextSlideTestimonial = document.querySelector(".section-testimonials__btn-next");

/*********events slide show projects */
buttonNextSlideProject.addEventListener("click", () => {
  nextSlide(containerSlidersProjects, slideProject);
});
buttonPreviousSlideProject.addEventListener("click", () => {
  previousSlide(containerSlidersProjects, slideProject);
});
buttonNextSlideProject.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === "") 
    nextSlide(containerSlidersProjects, slideProject);
});
buttonPreviousSlideProject.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === "")
    previousSlide(containerSlidersProjects, slideProject);
});

/**********evvents slide show testimonials */
buttonNextSlideTestimonial.addEventListener("click", () => {
  nextSlide(containerSlidersTestimonials, slideTestimonial);
});
buttonPreviousSlideTestimonial.addEventListener("click", () => {
  previousSlide(containerSlidersTestimonials, slideTestimonial);
});
buttonNextSlideTestimonial.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === "") 
    nextSlide(containerSlidersTestimonials, slideTestimonial);
});
buttonPreviousSlideTestimonial.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === "")
    previousSlide(containerSlidersTestimonials, slideTestimonial);
});


/*********utils functions */
function nextSlide(container, slider) {
  container.scrollLeft += slider.offsetWidth;
}

function previousSlide(container, slider) {
  container.scrollLeft -= slider.offsetWidth;
}