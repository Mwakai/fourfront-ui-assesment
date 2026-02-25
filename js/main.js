"use strict";

/**
 * FourFront UI Assessment
 *
 * This file contains the JavaScript code to handle interactivity for the FourFront UI Assessment.
 * It includes:
 *  - toggleMembership()  : accordion show/hide for membership descriptions
 */

// Toggle membership description
function toggleMembership(type) {
  const body = document.getElementById(`${type}-body`);
  const btn = body.previousElementSibling;

  const isCollapsed = body.classList.contains("collapsed");

  if (isCollapsed) {
    body.classList.remove("collapsed");
    btn.setAttribute("aria-expanded", "true");
  } else {
    body.classList.add("collapsed");
    btn.setAttribute("aria-expanded", "false");
  }
}
