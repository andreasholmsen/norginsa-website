AOS.init();

    const root = document.documentElement;
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    const iconSun = document.getElementById("icon-sun");
    const iconMoon = document.getElementById("icon-moon");

    function updateThemeIcon() {
      if (root.classList.contains("dark")) {
        iconSun.classList.remove("hidden");
        iconMoon.classList.add("hidden");
      } else {
        iconSun.classList.add("hidden");
        iconMoon.classList.remove("hidden");
      }
    }

    if (localStorage.getItem("theme") === "dark") {
      root.classList.add("dark");
    }
    updateThemeIcon();

    themeToggleBtn.addEventListener("click", () => {
      const toDark = root.classList.toggle("dark");
      localStorage.setItem("theme", toDark ? "dark" : "light");
      updateThemeIcon();
    });