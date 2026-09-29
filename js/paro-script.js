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
// === 音乐控制 ===
const bgm = document.getElementById('bgm');
const record = document.querySelector('.record');

if (bgm && record) {
  let isPlaying = false;

  record.addEventListener('click', () => {
    if (!isPlaying) {
      bgm.play();
      record.style.animationPlayState = 'running';
    } else {
      bgm.pause();
      record.style.animationPlayState = 'paused';
    }
    isPlaying = !isPlaying;
  });

  // 当音乐被用户手动暂停或播放时（非点击图片）
  bgm.addEventListener('play', () => {
    record.style.animationPlayState = 'running';
    isPlaying = true;
  });
  bgm.addEventListener('pause', () => {
    record.style.animationPlayState = 'paused';
    isPlaying = false;
  });
}



