const assetRoot = "extracted-images/gift-preview";
const birthdayDate = 28;
const birthdayMusic = document.getElementById("birthdayMusic");
let birthdayMusicStarted = false;
let birthdayMusicStarting = false;

function startBirthdayMusic() {
  if (!birthdayMusic || birthdayMusicStarted || birthdayMusicStarting) return;

  birthdayMusicStarting = true;
  birthdayMusic.volume = 0.42;
  birthdayMusic
    .play()
    .then(() => {
      birthdayMusicStarted = true;
      window.removeEventListener("pointerdown", startBirthdayMusic);
      window.removeEventListener("keydown", startBirthdayMusic);
    })
    .catch(() => {
      birthdayMusicStarting = false;
    });
}

window.addEventListener("pointerdown", startBirthdayMusic);
window.addEventListener("keydown", startBirthdayMusic);

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

const resetInitialScroll = () => {
  window.scrollTo({ left: 0, top: 0, behavior: "auto" });
};

resetInitialScroll();
window.addEventListener("pageshow", resetInitialScroll);
window.addEventListener("load", () => {
  window.requestAnimationFrame(resetInitialScroll);
  window.setTimeout(resetInitialScroll, 80);
});

const flowerAssets = [
  "assets/new-flower-white-rose.webp",
  "assets/new-flower-tulip.webp",
  "assets/new-flower-sunflower.webp",
  "assets/new-flower-rose.webp",
  "assets/new-flower-pink-rose.webp",
  "assets/new-flower-peony.webp",
  "assets/new-flower-lily.webp",
  "assets/new-flower-hydrangea.webp",
  "assets/new-flower-daisy.webp",
  "assets/new-flower-cosmos.webp",
];

const bouquetFlowers = [
  { src: "assets/new-flower-hydrangea.webp", className: "bouquet-flower--hydrangea" },
  { src: "assets/new-flower-peony.webp", className: "bouquet-flower--peony" },
  { src: "assets/new-flower-white-rose.webp", className: "bouquet-flower--white-rose" },
  { src: "assets/new-flower-cosmos.webp", className: "bouquet-flower--cosmos" },
  { src: "assets/new-flower-rose.webp", className: "bouquet-flower--rose" },
  { src: "assets/new-flower-daisy.webp", className: "bouquet-flower--daisy" },
  { src: "assets/new-flower-sunflower.webp", className: "bouquet-flower--sunflower" },
];

const cardBackLayers = [
  { image: 3, left: 15.5376, top: 37.5693, width: 72.4833, height: 45.6302 },
  { image: 4, left: 23.58, top: 35.1136, width: 8.0424, height: 4.9604 },
  { image: 5, left: 55.7834, top: 35.1136, width: 8.0424, height: 4.9604 },
  { image: 6, left: 69.8916, top: 35.1136, width: 8.0424, height: 4.9604 },
  { image: 7, left: 49.7176, top: 20.3287, width: 8.0424, height: 6.1887 },
  { image: 8, left: 82.003, top: 28.9614, width: 8.0424, height: 6.1887 },
  { image: 9, left: 23.58, top: 18.4626, width: 8.0424, height: 6.1887 },
  { image: 10, left: 71.8681, top: 16.0061, width: 10.0529, height: 6.1887 },
  { image: 11, left: 53.7728, top: 10.456, width: 8.0424, height: 4.9604 },
  { image: 12, left: 47.7411, top: 83.2003, width: 8.0424, height: 6.1887 },
  { image: 13, left: 47.707, top: 29.5867, width: 6.0318, height: 4.9363 },
  { image: 14, left: 81.9551, top: 18.4867, width: 6.0318, height: 4.9363 },
  { image: 15, left: 41.7093, top: 12.9117, width: 6.0318, height: 4.9604 },
  { image: 16, left: 1.4295, top: 11.6843, width: 10.0529, height: 7.4161 },
  { image: 17, left: 23.58, top: 4.2914, width: 8.0424, height: 7.4161 },
  { image: 18, left: 5.4506, top: 33.8853, width: 12.0635, height: 9.8726 },
  { image: 19, left: 1.4295, top: 56.0622, width: 12.0635, height: 7.4161 },
  { image: 20, left: 73.9128, top: 4.2914, width: 12.0635, height: 9.8726 },
  { image: 21, left: 89.9975, top: 12.9117, width: 10.0529, height: 6.1887 },
  { image: 22, left: 87.9869, top: 43.7339, width: 10.0529, height: 7.4161 },
  { image: 23, left: 92.0421, top: 59.7702, width: 6.0318, height: 4.9604 },
  { image: 24, left: 1.4295, top: 65.9348, width: 48.3222, height: 34.5302 },
  { image: 25, left: 51.7623, top: 65.9348, width: 46.3116, height: 34.5302 },
];

