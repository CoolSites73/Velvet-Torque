const WIKI_API = "https://en.wikipedia.org/w/api.php";
const COMMONS_API = "https://commons.wikimedia.org/w/api.php";
const LOADING_CAR_IMAGE =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 750'>" +
      "<rect width='1200' height='750' fill='#101010'/>" +
      "<rect x='30' y='30' width='1140' height='690' rx='26' fill='none' stroke='#2a2a2a' stroke-width='6'/>" +
      "<circle cx='600' cy='310' r='58' fill='none' stroke='#ff1a1a' stroke-width='12' stroke-dasharray='260 120'/>" +
      "<text x='600' y='445' text-anchor='middle' fill='#f2f2f2' font-size='50' font-family='Poppins,Arial,sans-serif'>Loading image...</text>" +
    "</svg>"
  );
const IMAGE_UNAVAILABLE =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 750'>" +
      "<rect width='1200' height='750' fill='#111111'/>" +
      "<rect x='30' y='30' width='1140' height='690' rx='26' fill='none' stroke='#3a3a3a' stroke-width='6'/>" +
      "<path d='M260 500 L420 360 L560 470 L710 320 L940 500' fill='none' stroke='#ff1a1a' stroke-width='18' stroke-linecap='round' stroke-linejoin='round'/>" +
      "<text x='600' y='600' text-anchor='middle' fill='#f2f2f2' font-size='48' font-family='Poppins,Arial,sans-serif'>Image unavailable</text>" +
    "</svg>"
  );

const detailContainer = document.getElementById("detailContainer");
const pageLoader = document.getElementById("pageLoader");
const loaderStartTime = Date.now();
const MIN_LOADER_DISPLAY_MS = 1200;

function hidePageLoader() {
  if (!pageLoader) {
    return;
  }
  pageLoader.classList.add("hidden");
  window.setTimeout(() => {
    pageLoader.remove();
  }, 520);
}

function schedulePageLoaderHide(extraDelay = 0) {
  const elapsed = Date.now() - loaderStartTime;
  const waitTime = Math.max(0, MIN_LOADER_DISPLAY_MS - elapsed) + extraDelay;
  window.setTimeout(hidePageLoader, waitTime);
}

function waitForImageSettle() {
  const image = document.getElementById("detailImage");
  if (!image || image.complete) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    let settled = false;
    const finish = () => {
      if (settled) {
        return;
      }
      settled = true;
      image.removeEventListener("load", finish);
      image.removeEventListener("error", finish);
      resolve();
    };

    image.addEventListener("load", finish);
    image.addEventListener("error", finish);
    window.setTimeout(finish, 3200);
  });
}

function parsePrice(priceText) {
  return Number(priceText.replace(/[$,]/g, ""));
}

function parseZeroToSixty(zeroToSixtyText) {
  return Number.parseFloat(zeroToSixtyText.replace("s", ""));
}

function detectPowertrain(engine) {
  const value = engine.toLowerCase();
  if (value.includes("electric")) return "Electric";
  if (value.includes("hybrid")) return "Hybrid";
  if (value.includes("supercharged")) return "Supercharged ICE";
  if (value.includes("turbo")) return "Turbocharged ICE";
  return "Naturally Aspirated ICE";
}

function performanceTier(horsepower) {
  if (horsepower >= 1000) return "Hypercar Tier";
  if (horsepower >= 750) return "Ultra-Performance Tier";
  if (horsepower >= 600) return "Supercar Tier";
  return "Sports GT Tier";
}

function accelerationClass(zeroToSixtyText) {
  const value = parseZeroToSixty(zeroToSixtyText);
  if (value <= 2.0) return "Extreme Launch";
  if (value <= 3.0) return "Supercar Quick";
  if (value <= 4.0) return "High Performance";
  return "Fast Road Car";
}

