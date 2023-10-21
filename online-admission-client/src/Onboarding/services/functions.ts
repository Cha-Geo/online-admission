const scrollToSection = (sectionId: string) => {
  console.log("Scrolling to section:", sectionId);
  const targetElement = document.getElementById(sectionId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}

export {
    scrollToSection,
}
