export const clickLabelHandler = (item) => {
  item.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      item.click();
    }
  });
};

export const observeElement = (sectionElement) => {
  const options = {
    threshold: 0.25
  };

  const callBack = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Handle intersecting element
        entry.target.classList.add("in-view");
      } else {
        // Handle non-intersecting element
        entry.target.classList.remove("in-view");
      }
    });
  };
  const observer = new IntersectionObserver(callBack, options);
  sectionElement.forEach((element) => observer.observe(element));
};
