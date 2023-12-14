export const fadeVariant = (direction, type, duration, delay) => {
  return {
    hidden: {
      opacity: 0,
      x: direction === "left" ? 75 : direction === "right" ? -75 : 0,
      y: direction === "up" ? 75 : direction === "down" ? -75 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: type,
        duration: duration,
        delay: delay,
        ease: "easeOut",
      },
    },
  };
};

export const zoomVariant = (zoom, type, duration, delay) => {
  return {
    hidden: {
      opacity: 0,
      scale: zoom === "out" ? 1.5 : 0.5,
    },
    show: {
      opacity: 1,
      scale: zoom === "in" ? 1 : 1,
      transition: {
        type: type,
        duration: duration,
        delay: delay,
        ease: zoom === "in" ? "easeIn" : "easeOut",
      },
    },
  };
};
