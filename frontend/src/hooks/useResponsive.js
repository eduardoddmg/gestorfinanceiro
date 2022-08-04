import { useEffect, useState } from "react";

export const useResponsive = () => {
  const [responsive, setResponsive] = useState(false);

  useEffect(() => {
    const resizeWindow = () =>
      window.innerWidth < 1000 ? setResponsive(true) : setResponsive(false);
    window.addEventListener("resize", resizeWindow);
  });

  useEffect(() =>
    window.innerWidth < 1000 ? setResponsive(true) : setResponsive(false)
  );

  return responsive;
};
