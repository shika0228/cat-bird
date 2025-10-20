document.addEventListener("DOMContentLoaded", function () {
  const mql = window.matchMedia("(max-width: 500px)");
  const openBtn  = document.querySelector(".open-nav-btn");
  const panel    = document.querySelector(".left-box-wrap");
  const closeBtn = panel ? panel.querySelector(".close-nav-btn") : null;

  if (!openBtn || !panel || !closeBtn) return;

  function applyByMQ() {
    document.body.classList.remove("nav-open"); // 切到桌面或初始都收起
    if (mql.matches) {
      openBtn.removeAttribute("hidden");
    } else {
      openBtn.setAttribute("hidden", "");
    }
  }
  applyByMQ();
  (mql.addEventListener ? mql.addEventListener("change", applyByMQ)
                        : mql.addListener(applyByMQ));

  openBtn.addEventListener("click", () => {
    if (!mql.matches) return;
    document.body.classList.add("nav-open");
    openBtn.setAttribute("aria-expanded", "true");
  });

  closeBtn.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    openBtn.setAttribute("aria-expanded", "false");
  });

  // 可选：ESC 关闭
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") document.body.classList.remove("nav-open");
  });
});