function applyStyles(element, styles) {
  Object.entries(styles).forEach(([name, value]) => {
    if (name.startsWith("--")) {
      element.style.setProperty(name, value);
    } else {
      element.style[name] = value;
    }
  });
}

function makeImage(src, className, alt = "") {
  const image = document.createElement("img");
  image.src = src;
  image.alt = alt;
  if (className) image.className = className;
  return image;
}

function renderIntroFlowers() {
  const container = document.getElementById("introFlowers");
  if (!container) return;

  for (let index = 0; index < 42; index += 1) {
    const angle = ((index * 137.5 + 18) * Math.PI) / 180;
    const ring = index % 4;
    const radiusX = 22 + ring * 9;
    const radiusY = 17 + ring * 8;
    const x = 50 + Math.cos(angle) * radiusX;
    const y = 50 + Math.sin(angle) * radiusY;
    const flower = document.createElement("span");
    flower.className = "intro-flower";
    applyStyles(flower, {
      left: `${x.toFixed(4)}%`,
      top: `${y.toFixed(4)}%`,
      width: `clamp(78px, ${10 + (index % 5) * 1.4}vw, ${150 + (index % 4) * 18}px)`,
      "--intro-delay": `${(index % 14) * 42}ms`,
      "--intro-exit-x": `${(Math.cos(angle) * 180).toFixed(4)}px`,
      "--intro-exit-y": `${(Math.sin(angle) * 150).toFixed(4)}px`,
      "--intro-rotate": `${-18 + ((index * 13) % 37)}deg`,
      "--breathe-delay": `${-index * 90}ms`,
    });

    const image = makeImage(flowerAssets[index % flowerAssets.length], "", "");
    image.draggable = false;
    flower.append(image);
    container.append(flower);
  }
}

function renderBurstFlowers() {
  const container = document.getElementById("burstFlowers");
  if (!container) return;

  for (let index = 0; index < 62; index += 1) {
    const angle = (index * 137.5 + (index % 4) * 15) % 360;
    const ring = Math.floor(index / 10);
    const distance = 16 + ring * 8.1 + (index % 5) * 2;
    const size = 40 + ((index * 17) % 58);
    const flower = document.createElement("span");
    flower.className = "burst-flower";
    applyStyles(flower, {
      "--angle": `${angle}deg`,
      "--angle-reverse": `${angle * -1}deg`,
      "--distance": `-${distance}vmax`,
      "--size": `${size}px`,
      "--burst-delay": `${(index % 16) * 30}ms`,
      "--spin-duration": `${18 + (index % 8) * 3}s`,
      "--bob-duration": `${4.5 + (index % 6) * 0.5}s`,
      "--bob-delay": `${-index * 130}ms`,
      "--start-rotate": `${(index * 29) % 360}deg`,
    });

    const bob = document.createElement("span");
    bob.className = "burst-flower__bob";
    bob.append(makeImage(flowerAssets[index % flowerAssets.length], "", ""));
    flower.append(bob);
    container.append(flower);
  }
}

function renderBouquetFlowers() {
  const container = document.getElementById("bouquetBlooms");
  if (!container) return;

  bouquetFlowers.forEach((flower) => {
    container.append(makeImage(flower.src, `bouquet-flower ${flower.className}`, ""));
  });
}

function renderCardBackLayers() {
  const container = document.getElementById("cardBackLayers");
  if (!container) return;

  cardBackLayers.forEach((layer) => {
    const image = makeImage(`${assetRoot}/image${layer.image}.webp`, "card-back-layer", "");
    image.setAttribute("aria-hidden", "true");
    applyStyles(image, {
      left: `${layer.left}%`,
      top: `${layer.top}%`,
      width: `${layer.width}%`,
      height: `${layer.height}%`,
      zIndex: layer.image,
    });
    container.append(image);
  });
}

