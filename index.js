// import AOS from 'aos';
// import 'aos/dist/aos.css';
// Update the import paths accordingly
import AOS from "./path/to/aos";
import "./path/to/aos/dist/aos.css";


AOS.init({
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 120,
  delay: 50, 
  duration: 400,
  easing: 'ease',
  once: true,
  mirror: false,
  anchorPlacement: 'top-bottom',
});