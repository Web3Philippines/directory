import { useEffect, useState } from "react";
import { TbSun, TbMoon } from "react-icons/tb";

const iconDiv =
  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer transition-opacity duration-200";

function DarkModeSwitch() {
  //Set light theme by default
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    //Set theme on device
    if (typeof window !== "undefined") {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      } else {
        setTheme("light");
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  function changeTheme(_theme: string) {
    //Set theme on the html tag.
    if (_theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setTheme(_theme);
    localStorage.setItem("theme", _theme);
  }

  console.log(theme);

  return (
    <div className="relative ml-auto mr-5 h-12 w-12">
      <div
        className={`text-black ${iconDiv} ${
          theme === "dark" ? "opacity-100" : "hidden opacity-0"
        }`}
        onClick={() => changeTheme("light")}
      >
        <TbSun size={28} />
      </div>
      <div
        className={`text-white ${iconDiv} ${
          theme === "light" ? "opacity-100" : "hidden opacity-0"
        }`}
        onClick={() => changeTheme("dark")}
      >
        <TbMoon size={28} />
      </div>
    </div>
  );
}

export default DarkModeSwitch;
