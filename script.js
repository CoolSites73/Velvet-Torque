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
  {
    brand: "Ferrari",
    model: "Roma",
    engine: "3.9L Twin-Turbo V8",
    horsepower: 612,
    zeroToSixty: "3.3s",
    topSpeed: "199 mph",
    price: "$247,308",
    wikiPage: "Ferrari Roma",
  },
  {
    brand: "Ferrari",
    model: "812 Superfast",
    engine: "6.5L Naturally Aspirated V12",
    horsepower: 789,
    zeroToSixty: "2.8s",
    topSpeed: "211 mph",
    price: "$365,000",
    wikiPage: "Ferrari 812 Superfast",
  },
  {
    brand: "Ferrari",
    model: "Daytona SP3",
    engine: "6.5L Naturally Aspirated V12",
    horsepower: 829,
    zeroToSixty: "2.9s",
    topSpeed: "211 mph",
    price: "$2,250,000",
    wikiPage: "Ferrari Daytona SP3",
  },
  {
    brand: "Ferrari",
    model: "LaFerrari",
    engine: "6.3L Naturally Aspirated V12 Hybrid",
    horsepower: 949,
    zeroToSixty: "2.4s",
    topSpeed: "217 mph",
    price: "$1,500,000",
    wikiPage: "LaFerrari",
  },
  {
    brand: "Lamborghini",
    model: "Urus Performante",
    engine: "4.0L Twin-Turbo V8",
    horsepower: 657,
    zeroToSixty: "3.3s",
    topSpeed: "190 mph",
    price: "$269,885",
    wikiPage: "Lamborghini Urus",
  },
  {
    brand: "Lamborghini",
    model: "Sian FKP 37",
    engine: "6.5L Naturally Aspirated V12 Hybrid",
    horsepower: 808,
    zeroToSixty: "2.8s",
    topSpeed: "217 mph",
    price: "$3,600,000",
    wikiPage: "Lamborghini Sian FKP 37",
  },
  {
    brand: "Lamborghini",
    model: "Gallardo LP 570-4 Superleggera",
    engine: "5.2L Naturally Aspirated V10",
    horsepower: 562,
    zeroToSixty: "3.4s",
    topSpeed: "202 mph",
    price: "$259,100",
    wikiPage: "Lamborghini Gallardo",
  },
  {
    brand: "Porsche",
    model: "Cayenne Turbo GT",
    engine: "4.0L Twin-Turbo V8",
    horsepower: 650,
    zeroToSixty: "3.1s",
    topSpeed: "190 mph",
    price: "$196,300",
    wikiPage: "Porsche Cayenne",
  },
  {
    brand: "Porsche",
    model: "Panamera Turbo S E-Hybrid",
    engine: "4.0L Twin-Turbo V8 Hybrid",
    horsepower: 771,
    zeroToSixty: "2.8s",
    topSpeed: "202 mph",
    price: "$228,495",
    wikiPage: "Porsche Panamera",
  },
  {
    brand: "Porsche",
    model: "Macan Turbo Electric",
    engine: "Dual-Motor Electric",
    horsepower: 630,
    zeroToSixty: "3.1s",
    topSpeed: "161 mph",
    price: "$105,300",
    wikiPage: "Porsche Macan",
  },
  {
    brand: "McLaren",
    model: "750S",
    engine: "4.0L Twin-Turbo V8",
    horsepower: 740,
    zeroToSixty: "2.7s",
    topSpeed: "206 mph",
    price: "$324,000",
    wikiPage: "McLaren 750S",
  },
  {
    brand: "McLaren",
    model: "Senna",
    engine: "4.0L Twin-Turbo V8",
    horsepower: 789,
    zeroToSixty: "2.7s",
    topSpeed: "211 mph",
    price: "$1,000,000",
    wikiPage: "McLaren Senna",
  },
  {
    brand: "McLaren",
    model: "GT",
    engine: "4.0L Twin-Turbo V8",
    horsepower: 612,
    zeroToSixty: "3.1s",
    topSpeed: "203 mph",
    price: "$210,000",
    wikiPage: "McLaren GT",
  },
  {
    brand: "Aston Martin",
    model: "Valkyrie",
    engine: "6.5L Naturally Aspirated V12 Hybrid",
    horsepower: 1140,
    zeroToSixty: "2.5s",
    topSpeed: "220 mph",
    price: "$3,000,000",
    wikiPage: "Aston Martin Valkyrie",
  },
  {
    brand: "Aston Martin",
    model: "DBS 770 Ultimate",
    engine: "5.2L Twin-Turbo V12",
    horsepower: 759,
    zeroToSixty: "3.2s",
    topSpeed: "211 mph",
    price: "$388,600",
    wikiPage: "Aston Martin DBS",
  },
  {
    brand: "Aston Martin",
    model: "DBX707",
    engine: "4.0L Twin-Turbo V8",
    horsepower: 697,
    zeroToSixty: "3.1s",
    topSpeed: "193 mph",
    price: "$245,085",
    wikiPage: "Aston Martin DBX",
  },
  {
    brand: "Mercedes-AMG",
    model: "SL 63",
    engine: "4.0L Twin-Turbo V8",
    horsepower: 577,
    zeroToSixty: "3.5s",
    topSpeed: "196 mph",
    price: "$184,150",
    wikiPage: "Mercedes-AMG SL",
  },
  {
    brand: "Mercedes-AMG",
    model: "G 63",
    engine: "4.0L Twin-Turbo V8",
    horsepower: 577,
    zeroToSixty: "4.2s",
    topSpeed: "149 mph",
    price: "$183,000",
    wikiPage: "Mercedes-AMG G 63",
  },
  {
    brand: "Mercedes-AMG",
    model: "E 53 Hybrid",
    engine: "3.0L Turbo Inline-6 Hybrid",
    horsepower: 577,
    zeroToSixty: "3.9s",
    topSpeed: "174 mph",
    price: "$110,000",
    wikiPage: "Mercedes-AMG E 53",
  },
  {
    brand: "BMW",
    model: "M3 Competition xDrive",
    engine: "3.0L Twin-Turbo Inline-6",
    horsepower: 523,
    zeroToSixty: "3.4s",
    topSpeed: "180 mph",
    price: "$84,300",
    wikiPage: "BMW M3",
  },
  {
    brand: "BMW",
    model: "M4 CSL",
    engine: "3.0L Twin-Turbo Inline-6",
    horsepower: 543,
    zeroToSixty: "3.6s",
    topSpeed: "191 mph",
    price: "$140,895",
    wikiPage: "BMW M4",
  },
  {
    brand: "BMW",
    model: "X5 M Competition",
    engine: "4.4L Twin-Turbo V8",
    horsepower: 617,
    zeroToSixty: "3.7s",
    topSpeed: "177 mph",
    price: "$124,800",
    wikiPage: "BMW X5",
  },
  {
    brand: "BMW",
    model: "i7 M70",
    engine: "Dual-Motor Electric",
    horsepower: 650,
    zeroToSixty: "3.5s",
    topSpeed: "155 mph",
    price: "$168,500",
    wikiPage: "BMW 7 Series (G70)",
  },
  {
    brand: "Audi",
    model: "RS7 Performance",
    engine: "4.0L Twin-Turbo V8",
    horsepower: 621,
    zeroToSixty: "3.3s",
    topSpeed: "190 mph",
    price: "$130,000",
    wikiPage: "Audi RS 7",
  },
  {
    brand: "Audi",
    model: "RS3",
    engine: "2.5L Turbo Inline-5",
    horsepower: 401,
    zeroToSixty: "3.6s",
    topSpeed: "180 mph",
    price: "$63,395",
    wikiPage: "Audi RS 3",
  },
  {
    brand: "Audi",
    model: "RS e-tron GT",
    engine: "Dual-Motor Electric",
    horsepower: 637,
    zeroToSixty: "3.1s",
    topSpeed: "155 mph",
    price: "$147,100",
    wikiPage: "Audi e-tron GT",
  },
  {
    brand: "Audi",
    model: "SQ8",
    engine: "4.0L Twin-Turbo V8",
    horsepower: 500,
    zeroToSixty: "4.0s",
    topSpeed: "155 mph",
    price: "$97,600",
    wikiPage: "Audi Q8",
  },
  {
    brand: "Nissan",
    model: "Z NISMO",
    engine: "3.0L Twin-Turbo V6",
    horsepower: 420,
    zeroToSixty: "4.2s",
    topSpeed: "155 mph",
    price: "$66,085",
    wikiPage: "Nissan Z (RZ34)",
  },
  {
    brand: "Nissan",
    model: "Armada",
    engine: "5.6L Naturally Aspirated V8",
    horsepower: 400,
    zeroToSixty: "6.0s",
    topSpeed: "130 mph",
    price: "$57,310",
    wikiPage: "Nissan Armada",
  },
  {
    brand: "Nissan",
    model: "Titan PRO-4X",
    engine: "5.6L Naturally Aspirated V8",
    horsepower: 400,
    zeroToSixty: "6.2s",
    topSpeed: "120 mph",
    price: "$54,490",
    wikiPage: "Nissan Titan",
  },
  {
    brand: "Chevrolet",
    model: "Camaro ZL1",
    engine: "6.2L Supercharged V8",
    horsepower: 650,
    zeroToSixty: "3.5s",
    topSpeed: "198 mph",
    price: "$72,100",
    wikiPage: "Chevrolet Camaro (sixth generation)",
  },
  {
    brand: "Chevrolet",
    model: "Corvette E-Ray",
    engine: "6.2L Naturally Aspirated V8 Hybrid",
    horsepower: 655,
    zeroToSixty: "2.5s",
    topSpeed: "183 mph",
    price: "$106,900",
    wikiPage: "Chevrolet Corvette (C8)",
  },
  {
    brand: "Chevrolet",
    model: "Silverado 1500 ZR2",
    engine: "6.2L Naturally Aspirated V8",
    horsepower: 420,
    zeroToSixty: "5.9s",
    topSpeed: "114 mph",
    price: "$71,995",
    wikiPage: "Chevrolet Silverado",
  },
  {
    brand: "Chevrolet",
    model: "Tahoe RST",
    engine: "6.2L Naturally Aspirated V8",
    horsepower: 420,
    zeroToSixty: "5.7s",
    topSpeed: "124 mph",
    price: "$69,195",
    wikiPage: "Chevrolet Tahoe",
  },
  {
    brand: "Dodge",
    model: "Charger Daytona Scat Pack",
    engine: "Dual-Motor Electric",
    horsepower: 670,
    zeroToSixty: "3.3s",
    topSpeed: "134 mph",
    price: "$74,995",
    wikiPage: "Dodge Charger Daytona (2024)",
  },
  {
    brand: "Dodge",
    model: "Durango SRT Hellcat",
    engine: "6.2L Supercharged HEMI V8",
    horsepower: 710,
    zeroToSixty: "3.5s",
    topSpeed: "180 mph",
    price: "$95,995",
    wikiPage: "Dodge Durango",
  },
  {
    brand: "Dodge",
    model: "Hornet R/T",
    engine: "1.3L Turbo Inline-4 Plug-in Hybrid",
    horsepower: 288,
    zeroToSixty: "5.6s",
    topSpeed: "128 mph",
    price: "$41,400",
    wikiPage: "Dodge Hornet",
  },
  {
    brand: "Ford",
    model: "F-150 Raptor R",
    engine: "5.2L Supercharged V8",
    horsepower: 720,
    zeroToSixty: "3.8s",
    topSpeed: "114 mph",
    price: "$109,145",
    wikiPage: "Ford F-Series",
  },
  {
    brand: "Ford",
    model: "Bronco Raptor",
    engine: "3.0L Twin-Turbo EcoBoost V6",
    horsepower: 418,
    zeroToSixty: "5.3s",
    topSpeed: "114 mph",
    price: "$90,035",
    wikiPage: "Ford Bronco",
  },
  {
    brand: "Ford",
    model: "F-150 Lightning Platinum",
    engine: "Dual-Motor Electric",
    horsepower: 580,
    zeroToSixty: "4.0s",
    topSpeed: "110 mph",
    price: "$84,995",
    wikiPage: "Ford F-150 Lightning",
  },
  {
    brand: "Ford",
    model: "Explorer ST",
    engine: "3.0L Twin-Turbo EcoBoost V6",
    horsepower: 400,
    zeroToSixty: "5.2s",
    topSpeed: "143 mph",
    price: "$50,105",
    wikiPage: "Ford Explorer",
  },
  {
    brand: "Toyota",
    model: "GR Corolla Circuit Edition",
    engine: "1.6L Turbo Inline-3",
    horsepower: 300,
    zeroToSixty: "4.9s",
    topSpeed: "143 mph",
    price: "$43,995",
    wikiPage: "Toyota GR Corolla",
  },
  {
    brand: "Toyota",
    model: "Land Cruiser",
    engine: "2.4L Turbo Inline-4 Hybrid",
    horsepower: 326,
    zeroToSixty: "7.7s",
    topSpeed: "109 mph",
    price: "$55,950",
    wikiPage: "Toyota Land Cruiser",
  },
  {
    brand: "Toyota",
    model: "Tacoma TRD Pro",
    engine: "2.4L Turbo Inline-4 Hybrid",
    horsepower: 326,
    zeroToSixty: "7.0s",
    topSpeed: "113 mph",
    price: "$64,000",
    wikiPage: "Toyota Tacoma",
  },
  {
    brand: "Toyota",
    model: "Camry XSE Hybrid",
    engine: "2.5L Inline-4 Hybrid",
    horsepower: 232,
    zeroToSixty: "6.9s",
    topSpeed: "135 mph",
    price: "$36,000",
    wikiPage: "Toyota Camry",
  },
  {
    brand: "Lexus",
    model: "IS 500 F Sport Performance",
    engine: "5.0L Naturally Aspirated V8",
    horsepower: 472,
    zeroToSixty: "4.4s",
    topSpeed: "149 mph",
    price: "$60,595",
    wikiPage: "Lexus IS",
  },
  {
    brand: "Lexus",
    model: "LC 500",
    engine: "5.0L Naturally Aspirated V8",
    horsepower: 471,
    zeroToSixty: "4.4s",
    topSpeed: "168 mph",
    price: "$99,800",
    wikiPage: "Lexus LC",
  },
  {
    brand: "Lexus",
    model: "RX 500h F Sport Performance",
    engine: "2.4L Turbo Inline-4 Hybrid",
    horsepower: 366,
    zeroToSixty: "5.9s",
    topSpeed: "130 mph",
    price: "$63,800",
    wikiPage: "Lexus RX",
  },
  {
    brand: "Lexus",
    model: "GX 550",
    engine: "3.4L Twin-Turbo V6",
    horsepower: 349,
    zeroToSixty: "6.5s",
    topSpeed: "108 mph",
    price: "$64,250",
    wikiPage: "Lexus GX",
  },
  {
    brand: "Pagani",
    model: "Utopia",
    engine: "6.0L Twin-Turbo V12",
    horsepower: 852,
    zeroToSixty: "2.8s",
    topSpeed: "217 mph",
    price: "$2,500,000",
    wikiPage: "Pagani Utopia",
  },
  {
    brand: "Koenigsegg",
    model: "Regera",
    engine: "5.0L Twin-Turbo V8 Hybrid",
    horsepower: 1500,
    zeroToSixty: "2.8s",
    topSpeed: "251 mph",
    price: "$1,900,000",
    wikiPage: "Koenigsegg Regera",
  },
  {
    brand: "Koenigsegg",
    model: "Gemera",
    engine: "2.0L Twin-Turbo Inline-3 Hybrid",
    horsepower: 1700,
    zeroToSixty: "1.9s",
    topSpeed: "249 mph",
    price: "$1,700,000",
    wikiPage: "Koenigsegg Gemera",
  },
  {
    brand: "Koenigsegg",
    model: "Agera RS",
    engine: "5.0L Twin-Turbo V8",
    horsepower: 1341,
    zeroToSixty: "2.8s",
    topSpeed: "277 mph",
    price: "$2,500,000",
    wikiPage: "Koenigsegg Agera",
  },
  {
    brand: "Bugatti",
    model: "Bolide",
    engine: "8.0L Quad-Turbo W16",
    horsepower: 1578,
    zeroToSixty: "2.2s",
    topSpeed: "236 mph",
    price: "$4,300,000",
    wikiPage: "Bugatti Bolide",
  },
  {
    brand: "Bugatti",
    model: "Mistral",
    engine: "8.0L Quad-Turbo W16",
    horsepower: 1578,
    zeroToSixty: "2.4s",
    topSpeed: "261 mph",
    price: "$5,000,000",
    wikiPage: "Bugatti Mistral",
  },
  {
    brand: "Bugatti",
    model: "Divo",
    engine: "8.0L Quad-Turbo W16",
    horsepower: 1479,
    zeroToSixty: "2.4s",
    topSpeed: "236 mph",
    price: "$5,800,000",
    wikiPage: "Bugatti Divo",
  },
  {
    brand: "Rimac",
    model: "Concept One",
    engine: "Quad-Motor Electric",
    horsepower: 1224,
    zeroToSixty: "2.5s",
    topSpeed: "221 mph",
    price: "$980,000",
    wikiPage: "Rimac Concept One",
  },
  {
    brand: "Tesla",
    model: "Model 3 Performance",
    engine: "Dual-Motor Electric",
    horsepower: 510,
    zeroToSixty: "2.9s",
    topSpeed: "163 mph",
    price: "$54,990",
    wikiPage: "Tesla Model 3",
  },
  {
    brand: "Tesla",
    model: "Model X Plaid",
    engine: "Tri-Motor Electric",
    horsepower: 1020,
    zeroToSixty: "2.5s",
    topSpeed: "163 mph",
    price: "$99,990",
    wikiPage: "Tesla Model X",
  },
  {
    brand: "Tesla",
    model: "Cybertruck Cyberbeast",
    engine: "Tri-Motor Electric",
    horsepower: 845,
    zeroToSixty: "2.6s",
    topSpeed: "130 mph",
    price: "$99,990",
    wikiPage: "Tesla Cybertruck",
  },
  {
    brand: "Tesla",
    model: "Model Y Performance",
    engine: "Dual-Motor Electric",
    horsepower: 456,
    zeroToSixty: "3.5s",
    topSpeed: "155 mph",
    price: "$51,490",
    wikiPage: "Tesla Model Y",
  },
  {
    brand: "Lucid",
    model: "Air Grand Touring",
    engine: "Dual-Motor Electric",
    horsepower: 819,
    zeroToSixty: "3.0s",
    topSpeed: "168 mph",
    price: "$109,900",
    wikiPage: "Lucid Air",
  },
  {
    brand: "Lucid",
    model: "Gravity",
    engine: "Dual-Motor Electric",
    horsepower: 828,
    zeroToSixty: "3.4s",
    topSpeed: "155 mph",
    price: "$80,000",
    wikiPage: "Lucid Gravity",
  },
  {
    brand: "Honda",
    model: "Civic Type R",
    engine: "2.0L Turbo Inline-4",
    horsepower: 315,
    zeroToSixty: "4.9s",
    topSpeed: "169 mph",
    price: "$44,795",
    wikiPage: "Honda Civic Type R",
  },
  {
    brand: "Honda",
    model: "Accord Hybrid",
    engine: "2.0L Inline-4 Hybrid",
    horsepower: 204,
    zeroToSixty: "6.6s",
    topSpeed: "116 mph",
    price: "$34,750",
    wikiPage: "Honda Accord",
  },
  {
    brand: "Honda",
    model: "CR-V Hybrid",
    engine: "2.0L Inline-4 Hybrid",
    horsepower: 204,
    zeroToSixty: "7.9s",
    topSpeed: "112 mph",
    price: "$35,400",
    wikiPage: "Honda CR-V",
  },
  {
    brand: "Honda",
    model: "Pilot TrailSport",
    engine: "3.5L Naturally Aspirated V6",
    horsepower: 285,
    zeroToSixty: "6.9s",
    topSpeed: "112 mph",
    price: "$49,900",
    wikiPage: "Honda Pilot",
  },
  {
    brand: "Hyundai",
    model: "IONIQ 5 N",
    engine: "Dual-Motor Electric",
    horsepower: 641,
    zeroToSixty: "3.3s",
    topSpeed: "162 mph",
    price: "$66,100",
    wikiPage: "Hyundai Ioniq 5",
  },
  {
    brand: "Hyundai",
    model: "Elantra N",
    engine: "2.0L Turbo Inline-4",
    horsepower: 276,
    zeroToSixty: "5.0s",
    topSpeed: "155 mph",
    price: "$34,350",
    wikiPage: "Hyundai Elantra",
  },
  {
    brand: "Hyundai",
    model: "Palisade Calligraphy",
    engine: "3.8L Naturally Aspirated V6",
    horsepower: 291,
    zeroToSixty: "6.7s",
    topSpeed: "130 mph",
    price: "$53,600",
    wikiPage: "Hyundai Palisade",
  },
  {
    brand: "Hyundai",
    model: "Santa Fe Hybrid",
    engine: "1.6L Turbo Inline-4 Hybrid",
    horsepower: 231,
    zeroToSixty: "8.0s",
    topSpeed: "118 mph",
    price: "$39,200",
    wikiPage: "Hyundai Santa Fe",
  },
  {
    brand: "Kia",
    model: "EV6 GT",
    engine: "Dual-Motor Electric",
    horsepower: 576,
    zeroToSixty: "3.4s",
    topSpeed: "161 mph",
    price: "$61,600",
    wikiPage: "Kia EV6",
  },
  {
    brand: "Kia",
    model: "Telluride SX X-Pro",
    engine: "3.8L Naturally Aspirated V6",
    horsepower: 291,
    zeroToSixty: "7.1s",
    topSpeed: "132 mph",
    price: "$52,985",
    wikiPage: "Kia Telluride",
  },
  {
    brand: "Kia",
    model: "K5 GT",
    engine: "2.5L Turbo Inline-4",
    horsepower: 290,
    zeroToSixty: "5.4s",
    topSpeed: "155 mph",
    price: "$33,190",
    wikiPage: "Kia K5",
  },
  {
    brand: "Kia",
    model: "Sorento Hybrid",
    engine: "1.6L Turbo Inline-4 Hybrid",
    horsepower: 227,
    zeroToSixty: "8.0s",
    topSpeed: "118 mph",
    price: "$38,690",
    wikiPage: "Kia Sorento",
  },
  {
    brand: "Mazda",
    model: "MX-5 Miata Club",
    engine: "2.0L Naturally Aspirated Inline-4",
    horsepower: 181,
    zeroToSixty: "5.7s",
    topSpeed: "140 mph",
    price: "$35,300",
    wikiPage: "Mazda MX-5",
  },
  {
    brand: "Mazda",
    model: "CX-90 Turbo S",
    engine: "3.3L Turbo Inline-6 Mild Hybrid",
    horsepower: 340,
    zeroToSixty: "6.3s",
    topSpeed: "130 mph",
    price: "$57,950",
    wikiPage: "Mazda CX-90",
  },
  {
    brand: "Mazda",
    model: "Mazda3 Turbo",
    engine: "2.5L Turbo Inline-4",
    horsepower: 250,
    zeroToSixty: "5.9s",
    topSpeed: "134 mph",
    price: "$34,550",
    wikiPage: "Mazda3",
  },
  {
    brand: "Mazda",
    model: "CX-5 Carbon Turbo",
    engine: "2.5L Turbo Inline-4",
    horsepower: 256,
    zeroToSixty: "6.1s",
    topSpeed: "130 mph",
    price: "$39,200",
    wikiPage: "Mazda CX-5",
  },
  {
    brand: "Subaru",
    model: "WRX TR",
    engine: "2.4L Turbo Flat-4",
    horsepower: 271,
    zeroToSixty: "5.5s",
    topSpeed: "155 mph",
    price: "$42,775",
    wikiPage: "Subaru WRX",
  },
  {
    brand: "Subaru",
    model: "BRZ tS",
    engine: "2.4L Naturally Aspirated Flat-4",
    horsepower: 228,
    zeroToSixty: "5.4s",
    topSpeed: "140 mph",
    price: "$35,345",
    wikiPage: "Subaru BRZ",
  },
  {
    brand: "Subaru",
    model: "Outback Wilderness",
    engine: "2.4L Turbo Flat-4",
    horsepower: 260,
    zeroToSixty: "6.1s",
    topSpeed: "130 mph",
    price: "$39,960",
    wikiPage: "Subaru Outback",
  },
  {
    brand: "Subaru",
    model: "Forester Sport",
    engine: "2.5L Naturally Aspirated Flat-4",
    horsepower: 182,
    zeroToSixty: "8.3s",
    topSpeed: "120 mph",
    price: "$34,495",
    wikiPage: "Subaru Forester",
  },
  {
    brand: "Volkswagen",
    model: "Golf R",
    engine: "2.0L Turbo Inline-4",
    horsepower: 315,
    zeroToSixty: "4.7s",
    topSpeed: "155 mph",
    price: "$46,890",
    wikiPage: "Volkswagen Golf Mk8",
  },
  {
    brand: "Volkswagen",
    model: "GTI Autobahn",
    engine: "2.0L Turbo Inline-4",
    horsepower: 241,
    zeroToSixty: "5.7s",
    topSpeed: "155 mph",
    price: "$39,880",
    wikiPage: "Volkswagen Golf Mk8",
  },
  {
    brand: "Volkswagen",
    model: "ID.4 AWD Pro",
    engine: "Dual-Motor Electric",
    horsepower: 335,
    zeroToSixty: "5.4s",
    topSpeed: "112 mph",
    price: "$49,995",
    wikiPage: "Volkswagen ID.4",
  },
  {
    brand: "Volkswagen",
    model: "Atlas SEL Premium R-Line",
    engine: "2.0L Turbo Inline-4",
    horsepower: 269,
    zeroToSixty: "7.3s",
    topSpeed: "128 mph",
    price: "$53,205",
    wikiPage: "Volkswagen Atlas",
  },
  {
    brand: "Volvo",
    model: "XC90 Recharge",
    engine: "2.0L Turbo Inline-4 Plug-in Hybrid",
    horsepower: 455,
    zeroToSixty: "5.0s",
    topSpeed: "112 mph",
    price: "$79,995",
    wikiPage: "Volvo XC90",
  },
  {
    brand: "Volvo",
    model: "S60 Recharge Polestar Engineered",
    engine: "2.0L Turbo Inline-4 Plug-in Hybrid",
    horsepower: 455,
    zeroToSixty: "4.5s",
    topSpeed: "112 mph",
    price: "$69,500",
    wikiPage: "Volvo S60",
  },
  {
    brand: "Volvo",
    model: "EX30 Twin Motor Performance",
    engine: "Dual-Motor Electric",
    horsepower: 422,
    zeroToSixty: "3.4s",
    topSpeed: "112 mph",
    price: "$46,195",
    wikiPage: "Volvo EX30",
  },
  {
    brand: "Jaguar",
    model: "F-Type R75",
    engine: "5.0L Supercharged V8",
    horsepower: 575,
    zeroToSixty: "3.5s",
    topSpeed: "186 mph",
    price: "$113,000",
    wikiPage: "Jaguar F-Type",
  },
  {
    brand: "Jaguar",
    model: "F-Pace SVR",
    engine: "5.0L Supercharged V8",
    horsepower: 542,
    zeroToSixty: "3.8s",
    topSpeed: "178 mph",
    price: "$94,000",
    wikiPage: "Jaguar F-Pace",
  },
  {
    brand: "Jaguar",
    model: "I-Pace",
    engine: "Dual-Motor Electric",
    horsepower: 394,
    zeroToSixty: "4.5s",
    topSpeed: "124 mph",
    price: "$72,500",
    wikiPage: "Jaguar I-Pace",
  },
  {
    brand: "Land Rover",
    model: "Defender 110 V8",
    engine: "5.0L Supercharged V8",
    horsepower: 518,
    zeroToSixty: "4.9s",
    topSpeed: "149 mph",
    price: "$113,500",
    wikiPage: "Land Rover Defender",
  },
  {
    brand: "Land Rover",
    model: "Range Rover Sport SV",
    engine: "4.4L Twin-Turbo V8 Mild Hybrid",
    horsepower: 626,
    zeroToSixty: "3.7s",
    topSpeed: "180 mph",
    price: "$180,700",
    wikiPage: "Range Rover Sport",
  },
  {
    brand: "Land Rover",
    model: "Discovery P360",
    engine: "3.0L Turbo Inline-6 Mild Hybrid",
    horsepower: 355,
    zeroToSixty: "6.2s",
    topSpeed: "130 mph",
    price: "$64,450",
    wikiPage: "Land Rover Discovery",
  },
  {
    brand: "Maserati",
    model: "MC20",
    engine: "3.0L Twin-Turbo V6",
    horsepower: 621,
    zeroToSixty: "2.9s",
    topSpeed: "202 mph",
    price: "$243,000",
    wikiPage: "Maserati MC20",
  },
  {
    brand: "Maserati",
    model: "Grecale Trofeo",
    engine: "3.0L Twin-Turbo V6",
    horsepower: 523,
    zeroToSixty: "3.8s",
    topSpeed: "177 mph",
    price: "$105,500",
    wikiPage: "Maserati Grecale",
  },
  {
    brand: "Maserati",
    model: "GranTurismo Folgore",
    engine: "Tri-Motor Electric",
    horsepower: 751,
    zeroToSixty: "2.7s",
    topSpeed: "202 mph",
    price: "$192,000",
    wikiPage: "Maserati GranTurismo",
  },
  {
    brand: "Maserati",
    model: "Levante Modena",
    engine: "3.0L Twin-Turbo V6",
    horsepower: 424,
    zeroToSixty: "5.0s",
    topSpeed: "164 mph",
    price: "$97,400",
    wikiPage: "Maserati Levante",
  },
  {
    brand: "Alfa Romeo",
    model: "Giulia Quadrifoglio",
    engine: "2.9L Twin-Turbo V6",
    horsepower: 505,
    zeroToSixty: "3.8s",
    topSpeed: "191 mph",
    price: "$82,665",
    wikiPage: "Alfa Romeo Giulia",
  },
  {
    brand: "Alfa Romeo",
    model: "Stelvio Quadrifoglio",
    engine: "2.9L Twin-Turbo V6",
    horsepower: 505,
    zeroToSixty: "3.6s",
    topSpeed: "176 mph",
    price: "$90,865",
    wikiPage: "Alfa Romeo Stelvio",
  },
  {
    brand: "Alfa Romeo",
    model: "Tonale Veloce",
    engine: "1.3L Turbo Inline-4 Plug-in Hybrid",
    horsepower: 285,
    zeroToSixty: "5.9s",
    topSpeed: "128 mph",
    price: "$54,995",
    wikiPage: "Alfa Romeo Tonale",
  },
  {
    brand: "Alfa Romeo",
    model: "4C",
    engine: "1.75L Turbo Inline-4",
    horsepower: 237,
    zeroToSixty: "4.1s",
    topSpeed: "160 mph",
    price: "$67,150",
    wikiPage: "Alfa Romeo 4C",
  },
  {
    brand: "Bentley",
    model: "Continental GT Speed",
    engine: "4.0L Twin-Turbo V8",
    horsepower: 771,
    zeroToSixty: "3.1s",
    topSpeed: "208 mph",
    price: "$302,100",
    wikiPage: "Bentley Continental GT",
  },
  {
    brand: "Bentley",
    model: "Flying Spur Speed",
    engine: "4.0L Twin-Turbo V8",
    horsepower: 771,
    zeroToSixty: "3.3s",
    topSpeed: "177 mph",
    price: "$276,450",
    wikiPage: "Bentley Flying Spur",
  },
  {
    brand: "Bentley",
    model: "Bentayga S",
    engine: "4.0L Twin-Turbo V8",
    horsepower: 542,
    zeroToSixty: "4.4s",
    topSpeed: "180 mph",
    price: "$240,400",
    wikiPage: "Bentley Bentayga",
  },
  {
    brand: "Rolls-Royce",
    model: "Ghost",
    engine: "6.75L Twin-Turbo V12",
    horsepower: 563,
    zeroToSixty: "4.6s",
    topSpeed: "155 mph",
    price: "$354,750",
    wikiPage: "Rolls-Royce Ghost",
  },
  {
    brand: "Rolls-Royce",
    model: "Cullinan",
    engine: "6.75L Twin-Turbo V12",
    horsepower: 563,
    zeroToSixty: "4.8s",
    topSpeed: "155 mph",
    price: "$391,750",
    wikiPage: "Rolls-Royce Cullinan",
  },
  {
    brand: "Rolls-Royce",
    model: "Spectre",
    engine: "Dual-Motor Electric",
    horsepower: 577,
    zeroToSixty: "4.4s",
    topSpeed: "155 mph",
    price: "$420,000",
    wikiPage: "Rolls-Royce Spectre",
  },
  {
    brand: "Cadillac",
    model: "CT5-V Blackwing",
    engine: "6.2L Supercharged V8",
    horsepower: 668,
    zeroToSixty: "3.4s",
    topSpeed: "205 mph",
    price: "$94,990",
    wikiPage: "Cadillac CT5",
  },
  {
    brand: "Cadillac",
    model: "Escalade V",
    engine: "6.2L Supercharged V8",
    horsepower: 682,
    zeroToSixty: "4.4s",
    topSpeed: "125 mph",
    price: "$154,290",
    wikiPage: "Cadillac Escalade",
  },
  {
    brand: "Cadillac",
    model: "Lyriq",
    engine: "Dual-Motor Electric",
    horsepower: 500,
    zeroToSixty: "4.6s",
    topSpeed: "130 mph",
    price: "$64,990",
    wikiPage: "Cadillac Lyriq",
  },
  {
    brand: "Cadillac",
    model: "Celestiq",
    engine: "Dual-Motor Electric",
    horsepower: 600,
    zeroToSixty: "3.8s",
    topSpeed: "125 mph",
    price: "$340,000",
    wikiPage: "Cadillac Celestiq",
  },
  {
    brand: "GMC",
    model: "Hummer EV Pickup 3X",
    engine: "Tri-Motor Electric",
    horsepower: 1000,
    zeroToSixty: "3.0s",
    topSpeed: "106 mph",
    price: "$106,945",
    wikiPage: "GMC Hummer EV",
  },
  {
    brand: "GMC",
    model: "Sierra 1500 Denali Ultimate",
    engine: "6.2L Naturally Aspirated V8",
    horsepower: 420,
    zeroToSixty: "6.1s",
    topSpeed: "114 mph",
    price: "$84,200",
    wikiPage: "GMC Sierra",
  },
  {
    brand: "GMC",
    model: "Yukon Denali",
    engine: "6.2L Naturally Aspirated V8",
    horsepower: 420,
    zeroToSixty: "6.0s",
    topSpeed: "120 mph",
    price: "$78,600",
    wikiPage: "GMC Yukon",
  },
  {
    brand: "Jeep",
    model: "Wrangler Rubicon 392",
    engine: "6.4L Naturally Aspirated V8",
    horsepower: 470,
    zeroToSixty: "4.5s",
    topSpeed: "112 mph",
    price: "$92,140",
    wikiPage: "Jeep Wrangler (JL)",
  },
  {
    brand: "Jeep",
    model: "Grand Cherokee Trackhawk",
    engine: "6.2L Supercharged V8",
    horsepower: 707,
    zeroToSixty: "3.5s",
    topSpeed: "180 mph",
    price: "$90,070",
    wikiPage: "Jeep Grand Cherokee",
  },
  {
    brand: "Jeep",
    model: "Gladiator Mojave",
    engine: "3.6L Naturally Aspirated V6",
    horsepower: 285,
    zeroToSixty: "7.2s",
    topSpeed: "112 mph",
    price: "$58,000",
    wikiPage: "Jeep Gladiator",
  },
  {
    brand: "Ram",
    model: "1500 TRX",
    engine: "6.2L Supercharged V8",
    horsepower: 702,
    zeroToSixty: "4.1s",
    topSpeed: "118 mph",
    price: "$96,585",
    wikiPage: "Ram pickup",
  },
  {
    brand: "Ram",
    model: "2500 Power Wagon",
    engine: "6.4L Naturally Aspirated V8",
    horsepower: 410,
    zeroToSixty: "8.0s",
    topSpeed: "110 mph",
    price: "$72,035",
    wikiPage: "Ram pickup",
  },
  {
    brand: "Ram",
    model: "1500 Limited",
    engine: "3.0L Twin-Turbo Inline-6",
    horsepower: 540,
    zeroToSixty: "4.8s",
    topSpeed: "118 mph",
    price: "$75,000",
    wikiPage: "Ram pickup",
  },
  {
    brand: "Acura",
    model: "NSX Type S",
    engine: "3.5L Twin-Turbo V6 Hybrid",
    horsepower: 600,
    zeroToSixty: "2.9s",
    topSpeed: "191 mph",
    price: "$169,500",
    wikiPage: "Honda NSX (second generation)",
  },
  {
    brand: "Acura",
    model: "TLX Type S",
    engine: "3.0L Turbo V6",
    horsepower: 355,
    zeroToSixty: "4.9s",
    topSpeed: "155 mph",
    price: "$58,195",
    wikiPage: "Acura TLX",
  },
  {
    brand: "Acura",
    model: "Integra Type S",
    engine: "2.0L Turbo Inline-4",
    horsepower: 320,
    zeroToSixty: "5.1s",
    topSpeed: "167 mph",
    price: "$53,195",
    wikiPage: "Acura Integra",
  },
  {
    brand: "Acura",
    model: "MDX Type S",
    engine: "3.0L Turbo V6",
    horsepower: 355,
    zeroToSixty: "5.5s",
    topSpeed: "155 mph",
    price: "$76,300",
    wikiPage: "Acura MDX",
  },
  {
    brand: "Infiniti",
    model: "Q50 Red Sport 400",
    engine: "3.0L Twin-Turbo V6",
    horsepower: 400,
    zeroToSixty: "4.5s",
    topSpeed: "155 mph",
    price: "$59,950",
    wikiPage: "Infiniti Q50",
  },
  {
    brand: "Infiniti",
    model: "QX80",
    engine: "3.5L Twin-Turbo V6",
    horsepower: 450,
    zeroToSixty: "6.5s",
    topSpeed: "130 mph",
    price: "$82,450",
    wikiPage: "Infiniti QX80",
  },
  {
    brand: "Infiniti",
    model: "QX60",
    engine: "3.5L Naturally Aspirated V6",
    horsepower: 295,
    zeroToSixty: "6.6s",
    topSpeed: "120 mph",
    price: "$52,200",
    wikiPage: "Infiniti QX60",
  },
  {
    brand: "Genesis",
    model: "G70 3.3T",
    engine: "3.3L Twin-Turbo V6",
    horsepower: 365,
    zeroToSixty: "4.5s",
    topSpeed: "167 mph",
    price: "$51,600",
    wikiPage: "Genesis G70",
  },
  {
    brand: "Genesis",
    model: "Electrified G80",
    engine: "Dual-Motor Electric",
    horsepower: 365,
    zeroToSixty: "4.9s",
    topSpeed: "140 mph",
    price: "$74,250",
    wikiPage: "Genesis G80",
  },
  {
    brand: "Genesis",
    model: "GV80 3.5T",
    engine: "3.5L Twin-Turbo V6",
    horsepower: 375,
    zeroToSixty: "5.3s",
    topSpeed: "149 mph",
    price: "$74,300",
    wikiPage: "Genesis GV80",
  },
  {
    brand: "Genesis",
    model: "GV60 Performance",
    engine: "Dual-Motor Electric",
    horsepower: 429,
    zeroToSixty: "3.7s",
    topSpeed: "146 mph",
    price: "$69,900",
    wikiPage: "Genesis GV60",
  },
  {
    brand: "Mini",
    model: "Cooper S 3-Door",
    engine: "2.0L Turbo Inline-4",
    horsepower: 189,
    zeroToSixty: "6.2s",
    topSpeed: "146 mph",
    price: "$32,200",
    wikiPage: "Mini Hatch",
  },
  {
    brand: "Mini",
    model: "Countryman John Cooper Works",
    engine: "2.0L Turbo Inline-4",
    horsepower: 312,
    zeroToSixty: "5.4s",
    topSpeed: "155 mph",
    price: "$47,895",
    wikiPage: "Mini Countryman",
  },
  {
    brand: "Mini",
    model: "Clubman John Cooper Works",
    engine: "2.0L Turbo Inline-4",
    horsepower: 301,
    zeroToSixty: "4.9s",
    topSpeed: "155 mph",
    price: "$42,900",
    wikiPage: "Mini Clubman",
  },
  {
    brand: "Mitsubishi",
    model: "Outlander PHEV",
    engine: "2.4L Inline-4 Plug-in Hybrid",
    horsepower: 248,
    zeroToSixty: "6.5s",
    topSpeed: "106 mph",
    price: "$49,995",
    wikiPage: "Mitsubishi Outlander",
  },
  {
    brand: "Mitsubishi",
    model: "Eclipse Cross",
    engine: "1.5L Turbo Inline-4",
    horsepower: 152,
    zeroToSixty: "8.2s",
    topSpeed: "124 mph",
    price: "$30,190",
    wikiPage: "Mitsubishi Eclipse Cross",
  },
  {
    brand: "Mitsubishi",
    model: "Mirage",
    engine: "1.2L Naturally Aspirated Inline-3",
    horsepower: 78,
    zeroToSixty: "11.7s",
    topSpeed: "105 mph",
    price: "$18,015",
    wikiPage: "Mitsubishi Mirage",
  },
  {
    brand: "Polestar",
    model: "Polestar 2 Performance",
    engine: "Dual-Motor Electric",
    horsepower: 476,
    zeroToSixty: "4.1s",
    topSpeed: "127 mph",
    price: "$64,800",
    wikiPage: "Polestar 2",
  },
  {
    brand: "Polestar",
    model: "Polestar 3",
    engine: "Dual-Motor Electric",
    horsepower: 517,
    zeroToSixty: "4.5s",
    topSpeed: "130 mph",
    price: "$84,000",
    wikiPage: "Polestar 3",
  },
  {
    brand: "Polestar",
    model: "Polestar 4",
    engine: "Dual-Motor Electric",
    horsepower: 544,
    zeroToSixty: "3.8s",
    topSpeed: "124 mph",
    price: "$60,000",
    wikiPage: "Polestar 4",
  },
  {
    brand: "Fiat",
    model: "500e",
    engine: "Single-Motor Electric",
    horsepower: 117,
    zeroToSixty: "8.5s",
    topSpeed: "94 mph",
    price: "$34,095",
    wikiPage: "Fiat 500e",
  },
  {
    brand: "Fiat",
    model: "124 Spider Abarth",
    engine: "1.4L Turbo Inline-4",
    horsepower: 164,
    zeroToSixty: "6.3s",
    topSpeed: "144 mph",
    price: "$29,190",
    wikiPage: "Fiat 124 Spider",
  },
];

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

  const imageUrl = car.image || LOADING_CAR_IMAGE;

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
    image.src = IMAGE_UNAVAILABLE;
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
        <img class="compare-image" src="${carA.image || LOADING_CAR_IMAGE}" alt="${getCarLabel(
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
        <img class="compare-image" src="${carB.image || LOADING_CAR_IMAGE}" alt="${getCarLabel(
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
      image.src = IMAGE_UNAVAILABLE;
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

    if (!car.image) {
      car.image = IMAGE_UNAVAILABLE;
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
