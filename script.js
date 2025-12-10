// Select the <body> element to attach event listeners to
const bodyEl = document.querySelector("body");

// Add a listener for mouse movement over the body
bodyEl.addEventListener("mousemove", (event) => {
  // Horizontal mouse position relative to the event target
  const xPos = event.offsetX;
  // Vertical mouse position relative to the event target
  const yPos = event.offsetY;
  // Create a new <span> element to represent the trail/heart
  const spanEl = document.createElement("span");
  // Position the span horizontally using the mouse X coordinate
  spanEl.style.left = xPos + "px";
  // Position the span vertically using the mouse Y coordinate
  spanEl.style.top = yPos + "px";
  // Pick a random size (0 to 100) for variety
  const size = Math.random() * 100;
  // Apply the random width to the span
  spanEl.style.width = size + "px";
  // Apply the random height to the span
  spanEl.style.height = size + "px";
  // Insert the span into the document so it's visible
  bodyEl.appendChild(spanEl);
  // Remove the span after 3 seconds to keep the DOM tidy
  setTimeout(() => {
    // Remove the element created for the trail
    spanEl.remove();
  }, 3000);
});
