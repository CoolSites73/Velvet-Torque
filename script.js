// Specs are manufacturer-claimed baseline figures and may vary by year, market, and options.
const cars = [
  {
    brand: "Ferrari",
    model: "SF90 Stradale",
    engine: "4.0L Twin-Turbo V8 Hybrid",
    horsepower: 986,
    zeroToSixty: "2.3s",
    topSpeed: "211 mph",
    price: "$570,000",
    wikiPage: "Ferrari SF90 Stradale",
  },
  {
    brand: "Ferrari",
    model: "296 GTB",
    engine: "3.0L Twin-Turbo V6 Hybrid",
    horsepower: 819,
    zeroToSixty: "2.9s",
    topSpeed: "205 mph",
    price: "$342,205",
    wikiPage: "Ferrari 296",
  },
  {
    brand: "Ferrari",
    model: "F8 Tributo",
    engine: "3.9L Twin-Turbo V8",
    horsepower: 710,
    zeroToSixty: "2.9s",
    topSpeed: "211 mph",
    price: "$283,950",
    wikiPage: "Ferrari F8",
  },
  {
    brand: "Ferrari",
    model: "Purosangue",
    engine: "6.5L Naturally Aspirated V12",
    horsepower: 715,
    zeroToSixty: "3.3s",
    topSpeed: "193 mph",
    price: "$398,350",
    wikiPage: "Ferrari Purosangue",
  },
  {
    brand: "Lamborghini",
    model: "Huracan STO",
    engine: "5.2L Naturally Aspirated V10",
    horsepower: 631,
    zeroToSixty: "3.0s",
    topSpeed: "193 mph",
    price: "$338,000",
    wikiPage: "Lamborghini Huracan",
  },
  {
    brand: "Lamborghini",
    model: "Revuelto",
    engine: "6.5L Naturally Aspirated V12 Hybrid",
    horsepower: 1001,
    zeroToSixty: "2.5s",
    topSpeed: "217 mph",
    price: "$608,358",
    wikiPage: "Lamborghini Revuelto",
  },
  {
    brand: "Lamborghini",
    model: "Aventador Ultimae",
    engine: "6.5L Naturally Aspirated V12",
    horsepower: 769,
    zeroToSixty: "2.8s",
    topSpeed: "220 mph",
    price: "$501,953",
    wikiPage: "Lamborghini Aventador",
  },
  {
    brand: "Porsche",
    model: "911 Turbo S",
    engine: "3.8L Twin-Turbo Flat-6",
    horsepower: 640,
    zeroToSixty: "2.6s",
    topSpeed: "205 mph",
    price: "$230,400",
    wikiPage: "Porsche 911 (992)",
  },
  {
    brand: "Porsche",
    model: "Taycan Turbo GT",
    engine: "Dual-Motor Electric",
    horsepower: 1092,
    zeroToSixty: "2.1s",
    topSpeed: "190 mph",
    price: "$230,000",
    wikiPage: "Porsche Taycan",
  },
  {
    brand: "Porsche",
    model: "718 Cayman GT4 RS",
    engine: "4.0L Naturally Aspirated Flat-6",
    horsepower: 493,
    zeroToSixty: "3.2s",
    topSpeed: "196 mph",
    price: "$164,200",
    wikiPage: "Porsche Boxster/Cayman",
  },
  {
    brand: "McLaren",
    model: "720S",
    engine: "4.0L Twin-Turbo V8",
    horsepower: 710,
    zeroToSixty: "2.7s",
    topSpeed: "212 mph",
    price: "$324,000",
    wikiPage: "McLaren 720S",
  },
  {
    brand: "McLaren",
    model: "Artura",
    engine: "3.0L Twin-Turbo V6 Hybrid",
    horsepower: 671,
    zeroToSixty: "3.0s",
    topSpeed: "205 mph",
    price: "$254,100",
    wikiPage: "McLaren Artura",
  },
  {
    brand: "McLaren",
    model: "P1",
    engine: "3.8L Twin-Turbo V8 Hybrid",
    horsepower: 903,
    zeroToSixty: "2.8s",
    topSpeed: "217 mph",
    price: "$1,150,000",
    wikiPage: "McLaren P1",
  },
  {
    brand: "Aston Martin",
    model: "DB12",
    engine: "4.0L Twin-Turbo V8",
    horsepower: 671,
    zeroToSixty: "3.5s",
    topSpeed: "202 mph",
    price: "$248,000",
    wikiPage: "Aston Martin DB12",
  },
  {
    brand: "Aston Martin",
    model: "Vantage",
    engine: "4.0L Twin-Turbo V8",
    horsepower: 656,
    zeroToSixty: "3.4s",
    topSpeed: "202 mph",
    price: "$191,000",
    wikiPage: "Aston Martin Vantage (2018)",
  },
  {
    brand: "Mercedes-AMG",
    model: "GT 63 S E Performance",
    engine: "4.0L Twin-Turbo V8 Hybrid",
    horsepower: 831,
    zeroToSixty: "2.8s",
    topSpeed: "197 mph",
    price: "$196,000",
    wikiPage: "Mercedes-AMG GT 4-Door Coupe",
  },
  {
    brand: "Mercedes-AMG",
    model: "AMG ONE",
    engine: "1.6L Turbo V6 Hybrid",
    horsepower: 1063,
    zeroToSixty: "2.9s",
    topSpeed: "219 mph",
    price: "$2,700,000",
    wikiPage: "Mercedes-AMG ONE",
  },
  {
    brand: "Mercedes-AMG",
    model: "C 63 S E Performance",
    engine: "2.0L Turbo Inline-4 Hybrid",
    horsepower: 671,
    zeroToSixty: "3.3s",
    topSpeed: "174 mph",
    price: "$88,050",
    wikiPage: "Mercedes-AMG C 63",
  },
  {
    brand: "BMW",
    model: "M8 Competition",
    engine: "4.4L Twin-Turbo V8",
    horsepower: 617,
    zeroToSixty: "3.0s",
    topSpeed: "190 mph",
    price: "$140,000",
    wikiPage: "BMW M8",
  },
  {
    brand: "BMW",
    model: "M5 CS",
    engine: "4.4L Twin-Turbo V8",
    horsepower: 627,
    zeroToSixty: "2.9s",
    topSpeed: "190 mph",
    price: "$142,000",
    wikiPage: "BMW M5",
  },
  {
    brand: "Audi",
    model: "R8 V10 Performance",
    engine: "5.2L Naturally Aspirated V10",
    horsepower: 602,
    zeroToSixty: "3.2s",
    topSpeed: "205 mph",
    price: "$186,000",
    wikiPage: "Audi R8",
  },
  {
    brand: "Audi",
    model: "RS6 Avant Performance",
    engine: "4.0L Twin-Turbo V8",
    horsepower: 621,
    zeroToSixty: "3.3s",
    topSpeed: "174 mph",
    price: "$126,600",
    wikiPage: "Audi RS 6",
  },
  {
    brand: "Nissan",
    model: "GT-R NISMO",
    engine: "3.8L Twin-Turbo V6",
    horsepower: 600,
    zeroToSixty: "2.9s",
    topSpeed: "205 mph",
    price: "$220,990",
    wikiPage: "Nissan GT-R",
  },
  {
    brand: "Chevrolet",
    model: "Corvette Z06",
    engine: "5.5L Naturally Aspirated V8",
    horsepower: 670,
    zeroToSixty: "2.6s",
    topSpeed: "195 mph",
    price: "$114,395",
    wikiPage: "Chevrolet Corvette (C8)",
  },
  {
    brand: "Dodge",
    model: "Challenger SRT Demon 170",
    engine: "6.2L Supercharged HEMI V8",
    horsepower: 1025,
    zeroToSixty: "1.66s",
    topSpeed: "151 mph",
    price: "$96,666",
    wikiPage: "Dodge Challenger",
  },
  {
    brand: "Ford",
    model: "Mustang GTD",
    engine: "5.2L Supercharged V8",
    horsepower: 800,
    zeroToSixty: "3.0s",
    topSpeed: "202 mph",
    price: "$325,000",
    wikiPage: "Ford Mustang (seventh generation)",
  },
  {
    brand: "Ford",
    model: "Ford GT",
    engine: "3.5L Twin-Turbo EcoBoost V6",
    horsepower: 660,
    zeroToSixty: "3.0s",
    topSpeed: "216 mph",
    price: "$500,000",
    wikiPage: "Ford GT",
  },
  {
    brand: "Toyota",
    model: "GR Supra 3.0",
    engine: "3.0L Turbo Inline-6",
    horsepower: 382,
    zeroToSixty: "3.9s",
    topSpeed: "155 mph",
    price: "$56,250",
    wikiPage: "Toyota Supra",
  },
  {
    brand: "Lexus",
    model: "LFA",
    engine: "4.8L Naturally Aspirated V10",
    horsepower: 552,
    zeroToSixty: "3.6s",
    topSpeed: "202 mph",
    price: "$375,000",
    wikiPage: "Lexus LFA",
  },
  {
    brand: "Pagani",
    model: "Huayra BC",
    engine: "6.0L Twin-Turbo V12",
    horsepower: 789,
    zeroToSixty: "2.8s",
    topSpeed: "238 mph",
    price: "$2,800,000",
    wikiPage: "Pagani Huayra",
  },
  {
    brand: "Koenigsegg",
    model: "Jesko Absolut",
    engine: "5.0L Twin-Turbo V8",
    horsepower: 1600,
    zeroToSixty: "2.5s",
    topSpeed: "330 mph",
    price: "$3,000,000",
    wikiPage: "Koenigsegg Jesko",
  },
  {
    brand: "Bugatti",
    model: "Chiron Super Sport 300+",
    engine: "8.0L Quad-Turbo W16",
    horsepower: 1578,
    zeroToSixty: "2.3s",
    topSpeed: "304 mph",
    price: "$3,900,000",
    wikiPage: "Bugatti Chiron",
  },
  {
    brand: "Rimac",
    model: "Nevera",
    engine: "Quad-Motor Electric",
    horsepower: 1914,
    zeroToSixty: "1.85s",
    topSpeed: "258 mph",
    price: "$2,200,000",
    wikiPage: "Rimac Nevera",
  },
  {
    brand: "Tesla",
    model: "Model S Plaid",
    engine: "Tri-Motor Electric",
    horsepower: 1020,
    zeroToSixty: "1.99s",
    topSpeed: "200 mph",
    price: "$89,990",
    wikiPage: "Tesla Model S",
  },
  {
    brand: "Lucid",
    model: "Air Sapphire",
    engine: "Tri-Motor Electric",
    horsepower: 1234,
    zeroToSixty: "1.89s",
    topSpeed: "205 mph",
    price: "$249,000",
    wikiPage: "Lucid Air",
  },
];

