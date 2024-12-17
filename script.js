document.addEventListener("DOMContentLoaded", () => {
    const elements = [
      { selector: ".fv-sea", animation: "fade-from-bottom" },
      { selector: ".fv-boat", animation: "fade-in" }, 
      { selector: ".fv-animals", animation: "fade-in" },
      { selector: ".fv-subtitle", animation: "fade-in" },
      { selector: ".fv-birds", animation: "fade-from-top" },
      { selector: ".fv-pio1", animation: "fade-from-right" },
      { selector: ".fv-pio2", animation: "fade-from-right" },
      { selector: ".fv-pio3", animation: "fade-from-right" },
      { selector: ".fv-circle1", animation: "fade-from-left" },
      { selector: ".fv-cta", animation: "fade-from-left" },
      { selector: ".fv-logo", animation: "fade-from-top" },
      { selector: ".fv-menu", animation: "fade-from-top" },
      { selector: ".fv-circle2", animation: "fade-from-right" },
      { selector: ".fv-island", animation: "fade-from-right" },
      { selector: ".fv-cloud1", animation: "fade-from-left" },
      { selector: ".fv-cloud2", animation: "fade-from-right" },
      { selector: ".fv-cloud3", animation: "fade-from-right" },
      { selector: ".fv-scroll", animation: "fade-from-bottom" },
    ];
  
    elements.forEach((element, index) => {
      setTimeout(() => {
        const el = document.querySelector(element.selector);
        if (el) {
          el.classList.add(element.animation);
        }
      }, 200 * index); 
    });
  });
  