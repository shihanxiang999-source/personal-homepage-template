javascript
document.getElementById("year").textContent = new Date().getFullYear();
const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) =>(
entries.forEach((entry) =>(
if (entry.isIntersecting)<
entry.target.classList.add("visible");
>)；
)，(
threshold: 0.12
revealItems.forEach((item) => observer.observe(item));