function renderCalendar() {
  const container = document.getElementById("calendarGrid");
  if (!container) return;

  for (let index = 0; index < 6; index += 1) {
    const blank = document.createElement("span");
    blank.className = "calendar-day is-empty";
    container.append(blank);
  }

  for (let day = 1; day <= 31; day += 1) {
    const cell = document.createElement("span");
    cell.className = day === birthdayDate ? "calendar-day is-birthday" : "calendar-day";

    const date = document.createElement("span");
    date.className = "calendar-date";
    date.textContent = String(day);
    cell.append(date);

    if (day === birthdayDate) {
      const collage = document.createElement("span");
      collage.className = "calendar-birthday-collage";

      const badge = document.createElement("span");
      badge.className = "calendar-date-badge";
      badge.textContent = String(day);

      const age = document.createElement("span");
      age.className = "calendar-age-sketch";
      age.textContent = "20";

      const photo = document.createElement("span");
      photo.className = "calendar-photo-placeholder";
      const photoImage = document.createElement("img");
      photoImage.src = "assets/calendar-birthday-photo.png";
      photoImage.alt = "Sofea";
      photo.append(photoImage);

      const cake = document.createElement("img");
      cake.className = "calendar-cake-sketch";
      cake.src = "assets/calendar-cake-sketch.png";
      cake.alt = "";
      cake.setAttribute("aria-hidden", "true");

      collage.append(age, badge, photo, cake);
      cell.append(collage);
    }

    container.append(cell);
  }
}