function priceBand(priceText) {
  const value = parsePrice(priceText);
  if (value >= 1000000) return "Collector/Hyper-Luxury";
  if (value >= 300000) return "Ultra Luxury";
  if (value >= 150000) return "High Luxury";
  return "Premium Performance";
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderMissingState() {
  const params = new URLSearchParams(window.location.search);
  const requested = [params.get("brand"), params.get("model")]
    .filter(Boolean)
    .join(" ")
    .trim();

  detailContainer.innerHTML = `
    <h1 class="detail-title">Car Profile Unavailable</h1>
    <p class="detail-subtitle">
      ${requested ? `No saved details found for ${escapeHtml(requested)}.` : "No car details were loaded."}
      Open a car card from the main catalog first.
    </p>
  `;
}

function renderCarDetails(car) {
  const imageUrl = car.image || LOADING_CAR_IMAGE;

  detailContainer.innerHTML = `
    <div class="detail-top">
      <p class="detail-brand">${escapeHtml(car.brand)}</p>
      <h1 class="detail-title">${escapeHtml(car.model)}</h1>
      <p class="detail-subtitle">Full profile and performance facts</p>
    </div>

    <div class="detail-layout">
      <div class="detail-image-wrap">
        <img
          id="detailImage"
          class="detail-image"
          src="${escapeHtml(imageUrl)}"
          alt="${escapeHtml(`${car.brand} ${car.model}`)}"
        />
      </div>

      <div class="detail-panel">
        <h2>Technical Overview</h2>
        <ul class="detail-list">
          <li><span>Brand</span><span>${escapeHtml(car.brand)}</span></li>
          <li><span>Model</span><span>${escapeHtml(car.model)}</span></li>
          <li><span>Engine</span><span>${escapeHtml(car.engine)}</span></li>
          <li><span>Horsepower</span><span>${escapeHtml(car.horsepower)} hp</span></li>
          <li><span>0-60 mph</span><span>${escapeHtml(car.zeroToSixty)}</span></li>
          <li><span>Top Speed</span><span>${escapeHtml(car.topSpeed)}</span></li>
          <li><span>Price</span><span>${escapeHtml(car.price)}</span></li>
        </ul>
      </div>

      <div class="detail-panel">
        <h2>Derived Facts</h2>
        <ul class="detail-list">
          <li><span>Powertrain</span><span>${escapeHtml(detectPowertrain(car.engine))}</span></li>
          <li><span>Performance Tier</span><span>${escapeHtml(performanceTier(car.horsepower))}</span></li>
          <li><span>Acceleration Class</span><span>${escapeHtml(accelerationClass(car.zeroToSixty))}</span></li>
          <li><span>Price Segment</span><span>${escapeHtml(priceBand(car.price))}</span></li>
          <li><span>Reference Page</span><span>${escapeHtml(car.wikiPage || "N/A")}</span></li>
        </ul>
      </div>
    </div>
  `;

  const detailImage = document.getElementById("detailImage");
  detailImage.addEventListener("error", () => {
    detailImage.src = IMAGE_UNAVAILABLE;
  });
}

async function fetchJson(baseUrl, params) {
  const query = new URLSearchParams({ ...params, format: "json", origin: "*" });
  const response = await fetch(`${baseUrl}?${query.toString()}`);
  if (!response.ok) {
    return null;
  }
  return response.json();
}

async function fetchLeadImageFromWikipedia(title) {
  const data = await fetchJson(WIKI_API, {
    action: "query",
    redirects: "1",
    prop: "pageimages",
    piprop: "original|thumbnail",
    pithumbsize: "1280",
    titles: title,
  });

  if (!data?.query?.pages) {
    return null;
  }

  const pages = Object.values(data.query.pages);
  const page = pages.find((item) => !item.missing) || pages[0];
  if (!page) {
    return null;
  }

  return page.original?.source || page.thumbnail?.source || null;
}

async function searchWikipediaTitle(queryText) {
  const data = await fetchJson(WIKI_API, {
    action: "query",
    list: "search",
    srlimit: "1",
    srsearch: queryText,
  });

  return data?.query?.search?.[0]?.title || null;
}

async function fetchImageFromCommons(queryText) {
  const searchData = await fetchJson(COMMONS_API, {
    action: "query",
    list: "search",
    srnamespace: "6",
    srlimit: "1",
    srsearch: queryText,
  });

  const fileTitle = searchData?.query?.search?.[0]?.title;
  if (!fileTitle) {
    return null;
  }

  const imageData = await fetchJson(COMMONS_API, {
    action: "query",
    prop: "imageinfo",
    iiprop: "url",
    titles: fileTitle,
  });

  if (!imageData?.query?.pages) {
    return null;
  }

  const pages = Object.values(imageData.query.pages);
  return pages[0]?.imageinfo?.[0]?.url || null;
}

async function hydrateDetailImage(car) {
  if (!car) {
    return null;
  }

  let imageSource = car.image || null;

  if (!imageSource && car.wikiPage) {
    imageSource = await fetchLeadImageFromWikipedia(car.wikiPage);
  }

  if (!imageSource) {
    const bestTitle = await searchWikipediaTitle(`${car.brand} ${car.model} car`);
    if (bestTitle) {
      imageSource = await fetchLeadImageFromWikipedia(bestTitle);
    }
  }

  if (!imageSource) {
    imageSource = await fetchImageFromCommons(`${car.brand} ${car.model} car`);
  }

  if (!imageSource) {
    const detailImage = document.getElementById("detailImage");
    if (detailImage) {
      detailImage.src = IMAGE_UNAVAILABLE;
    }
    return null;
  }

  const detailImage = document.getElementById("detailImage");
  if (detailImage) {
    detailImage.src = imageSource;
  }
  return imageSource;
}

function loadSelectedCar() {
  const raw = sessionStorage.getItem("selectedCar");
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw);
  } catch (_error) {
    return null;
  }
}

async function initDetailsPage() {
  const selectedCar = loadSelectedCar();

  if (!selectedCar) {
    renderMissingState();
    schedulePageLoaderHide();
    return;
  }

  renderCarDetails(selectedCar);
  await hydrateDetailImage(selectedCar);
  await waitForImageSettle();
  schedulePageLoaderHide();
}

if (document.readyState === "complete") {
  initDetailsPage();
} else {
  window.addEventListener("load", initDetailsPage);
}
