// ===== iPad 固定 1:1 缩放，其他设备正常响应式 =====
(function () {
  // 找到或创建 viewport 标签
  let vp = document.querySelector('meta[name="viewport"]');
  if (!vp) {
    vp = document.createElement('meta');
    vp.name = 'viewport';
    document.head.appendChild(vp);
  }

  // 默认设置：移动端可响应
  vp.setAttribute('content', 'width=device-width, initial-scale=1.0, viewport-fit=cover');

  // 检测是否为 iPad（包括 iPadOS 13+）
  const ua = navigator.userAgent;
  const isIpad = /iPad/.test(ua) || 
                 (/Macintosh/.test(ua) && (navigator.maxTouchPoints || 0) > 1);

  // 如果是 iPad，则强制按 1024px 宽显示
  if (isIpad) {
    vp.setAttribute('content', 'width=1024, initial-scale=1.0, viewport-fit=cover, user-scalable=no');
  }
})();


// === Hamburger show/hide on scroll + toggle nav ===
const ham = document.querySelector('.hamburger');
const bodyEl = document.body;

// 1) 滚到 .profile 开始显示按钮，回到 .top 隐藏
ScrollTrigger.create({
  trigger: '.profile',
  start: 'top bottom',         // .profile 顶到达视口底部附近就显示
  onEnter: () => ham.classList.add('show'),
  onLeaveBack: () => {
    ham.classList.remove('show');
    bodyEl.classList.remove('nav-open');
    ham.classList.remove('active');
    ham.setAttribute('aria-expanded', 'false');
  }
});

// 2) 点击按钮：展开/收起 .nav-wrap（通过切 body 类）
ham.addEventListener('click', () => {
  const opened = bodyEl.classList.toggle('nav-open');
  ham.classList.toggle('active', opened);
  ham.setAttribute('aria-expanded', opened ? 'true' : 'false');
});
gsap.registerPlugin(ScrollTrigger);

// NEW: Function to trigger the entrance animations for the .top section
function startTopAnimations() {
  // ====== 左侧印章：从左进入，依次出现 ======
  // Note: The scrollTrigger has been removed from this animation
  gsap.from([".logo", "#top-stamp-3", "#top-stamp-10","#top-stamp-4", "#top-stamp-8"], {
    x: -250,          // 从左侧进入
    opacity: 0,
    duration: 1.3,
    ease: "power3.out",
    stagger: 0.3     // 依次出现
  });
  
  // ====== 右侧印章：从右进入，依次出现 ======
  // Note: The scrollTrigger has been removed from this animation
  gsap.from(["#top-stamp-9","#top-stamp-11","#top-stamp-1", "#top-stamp-5", "#top-stamp-6","#top-stamp-12", "#top-stamp-7","#top-stamp-13"], {
    x: 250,           // 从右侧进入
    opacity: 0,
    duration: 1.1,
    ease: "power3.out",
    stagger: 0.15      // 依次出现
  });
}

