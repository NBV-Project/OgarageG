export interface Product {
  id: string;
  name: string;
  price: number;
  engine: "B58" | "S58" | "S55" | "N54" | "All BMW" | string;
  category: "pistons" | "rods" | "hardware" | "kits" | "sleeves" | "crankshafts" | string;
  image: string;
  description: string;
  specs: Record<string, string>;
  isFeatured?: boolean;
}

export const products: Product[] = [
  {
    id: "b58-pro-xtreme-pistons",
    name: "OgarageG Spec Forged Piston Set (BMW B58 3.0L Turbo)",
    price: 1199,
    engine: "B58",
    category: "pistons",
    image: "/photo/S__54026244_0.jpg",
    description: "Designed by OgarageG in collaboration with CP-Carrillo, these 2618 forged pistons are the ultimate upgrade for the legendary BMW B58 engine (found in BMW 340i, M240i, 440i, and Supra A90). Featuring a reinforced dome, upgraded tool steel pins, and advanced anti-friction skirt coatings to handle up to 35+ psi of boost.",
    specs: {
      Material: "2618 High-Tensile Forged Aluminum",
      "Bore Size": "82.00mm (Standard) or 82.50mm (+0.50mm)",
      "Compression Ratio": "10.5:1 (Perfect for high boost E85 builds)",
      "Wrist Pin": "Upgraded Tool Steel Pin (0.225\" Wall)",
      Coating: "Tuffskirt Anti-Friction Skirt Coating"
    },
    isFeatured: true
  },
  {
    id: "s58-pro-xtreme-pistons",
    name: "OgarageG Spec CP-Carrillo Forged Pistons (BMW S58 Twin-Turbo)",
    price: 1299,
    engine: "S58",
    category: "pistons",
    image: "/photo/S__54026245_0.jpg",
    description: "The gold standard for BMW S58 engine builds (G80 M3, G82 M4, X3M). Tailored for extreme thermal resistance in high-RPM time attack racing. Features proprietary crown channels to optimize combustion efficiency under heavy twin-turbo pressures.",
    specs: {
      Material: "2618 Forged Alloy",
      "Bore Size": "84.00mm (Standard)",
      "Compression Ratio": "9.3:1 (Safe for 1,200+ HP applications)",
      "Wrist Pin": "Upgraded heavy wall tool steel pin",
      Application: "BMW M3 G80 / M4 G82 / G87 M2"
    },
    isFeatured: true
  },
  {
    id: "b58-carrillo-rods",
    name: "CP-Carrillo Pro-H-Beam Connecting Rod Set (BMW B58)",
    price: 1549,
    engine: "B58",
    category: "rods",
    image: "/photo/S__54026246_0.jpg",
    description: "Manufactured from Carrilloy steel, these connecting rods are designed specifically for BMW B58 inline-6 turbo engines pushed to their absolute limits. Fitted with ultra-high strength ARP Custom Age 625+ bolts to prevent rod stretch.",
    specs: {
      Material: "Carrilloy Proprietary Steel",
      Style: "Heavy-Duty H-Beam",
      Bolts: "ARP Custom Age 625+ (280,000 psi tensile strength)",
      Weight: "Balanced to +/- 1 gram",
      "HP Rating": "1,000+ HP Certified"
    },
    isFeatured: true
  },
  {
    id: "s55-carrillo-rods",
    name: "CP-Carrillo H-Beam Connecting Rod Set (BMW S55 / N55)",
    price: 1649,
    engine: "S55",
    category: "rods",
    image: "/photo/S__54026246_0.jpg",
    description: "Increase S55 and N55 engine strength and reliability with the absolute best connecting rods money can buy. Spec'd for high-boost turbo or ultra high-RPM circuit racing F80 M3 / F82 M4 applications.",
    specs: {
      Material: "Carrilloy Steel Alloy",
      Style: "H-Beam with Tapered Small End",
      Bolts: "ARP2000 or Upgrade to Custom Age 625+",
      "Pin Diameter": "22mm",
      "HP Rating": "1,200+ HP Certified"
    },
    isFeatured: false
  },
  {
    id: "b58-arp-head-studs",
    name: "ARP Custom Age 625+ Head Stud Kit (BMW B58 3.0L Turbo)",
    price: 599,
    engine: "B58",
    category: "hardware",
    image: "/photo/S__54026248_0.jpg",
    description: "Prevent cylinder head lifting and head gasket blowout under extreme boost on your B58. Custom Age 625+ head studs have a tensile strength of 260,000–280,000 psi, outperforming standard ARP2000 studs by over 20%.",
    specs: {
      Material: "Custom Age 625+ Super-Alloy",
      Strength: "270,000 psi tensile strength",
      "Thread Pitch": "M11 Custom Threading",
      Inclusions: "Parallel-ground washers and ARP Ultra-Torque lube",
      Reusability: "Fully reusable"
    },
    isFeatured: true
  },
  {
    id: "bmw-arp2000-main-studs",
    name: "ARP 2000 Main Stud Kit (BMW B58 / S58 / S55 / N54)",
    price: 249,
    engine: "All BMW",
    category: "hardware",
    image: "/photo/S__54026248_0.jpg",
    description: "Provide maximum block rigidity and eliminate main cap walk under heavy load. Essential upgrade for any high-horsepower BMW inline-6 engine building project.",
    specs: {
      Material: "ARP2000 Chrome-Moly Alloy",
      Strength: "220,000 psi tensile strength",
      Application: "Main Cap Studs",
      Benefit: "Prevents crankshaft flexing and bearing distortion"
    },
    isFeatured: false
  },
  {
    id: "b58-darton-sleeves",
    name: "Darton Mid-Sleeve Kit (BMW B58 3.0L Turbo)",
    price: 899,
    engine: "B58",
    category: "sleeves",
    image: "/photo/S__54026247_0.jpg",
    description: "Engineered for high boost! Replaces the factory aluminum closed-deck block sleeves with heavy-duty Darton ductile iron sleeves. Absolutely necessary for builds shooting for 1,000+ wheel horsepower.",
    specs: {
      Material: "Darton Ductile Iron",
      "Bore Range": "82.00mm to 83.50mm",
      "Wall Thickness": "Premium heavy-wall design",
      "Engine Machining": "Required (In-house sleeve installation available)"
    },
    isFeatured: false
  },
  {
    id: "s58-darton-sleeves",
    name: "Darton Mid-Sleeve Kit (BMW S58 block)",
    price: 949,
    engine: "S58",
    category: "sleeves",
    image: "/photo/S__54026247_0.jpg",
    description: "Darton modular integrated cylinder sleeve kit for extreme high-boost S58 twin-turbo applications. Bulletproofs the block for up to 1,500+ HP.",
    specs: {
      Material: "Darton Ductile Iron",
      "Bore Range": "84.00mm to 86.00mm",
      "Wall Thickness": "Darton signature dry sleeve system",
      Benefit: "Prevents sleeve sinking and splitting under pressure"
    },
    isFeatured: false
  },
  {
    id: "b58-pro-turbo-kit",
    name: "OgarageG Pro-Series Stage 2 Build Kit (BMW B58 3.0L)",
    price: 2199,
    engine: "B58",
    category: "kits",
    image: "/photo/S__54026249.jpg",
    description: "An all-in-one arsenal of engine internals to bulletproof your BMW B58 engine for up to 900 HP. Includes forged pistons, Carrillo steel rods, rod bearings, main bearings, and heavy-duty ARP hardware.",
    specs: {
      "Pistons Included": "OgarageG Spec Forged 2618 (82.00mm, 10.5:1 CR)",
      "Rods Included": "CP-Carrillo H-Beam with CA625+ bolts",
      "Bearings Included": "King Racing XP-Series Rod & Main Bearings",
      "Hardware Included": "ARP2000 Head Stud Kit + Main Stud Kit",
      "Gasket Included": "Athena Cooper Ring Head Gasket"
    },
    isFeatured: true
  },
  {
    id: "s58-pro-turbo-kit-1200",
    name: "OgarageG Stage 3 1,200+ HP Engine Build Kit (BMW S58)",
    price: 4499,
    engine: "S58",
    category: "kits",
    image: "/photo/S__54026249.jpg",
    description: "The absolute ultimate package for building a world-record BMW M3/M4 drag or time attack car. We put everything we use in our shop 1,200HP builds into this kit. Complete forged internal, hardware, gasket, and sleeving package.",
    specs: {
      Pistons: "OgarageG Spec CP-Carrillo Pistons (Tool steel pins)",
      Rods: "CP-Carrillo Pro-H-Beam with Custom Age 625+ bolts",
      Bearings: "King Racing XP-Series Coated Bearings",
      Hardware: "ARP Custom Age 625+ Head Studs + Main Studs",
      Sleeves: "Darton Ductile Iron Sleeves Included",
      Gasket: "Athena Cooper Ring Head Gasket + Custom fire ring grooving specifications"
    },
    isFeatured: true
  },
  {
    id: "s58-billet-crank",
    name: "OgarageG 4340 Billet Steel Lightweight Crankshaft (BMW S58)",
    price: 2999,
    engine: "S58",
    category: "crankshafts",
    image: "/photo/S__54026249.jpg",
    description: "Bespoke engineered for high RPM and high horsepower applications. Machined from a single block of aerospace-grade 4340 billet steel, featuring knife-edged counterweights and custom oiling channels.",
    specs: {
      Material: "4340 Billet Steel",
      Stroke: "90.0mm (Standard) or 93.0mm (Stroker)",
      Weight: "15% lighter than OEM crankshaft",
      RevLimit: "Safe for up to 9,500 RPM",
      Balancing: "Fully balanced to racing specifications"
    },
    isFeatured: false
  }
];

export const getProductsByCategory = (cat: string) => {
  if (!cat || cat === "all") return products;
  return products.filter((p) => p.category.toLowerCase() === cat.toLowerCase());
};

export const getProductsByEngine = (eng: string) => {
  if (!eng || eng === "all") return products;
  return products.filter((p) => p.engine.toLowerCase() === eng.toLowerCase() || p.engine === "All BMW");
};