const WIKI_API = "https://en.wikipedia.org/w/api.php";
const COMMONS_API = "https://commons.wikimedia.org/w/api.php";
const DEFAULT_CAR_IMAGE =
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80";
const IMAGE_OVERRIDES = {
  "Ferrari SF90 Stradale":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari%20SF90%20Stradale%204.jpg",
};

const carGrid = document.getElementById("carGrid");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");
const brandGrid = document.getElementById("brandGrid");
const compareCarA = document.getElementById("compareCarA");
const compareCarB = document.getElementById("compareCarB");
const compareBtn = document.getElementById("compareBtn");
const compareResult = document.getElementById("compareResult");
const pageLoader = document.getElementById("pageLoader");
const loaderStartTime = Date.now();
const MIN_LOADER_DISPLAY_MS = 1200;

let currentQuery = "";
let selectedBrand = "ALL";

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

function buildCarSlug(car) {
  return `${car.brand}-${car.model}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function openCarDetails(car) {
  sessionStorage.setItem("selectedCar", JSON.stringify(car));
  const params = new URLSearchParams({
    brand: car.brand,
    model: car.model,
    slug: buildCarSlug(car),
  });
  window.location.href = `car-details.html?${params.toString()}`;
}

function getCarLabel(car) {
  return `${car.brand} ${car.model}`;
}

function getFilteredCars() {
  const normalized = currentQuery;
  let list = [...cars];

  if (selectedBrand !== "ALL") {
    list = list.filter((car) => car.brand === selectedBrand);
  }

  if (normalized) {
    list = list.filter((car) => {
      return (
        car.brand.toLowerCase().includes(normalized) ||
        car.model.toLowerCase().includes(normalized)
      );
    });
  }

  return list;
}

function renderBrands() {
  if (!brandGrid) {
    return;
  }

  const brands = [...new Set(cars.map((car) => car.brand))].sort((a, b) =>
    a.localeCompare(b)
  );

  brandGrid.innerHTML = "";

  const addBrandButton = (label, value) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "brand-chip";
    if (selectedBrand === value) {
      button.classList.add("active");
    }
    button.textContent = label;
    button.addEventListener("click", () => {
      selectedBrand = value;
      renderBrands();
      renderCars(getFilteredCars());
      document.getElementById("cars")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
    brandGrid.appendChild(button);
  };

  addBrandButton("All Brands", "ALL");
  brands.forEach((brand) => addBrandButton(brand, brand));
}

function createCard(car) {
  const article = document.createElement("article");
  article.className = "car-card";
  article.tabIndex = 0;
  article.setAttribute("role", "link");
  article.setAttribute("aria-label", `Open full profile for ${car.brand} ${car.model}`);

  const imageUrl = car.image || DEFAULT_CAR_IMAGE;

  article.innerHTML = `
    <img class="car-image" src="${imageUrl}" alt="${car.brand} ${car.model}" loading="lazy" />
    <div class="car-content">
      <div class="car-heading">
        <span class="brand">${car.brand}</span>
        <h3 class="model">${car.model}</h3>
      </div>
      <ul class="specs">
        <li><span>Engine</span><span>${car.engine}</span></li>
        <li><span>Horsepower</span><span>${car.horsepower} hp</span></li>
        <li><span>0-60 mph</span><span>${car.zeroToSixty}</span></li>
        <li><span>Top Speed</span><span>${car.topSpeed}</span></li>
        <li><span>Price</span><span class="price">${car.price}</span></li>
      </ul>
    </div>
  `;

  const image = article.querySelector(".car-image");
  image.addEventListener("error", () => {
    image.src = DEFAULT_CAR_IMAGE;
  });

  article.addEventListener("click", () => {
    openCarDetails(car);
  });

  article.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openCarDetails(car);
    }
  });

  return article;
}

function renderCars(list) {
  carGrid.innerHTML = "";

  list.forEach((car) => {
    carGrid.appendChild(createCard(car));
  });

  emptyState.hidden = list.length > 0;
}

function filterCars(query) {
  currentQuery = query.trim().toLowerCase();
  renderCars(getFilteredCars());
}

function populateCompareSelects() {
  if (!compareCarA || !compareCarB) {
    return;
  }

  const sortedCars = [...cars].sort((a, b) =>
    getCarLabel(a).localeCompare(getCarLabel(b))
  );

  const optionsHtml = sortedCars
    .map((car) => {
      const slug = buildCarSlug(car);
      return `<option value="${slug}">${getCarLabel(car)}</option>`;
    })
    .join("");

  compareCarA.innerHTML = `<option value="">Select first car</option>${optionsHtml}`;
  compareCarB.innerHTML = `<option value="">Select second car</option>${optionsHtml}`;
}

function getCarBySlug(slug) {
  return cars.find((car) => buildCarSlug(car) === slug) || null;
}

function renderCompareMessage(message) {
  if (!compareResult) {
    return;
  }
  compareResult.innerHTML = `<p class="compare-empty">${message}</p>`;
}

function renderCompareCards(carA, carB) {
  if (!compareResult) {
    return;
  }

  compareResult.innerHTML = `
    <div class="compare-grid">
      <article class="compare-car-card">
        <img class="compare-image" src="${carA.image || DEFAULT_CAR_IMAGE}" alt="${getCarLabel(
    carA
  )}" loading="lazy" />
        <p class="compare-brand">${carA.brand}</p>
        <h3 class="compare-model">${carA.model}</h3>
        <ul class="compare-specs">
          <li><span>Engine</span><span>${carA.engine}</span></li>
          <li><span>Horsepower</span><span>${carA.horsepower} hp</span></li>
          <li><span>0-60 mph</span><span>${carA.zeroToSixty}</span></li>
          <li><span>Top Speed</span><span>${carA.topSpeed}</span></li>
          <li><span>Price</span><span>${carA.price}</span></li>
        </ul>
      </article>
      <article class="compare-car-card">
        <img class="compare-image" src="${carB.image || DEFAULT_CAR_IMAGE}" alt="${getCarLabel(
    carB
  )}" loading="lazy" />
        <p class="compare-brand">${carB.brand}</p>
        <h3 class="compare-model">${carB.model}</h3>
        <ul class="compare-specs">
          <li><span>Engine</span><span>${carB.engine}</span></li>
          <li><span>Horsepower</span><span>${carB.horsepower} hp</span></li>
          <li><span>0-60 mph</span><span>${carB.zeroToSixty}</span></li>
          <li><span>Top Speed</span><span>${carB.topSpeed}</span></li>
          <li><span>Price</span><span>${carB.price}</span></li>
        </ul>
      </article>
    </div>
  `;

  compareResult.querySelectorAll(".compare-image").forEach((image) => {
    image.addEventListener("error", () => {
      image.src = DEFAULT_CAR_IMAGE;
    });
  });
}

function runComparison() {
  if (!compareCarA || !compareCarB) {
    return;
  }

  if (!compareCarA.value || !compareCarB.value) {
    renderCompareMessage("Pick two cars to compare.");
    return;
  }

  if (compareCarA.value === compareCarB.value) {
    renderCompareMessage("Choose two different cars.");
    return;
  }

  const carA = getCarBySlug(compareCarA.value);
  const carB = getCarBySlug(compareCarB.value);

  if (!carA || !carB) {
    renderCompareMessage("Comparison data is unavailable.");
    return;
  }

  renderCompareCards(carA, carB);
}

function looksLikePhoto(url) {
  return /\.(jpg|jpeg|png|webp)(\?.*)?$/i.test(url);
}

function looksLikeWrongImage(car, url) {
  const normalized = url.toLowerCase();
  if (car.model === "SF90 Stradale") {
    return (
      normalized.includes("formula_one") ||
      normalized.includes("formula-1") ||
      normalized.includes("f1")
    );
  }
  return false;
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
  const firstPage = pages[0];
  return firstPage?.imageinfo?.[0]?.url || null;
}

async function hydrateCarImages() {
  for (const car of cars) {
    const overrideKey = `${car.brand} ${car.model}`;
    if (IMAGE_OVERRIDES[overrideKey]) {
      car.image = IMAGE_OVERRIDES[overrideKey];
      continue;
    }

    try {
      let imageSource = null;

      if (car.wikiPage) {
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

      if (
        imageSource &&
        looksLikePhoto(imageSource) &&
        !looksLikeWrongImage(car, imageSource)
      ) {
        car.image = imageSource;
      }
    } catch (_error) {
      // Ignore image lookup failures and keep fallback image.
    }
  }

  filterCars(currentQuery);
  if (compareCarA?.value && compareCarB?.value) {
    runComparison();
  }
}

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    filterCars(event.target.value);
  });
}

if (compareBtn) {
  compareBtn.addEventListener("click", runComparison);
}

if (compareCarA && compareCarB) {
  compareCarA.addEventListener("change", () => {
    if (compareCarB.value) {
      runComparison();
    }
  });

  compareCarB.addEventListener("change", () => {
    if (compareCarA.value) {
      runComparison();
    }
  });
}

renderBrands();
populateCompareSelects();
renderCars(getFilteredCars());
hydrateCarImages();

if (document.readyState === "complete") {
  schedulePageLoaderHide();
} else {
  window.addEventListener("load", () => {
    schedulePageLoaderHide();
  });
}
