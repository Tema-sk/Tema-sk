"use strict";

class App {
  constructor() {
    this.init();
  }

  init() {
    this.initBurger(); //  меню бургер
    this.initAction(); // Пошук
  }

  initBurger() {
    document.addEventListener("click", documentActions);

    function documentActions(e) {
      const targetElement = e.target;

      if (targetElement.closest(".header-bottom__icon-menu")) {
        document.documentElement.toggleAttribute("data-menu-open");
      }
    }
  }

  initAction() {
    // знаходимо всі блоки з іконками
    const actionBlocks = document.querySelectorAll(
      ".action__search, .action__email, .action__phone",
    );

    actionBlocks.forEach((block) => {
      block.addEventListener("click", () => {
        const targetType = block.dataset.target || block.classList[0]; // 'search', 'email' тощо
        const allInputs = document.querySelectorAll(".action__input");

        // ховаємо всі інпути
        allInputs.forEach((input) => (input.style.display = "none"));

        // показуємо поточний інпут
        const currentInput = block.querySelector(".action__input");
        if (currentInput) {
          currentInput.style.display = "block";
          currentInput.focus(); // фокус для введення
        }
      });
    });
  }
}

// Запуск при завантаженні DOM
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => new App());
} else {
  new App(); // DOM вже готовий
}
