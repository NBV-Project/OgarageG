export interface Product {
  id: string;
  name: string;
  price: number;
  engine: "L15B" | "K20C1" | "K-Series" | "B-Series" | "All Honda" | string;
  category: "pistons" | "rods" | "hardware" | "kits" | "sleeves" | "crankshafts" | string;
  image: string;
  description: string;
  specs: Record<string, string>;
  isFeatured?: boolean;
}

export const products: Product[] = [
  {
    id: "l15b-pro-xtreme-pistons",
    name: "OgarageG Spec Forged Piston Set (Honda L15B Turbo)",
    price: 1199,
    engine: "L15B",
    category: "pistons",
    image: "/photo/S__54026244_0.jpg",
    description: "Designed by OgarageG in collaboration with CP-Carrillo, these 2618 forged pistons are the ultimate upgrade for the Honda Civic 1.5L Turbo (FC/FK). Featuring a reinforced dome, upgraded tool steel pins, and advanced anti-friction skirt coatings to handle up to 35+ psi of boost.",
    specs: {
      Material: "2618 High-Tensile Forged Aluminum",
      "Bore Size": "73.00mm (Standard) or 73.50mm (+0.50mm)",
      "Compression Ratio": "10.3:1 (Perfect for high boost)",
      "Wrist Pin": "Upgraded Tool Steel Pin (0.225\" Wall)",
      Coating: "Tuffskirt Anti-Friction Skirt Coating"
    },
    isFeatured: true
  },
  {
    id: "k20c1-pro-xtreme-pistons",
    name: "OgarageG Spec CP-Carrillo Forged Pistons (Honda K20C1 Type R)",
    price: 1299,
    engine: "K20C1",
    category: "pistons",
    image: "/photo/S__54026245_0.jpg",
    description: "The gold standard for Civic Type R (FK8/FL5) engine builds. Tailored for extreme thermal resistance in high-RPM time attack racing. Features proprietary crown channels to optimize direct injection spray patterns.",
    specs: {
      Material: "2618 Forged Alloy",
      "Bore Size": "86.00mm (Standard)",
      "Compression Ratio": "9.8:1 (Safe for 800+ HP applications)",
      "Wrist Pin": "Upgraded heavy wall tool steel pin",
      Application: "Honda Civic Type R FK8 / FL5"
    },
    isFeatured: true
  },
  {
    id: "l15b-carrillo-rods",
    name: "CP-Carrillo Pro-H-Beam Connecting Rod Set (Honda L15B)",
    price: 1549,
    engine: "L15B",
    category: "rods",
    image: "/photo/S__54026246_0.jpg",
    description: "Manufactured from Carrilloy steel, these connecting rods are designed specifically for Honda L15B turbo engines pushed to their absolute limits. Fitted with ultra-high strength ARP Custom Age 625+ bolts to prevent rod stretch.",
    specs: {
      Material: "Carrilloy Proprietary Steel",
      Style: "Heavy-Duty H-Beam",
      Bolts: "ARP Custom Age 625+ (280,000 psi tensile strength)",
      Weight: "Balanced to +/- 1 gram",
      "HP Rating": "800+ HP Certified"
    },
    isFeatured: true
  },
  {
    id: "k-series-carrillo-rods",
    name: "CP-Carrillo H-Beam Connecting Rod Set (Honda K20 / K24)",
    price: 1649,
    engine: "K-Series",
    category: "rods",
    image: "/photo/S__54026246_0.jpg",
    description: "Increase K-Series engine strength and reliability with the absolute best connecting rods money can buy. Spec'd for high-boost turbo or ultra high-RPM naturally aspirated Honda applications.",
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
    id: "l15b-arp-head-studs",
    name: "ARP Custom Age 625+ Head Stud Kit (Honda L15B Turbo)",
    price: 599,
    engine: "L15B",
    category: "hardware",
    image: "/photo/S__54026248_0.jpg",
    description: "Prevent cylinder head lifting and head gasket blowout under extreme boost. Custom Age 625+ head studs have a tensile strength of 260,000–280,000 psi, outperforming standard ARP2000 studs by over 20%.",
    specs: {
      Material: "Custom Age 625+ Super-Alloy",
      Strength: "270,000 psi tensile strength",
      "Thread Pitch": "M10 Custom Threading",
      Inclusions: "Parallel-ground washers and ARP Ultra-Torque lube",
      Reusability: "Fully reusable"
    },
    isFeatured: true
  },
  {
    id: "honda-arp2000-main-studs",
    name: "ARP 2000 Main Stud Kit (Honda L15B / K-Series / B-Series)",
    price: 249,
    engine: "All Honda",
    category: "hardware",
    image: "/photo/S__54026248_0.jpg",
    description: "Provide maximum block rigidity and eliminate main cap walk under heavy load. Essential upgrade for any high-horsepower Honda engine building project.",
    specs: {
      Material: "ARP2000 Chrome-Moly Alloy",
      Strength: "220,000 psi tensile strength",
      Application: "Main Cap Studs",
      Benefit: "Prevents crankshaft flexing and bearing distortion"
    },
    isFeatured: false
  },
  {
    id: "l15b-darton-sleeves",
    name: "Darton Mid-Sleeve Kit (Honda L15B Turbo Civic)",
    price: 899,
    engine: "L15B",
    category: "sleeves",
    image: "/photo/S__54026247_0.jpg",
    description: "Engineered for high boost! Replaces the weak factory aluminum cylinder block sleeves with heavy-duty Darton ductile iron sleeves. Absolutely necessary for builds shooting for 500+ wheel horsepower.",
    specs: {
      Material: "Darton Ductile Iron",
      "Bore Range": "73.00mm to 74.00mm",
      "Wall Thickness": "Premium heavy-wall design",
      "Engine Machining": "Required (In-house sleeve installation available)"
    },
    isFeatured: false
  },
  {
    id: "k-series-darton-sleeves",
    name: "Darton Mid-Sleeve Kit (Honda K20 / K24 block)",
    price: 949,
    engine: "K-Series",
    category: "sleeves",
    image: "/photo/S__54026247_0.jpg",
    description: "Darton modular integrated cylinder sleeve kit for extreme high-boost K-series applications. Bulletproofs the block for up to 1,200+ HP.",
    specs: {
      Material: "Darton Ductile Iron",
      "Bore Range": "86.00mm to 88.00mm",
      "Wall Thickness": "Darton signature dry sleeve system",
      Benefit: "Prevents sleeve sinking and splitting under pressure"
    },
    isFeatured: false
  },
  {
    id: "l15b-pro-turbo-kit",
    name: "OgarageG Pro-Series Stage 2 Build Kit (Honda L15B FC/FK)",
    price: 2199,
    engine: "L15B",
    category: "kits",
    image: "/photo/S__54026249.jpg",
    description: "An all-in-one arsenal of engine internals to bulletproof your Civic L15B Turbo engine for up to 600 HP. Includes forged pistons, Carrillo steel rods, rod bearings, main bearings, and heavy-duty ARP hardware.",
    specs: {
      "Pistons Included": "OgarageG Spec Forged 2618 (73.00mm, 10.3:1 CR)",
      "Rods Included": "CP-Carrillo H-Beam with CA625+ bolts",
      "Bearings Included": "King Racing XP-Series Rod & Main Bearings",
      "Hardware Included": "ARP2000 Head Stud Kit + Main Stud Kit",
      "Gasket Included": "Athena Cooper Ring Head Gasket"
    },
    isFeatured: true
  },
  {
    id: "k20c1-pro-turbo-kit-1000",
    name: "OgarageG Stage 3 1,000+ HP Engine Build Kit (Honda K20C1)",
    price: 4499,
    engine: "K20C1",
    category: "kits",
    image: "/photo/S__54026249.jpg",
    description: "The absolute ultimate package for building a world-record Civic Type R drag or time attack car. We put everything we use in our shop 1,000HP builds into this kit. Complete forged internal, hardware, gasket, and sleeving package.",
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
    id: "k24-billet-crank",
    name: "OgarageG 4340 Billet Steel Lightweight Crankshaft (Honda K24)",
    price: 2999,
    engine: "K-Series",
    category: "crankshafts",
    image: "/photo/S__54026249.jpg",
    description: "Bespoke engineered for high RPM and high horsepower applications. Machined from a single block of aerospace-grade 4340 billet steel, featuring knife-edged counterweights and custom oiling channels.",
    specs: {
      Material: "4340 Billet Steel",
      Stroke: "99.0mm (Standard) or 102.0mm (Stroker)",
      Weight: "15% lighter than OEM crankshaft",
      RevLimit: "Safe for up to 10,000 RPM",
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
  return products.filter((p) => p.engine.toLowerCase() === eng.toLowerCase() || p.engine === "All Honda");
};