// These are your parallax animations. They should REMAIN tied to ScrollTrigger.
gsap.to("#top-stamp-1,#top-stamp-9", {
    y:-200,
    scrollTrigger: {
      trigger: ".top",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
  gsap.to("#top-stamp-3", {
    y:-30,
    scrollTrigger: {
      trigger: ".top",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
  gsap.to("#top-stamp-4", {
    y:-200,
    scrollTrigger: {
      trigger: ".top",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
  gsap.to("#top-stamp-5", {
    y:-80,
    scrollTrigger: {
      trigger: ".top",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
  gsap.to("#top-stamp-6", {
    y:-150,
    scrollTrigger: {
      trigger: ".top",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
  gsap.to("#top-stamp-7", {
    y:-100,
    scrollTrigger: {
      trigger: ".top",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
  gsap.to("#top-stamp-8", {
    y:-90,
    scrollTrigger: {
      trigger: ".top",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
  gsap.to("#top-stamp-10", {
    y:-200,
    scrollTrigger: {
      trigger: ".top",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
  gsap.to("#top-stamp-11", {
    y:-50,
    scrollTrigger: {
      trigger: ".top",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
  gsap.to("#top-stamp-12", {
    y:-100,
    scrollTrigger: {
      trigger: ".top",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
  gsap.to("#top-stamp-13", {
    y:-400,
    scrollTrigger: {
      trigger: ".top",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
  
  gsap.to(".profile-1-img,.profile-2-img", {
    y: -30,
    duration: 1.8,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1
  });
gsap.fromTo(
    '.profile-title',{
      y:100,
      opacity:0,
    },{
       y:0,
       opacity:1,
       scrollTrigger: {
        trigger: ".profile",
        start: "top center", 
    },
    }
)
gsap.fromTo(
    '.paro-title',{
      y:100,
      opacity:0,
    },{
       y:0,
       opacity:1,
       scrollTrigger: {
        trigger: ".paro",
        start: "top center", 
    },
    }
)
gsap.fromTo(
    '.gallery-title',{
      y:100,
      opacity:0,
    },{
       y:0,
       opacity:1,
       scrollTrigger: {
        trigger: ".gallery",
        start: "top center", 
    },
    }
)
// 切换 .light 与 .gallery 的状态
const lightEl = document.querySelector('.light');
const galleryEl = document.querySelector('.gallery');

if (lightEl && galleryEl) {
  const toggle = () => {
    const isOn = lightEl.classList.toggle('on');
    galleryEl.classList.toggle('gallery--dark', isOn);
    lightEl.setAttribute('aria-pressed', String(isOn));
  };

  lightEl.addEventListener('click', (e) => {
    e.preventDefault();
    toggle();
  });

  lightEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  });
}

gsap.fromTo(
    '.profile-1-img',{
      x:-300,
      opacity:0,
    },{
       x:0,
       opacity:1,
       duration:1.2,
       scrollTrigger: {
        trigger: ".profile",
        start: "top center", 
    },
    }
)
gsap.fromTo(
    '.profile-2-img',{
      x:300,
      opacity:0,
    },{
       x:0,
       opacity:1,
       duration:1.4,
       scrollTrigger: {
        trigger: ".profile",
        start: "top center", 
    },
    }
)
// script.js (添加到文件末尾)

// === Paro Navi 滚动控制 ===
const paroNav = document.querySelector('.paro-navi');
const navUpBtn = document.getElementById('paro-nav-up');
const navDownBtn = document.getElementById('paro-nav-down');

if (paroNav && navUpBtn && navDownBtn) {
  const scrollAmount = 124; 

  navUpBtn.addEventListener('click', () => {
    paroNav.scrollTop -= scrollAmount;
  });

  navDownBtn.addEventListener('click', () => {
    paroNav.scrollTop += scrollAmount;
  });
}
// === Paro Navi 照片叠换式切换动画 ===
const paroLinks = document.querySelectorAll('.paro-navi a');
const paroBoxes = document.querySelectorAll('.paro-box');

if (paroLinks.length && paroBoxes.length) {
  let activeBox = paroBoxes[0];
  paroBoxes.forEach((box, i) => {
    box.style.display = i === 0 ? 'block' : 'none';
    box.style.opacity = i === 0 ? '1' : '0';
  });
  paroLinks[0].classList.add('active');

  paroLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetBox = document.getElementById(targetId);

      if (!targetBox || targetBox === activeBox) return;

      paroLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      const tl = gsap.timeline({
        defaults: { duration: 0.3, ease: "power2.out" }
      });

      tl.to(activeBox, {
        opacity: 0,
        x: -40,
        y: 20,
        scale: 0.96,
        onComplete: () => {
          activeBox.style.display = 'none';
          targetBox.style.display = 'block';
        }
      })
      .fromTo(targetBox, 
        { opacity: 0, x: 40, y: -20, scale: 1.04 },
        { opacity: 1, x: 0, y: 0, scale: 1 },
        "-=0.1"
      );

      activeBox = targetBox;
    });
  });
}
// === Paro Navi：点击可视区上 2 / 下 2 个缩略图来滚动整个菜单 ===
(function () {
  const nav = document.querySelector('.paro-navi');
  if (!nav) return;

  function getStep() {
    const a = nav.querySelector('a');
    if (!a) return 0;
    const cs = getComputedStyle(a);
    const h  = a.offsetHeight;
    const mt = parseFloat(cs.marginTop) || 0;
    const mb = parseFloat(cs.marginBottom) || 0;
    return h + mt + mb;
  }

  function clampScroll(top) {
    const max = nav.scrollHeight - nav.clientHeight;
    return Math.max(0, Math.min(max, top));
  }

  function isUpperHalfByTwoSlots(linkEl, step) {
    const navRect  = nav.getBoundingClientRect();
    const linkRect = linkEl.getBoundingClientRect();

    const centerY = (linkRect.top + linkRect.bottom) / 2 - navRect.top;

    const slot = Math.floor(centerY / step);

    return slot <= 1;
  }

  nav.addEventListener('click', (e) => {
    const a = e.target.closest('.paro-navi a');
    if (!a || !nav.contains(a)) return;

    const step = getStep();
    if (!step) return;

    const upper = isUpperHalfByTwoSlots(a, step);
    const delta = upper ? -step : step;

    const nextTop = clampScroll(nav.scrollTop + delta);
    nav.scrollTo({ top: nextTop, behavior: 'smooth' });
  }, true);
})();
gsap.from("#gallery-box-1 img", {
  scrollTrigger: {
    trigger: "#gallery-box-1",
    start: "top bottom",
    toggleActions: "play none none reverse", 
  },
  opacity: 0,
  x: -100,
  y: 100,
  duration: 1.0,
  ease: "power3.out",
  stagger: 0.2
});

gsap.from("#gallery-box-2 img", {
  scrollTrigger: {
    trigger: "#gallery-box-2",
    start: "top bottom",
    toggleActions: "play none none reverse", 
  },
  opacity: 0,
  x: -100,
  y: 100,
  duration:1.0,
  ease: "power3.out",
});

gsap.from("#gallery-box-3 img", {
  scrollTrigger: {
    trigger: "#gallery-box-3",
    start: "top bottom",
    toggleActions: "play none none reverse", 
  },
  opacity: 0,
  x: -100,
  y: 100,
  duration: 1.0,
  ease: "power3.out",
  stagger: 0.2
});

// === 加载动画：小电池充电 + Loading 层淡出 ===
window.addEventListener("load", () => {
  const loader  = document.getElementById("loading-screen");
  const bar     = loader?.querySelector(".battery-level");
  const frame   = loader?.querySelector(".battery-frame");

  if(!loader || !bar || !frame) return;

  let progress = 0;
  const tick = setInterval(() => {
    progress += Math.random() * 25;
    if (progress > 100) progress = 100;
    bar.style.width = progress + "%";
    frame.setAttribute("aria-valuenow", Math.round(progress));

    if (progress >= 100) {
      clearInterval(tick);
      setTimeout(() => {
        loader.classList.add("fade-out");
        
        // MODIFICATION: Call the entrance animations function here
        startTopAnimations(); 
        
        setTimeout(() => loader.remove(), 800);
      }, 400);
    }
  }, 160);
});