/* ---- particles.js config ---- */

// particlesJS('particles-js', {
//   particles: {
//     number: { value: 100, density: { enable: true, value_area: 800 } },
//     color: { value: '#ffffff' },
//     shape: {
//       type: 'circle',
//       stroke: {
//         width: 0, color: '#000000',
//       },
//       polygon: { nb_sides: 5 },
//       image: {
//         src: 'img/github.svg', width: 100, height: 100,
//       },
//     },
//     opacity: {
//       value: 0.5,
//       random: false,
//       anim: {
//         enable: false, speed: 1, opacity_min: 0.1, sync: false,
//       },
//     },
//     size: {
//       value: 2,
//       random: false,
//       anim: {
//         enable: false, speed: 1, size_min: 0.1, sync: false,
//       },
//     },
//     line_linked: {
//       enable: true,
//     },
//     move: {
//       enable: true,
//       speed: 1,
//       direction: 'random',
//       random: false,
//       straight: false,
//       out_mode: 'bounce',
//       bounce: true,
//       attract: { enable: false, rotateX: 600, rotateY: 1200 },
//     },
//   },
//   interactivity: {
//     detect_on: 'canvas',
//     events: {
//       onhover: { enable: false, mode: 'repulse' },
//       onclick: { enable: false, mode: 'push' },
//       resize: true,
//     },
//     modes: {
//       grab: { distance: 400, line_linked: { opacity: 1 } },
//       bubble: {
//         distance: 400,
//         size: 40,
//         duration: 2,
//         opacity: 8,
//         speed: 3,
//       },
//       repulse: { distance: 200, duration: 0.4 },
//       push: { particles_nb: 4 },
//       remove: { particles_nb: 2 },
//     },
//   },
//   retina_detect: true,
// });

// function type() {
//   const textElement = document.getElementById('text');
//   const text = textElement.innerText;
//   textElement.innerText = '';
//   let i = 0;
//     if (i < text.length) {
//       const character = text.charAt(i);
//       if (character === ' ') {
//           textElement.innerHTML += '&nbsp;'; // Use a non-breaking space for spaces
//       } else {
//           textElement.innerText += character;
//       }
//       i++;
//       setTimeout(type, 200); // Adjust the typing speed here (50ms in this example)
//   }
// }

// Trigger the typing effect when the page loads
// window.onload = type;

/* eslint-enable */
function typeText(elementId) {
  const textElement = document.getElementById(elementId);
  const text = textElement.innerText;
  textElement.innerText = '';
  let i = 0;

  function type() {
    if (i < text.length) {
      const character = text.charAt(i);
      if (character === ' ') {
        textElement.innerHTML += '&nbsp;';
      } else {
        textElement.innerText += character;
      }
      i += 1;
      setTimeout(type, 100); // Adjust the typing speed here (50ms in this example)
    }
  }

  // Trigger the typing effect when the page loads
  type();
}
typeText('school');
typeText('job');