function setupInteractions() {
  let phase = "sealed";
  let flipped = false;
  let giftChoice = null;

  const envelopeStage = document.getElementById("envelopeStage");
  const openTrigger = document.querySelector(".env-open-trigger");
  const envelopeHint = document.querySelector(".env-hint");
  const envelopeStatus = document.getElementById("envelopeStatus");
  const keepsakeScene = document.querySelector(".keepsake-scene");
  const birthdayCard = document.getElementById("birthdayCard");
  const chapterNext = document.getElementById("chapterNext");
  const calendarStage = document.getElementById("calendarStage");
  const calendarBack = document.getElementById("calendarBack");
  const calendarNext = document.getElementById("calendarNext");
  const giftMenuStage = document.getElementById("giftMenuStage");
  const giftMenuBack = document.getElementById("giftMenuBack");
  const giftOptions = Array.from(document.querySelectorAll(".gift-option"));
  const giftDetailStages = Array.from(document.querySelectorAll("[data-gift-page]"));
  const giftDetailBacks = Array.from(document.querySelectorAll("[data-gift-back]"));
  const cakeWishStage = document.getElementById("cakeGiftStage");
  const cakeWishButton = document.querySelector("[data-cake-wish]");
  const cakeWishReveals = Array.from(document.querySelectorAll(".cake-wish-message, .cake-wish-sign"));
  let giftRevealTimer = 0;
  let flowerRevealTimer = 0;
  let stageScrollFrame = 0;

  const setSurface = (surface) => {
    document.body.classList.remove(
      "surface-envelope",
      "surface-paper",
      "surface-red",
      "surface-message",
      "surface-cake",
    );
    document.body.classList.add(surface);
  };

  const prefersReducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const scrollToStage = (stage) => {
    if (!stage) return;

    window.cancelAnimationFrame(stageScrollFrame);

    const startY = window.scrollY;
    const targetY = stage.getBoundingClientRect().top + window.scrollY;
    const distance = targetY - startY;

    if (prefersReducedMotion() || Math.abs(distance) < 2) {
      window.scrollTo({ left: 0, top: targetY, behavior: "auto" });
      return;
    }

    const duration = Math.min(1400, Math.max(920, Math.abs(distance) * 0.48));
    const startTime = window.performance.now();
    const ease = (value) =>
      value < 0.5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2;

    const step = (now) => {
      const progress = Math.min(1, (now - startTime) / duration);
      window.scrollTo({ left: 0, top: startY + distance * ease(progress), behavior: "auto" });

      if (progress < 1) {
        stageScrollFrame = window.requestAnimationFrame(step);
      } else {
        window.scrollTo({ left: 0, top: targetY, behavior: "auto" });
      }
    };

    stageScrollFrame = window.requestAnimationFrame(step);
  };
  const revealFlowerText = () => {
    const stage = document.getElementById("flowersGiftStage");
    if (!stage) return;
    stage.classList.remove("is-revealing");
    void stage.offsetWidth;
    stage.classList.add("is-revealing");
  };
  const hideGiftDetails = () => {
    window.clearTimeout(flowerRevealTimer);
    giftDetailStages.forEach((stage) => {
      stage.classList.remove("is-active", "is-revealing");
      stage.setAttribute("aria-hidden", "true");
    });
  };
  const showGiftDetail = (choice) => {
    const stage = giftDetailStages.find((current) => current.dataset.giftPage === choice);
    if (!stage) return;

    hideGiftDetails();
    stage.classList.add("is-active");
    stage.setAttribute("aria-hidden", "false");
    setSurface(choice === "cake" ? "surface-cake" : choice === "letter" ? "surface-message" : "surface-red");
    if (choice === "flowers") {
      stage.classList.remove("is-revealing");
      void stage.offsetWidth;
      flowerRevealTimer = window.setTimeout(() => {
        revealFlowerText();
      }, 920);
    }
    window.setTimeout(() => scrollToStage(stage), 40);
  };
  const revealGiftMenuText = () => {
    if (!giftMenuStage) return;
    giftMenuStage.classList.remove("is-revealing");
    void giftMenuStage.offsetWidth;
    giftMenuStage.classList.add("is-revealing");
    window.clearTimeout(giftRevealTimer);
    giftRevealTimer = window.setTimeout(() => {
      giftMenuStage.classList.remove("is-revealing");
    }, 3300);
  };

  window.setTimeout(() => {
    document.querySelector(".floral-intro")?.remove();
    if (openTrigger && phase === "sealed") openTrigger.disabled = false;
  }, 4800);

  setSurface("surface-envelope");

  openTrigger?.addEventListener("click", () => {
    if (phase !== "sealed" || !envelopeStage) return;
    phase = "keepsake";
    envelopeStage.classList.remove("phase-sealed");
    envelopeStage.classList.add("phase-keepsake");
    envelopeStage.dataset.phase = phase;
    envelopeHint?.classList.add("is-hidden");
    keepsakeScene?.setAttribute("aria-hidden", "false");
    if (envelopeStatus) envelopeStatus.textContent = "The birthday card is ready to open.";
    if (openTrigger) openTrigger.disabled = true;
  });

  birthdayCard?.addEventListener("click", () => {
    flipped = !flipped;
    birthdayCard.classList.toggle("is-flipped", flipped);
    birthdayCard.setAttribute(
      "aria-label",
      flipped ? "Show the front of Sofea's birthday card" : "Open Sofea's birthday message",
    );
    if (chapterNext) {
      chapterNext.disabled = !flipped;
      chapterNext.classList.toggle("is-ready", flipped);
    }
  });

  chapterNext?.addEventListener("click", () => {
    if (!flipped || !calendarStage) return;
    calendarStage.classList.add("is-active");
    calendarStage.setAttribute("aria-hidden", "false");
    setSurface("surface-paper");
    if (calendarBack) calendarBack.disabled = false;
    if (calendarNext) calendarNext.disabled = false;
    window.setTimeout(() => scrollToStage(calendarStage), 40);
  });

  calendarBack?.addEventListener("click", () => {
    if (envelopeStage) {
      setSurface("surface-envelope");
      scrollToStage(envelopeStage);
    }
  });

  calendarNext?.addEventListener("click", () => {
    if (!giftMenuStage) return;
    giftMenuStage.classList.add("is-active");
    giftMenuStage.setAttribute("aria-hidden", "false");
    setSurface("surface-red");
    if (giftMenuBack) giftMenuBack.disabled = false;
    revealGiftMenuText();
    window.setTimeout(() => scrollToStage(giftMenuStage), 40);
  });

  giftMenuBack?.addEventListener("click", () => {
    if (calendarStage) {
      setSurface("surface-paper");
      scrollToStage(calendarStage);
    }
  });

  giftOptions.forEach((option) => {
    option.addEventListener("click", () => {
      giftChoice = option.dataset.choice;
      giftOptions.forEach((current) => {
        const selected = current.dataset.choice === giftChoice;
        current.classList.toggle("is-selected", selected);
        current.setAttribute("aria-pressed", String(selected));
      });
      showGiftDetail(giftChoice);
    });
  });

  cakeWishButton?.addEventListener("click", () => {
    if (!cakeWishStage) return;
    cakeWishStage.classList.remove("is-wish-made");
    void cakeWishStage.offsetWidth;
    cakeWishStage.classList.add("is-wish-made");
    cakeWishReveals.forEach((item) => item.setAttribute("aria-hidden", "false"));
    cakeWishButton.setAttribute("aria-label", "The birthday wish has been made");
  });

  giftDetailBacks.forEach((button) => {
    button.addEventListener("click", () => {
      hideGiftDetails();
      if (giftMenuStage) {
        setSurface("surface-red");
        scrollToStage(giftMenuStage);
      }
    });
  });
}

renderIntroFlowers();
renderBurstFlowers();
renderBouquetFlowers();
renderCardBackLayers();
renderCalendar();
setupInteractions();
