export interface Product {
  id: string;
  name: string;
  price: number;
  engine: "B58 Gen 1" | "B58 Gen 2" | "B58 Stroker" | "All B58" | string;
  category: "pistons" | "rods" | "hardware" | "kits" | "sleeves" | "crankshafts" | string;
  image: string;
  description: string;
  specs: Record<string, string>;
  isFeatured?: boolean;
}

export const products: Product[] = [
  {
    id: "b58-gen2-pro-xtreme-pistons",
    name: "OgarageG Spec CP-Carrillo Forged Pistons (BMW 340i G20 B58 Gen 2)",
    price: 1199,
    engine: "B58 Gen 2",
    category: "pistons",
    image: "/photo/S__54026244_0.jpg",
    description: "Designed specifically for the Gen 2 B58 engine found in the BMW 340i G20. These 2618 forged pistons feature proprietary crown channels to optimize direct injection spray patterns and reinforced ring lands to handle up to 38+ psi of boost.",
    specs: {
      Material: "2618 High-Tensile Forged Aluminum",
      "Bore Size": "82.00mm (Standard) or 82.50mm (+0.50mm)",
      "Compression Ratio": "10.5:1 (Perfect for high boost E85 builds)",
      "Wrist Pin": "Upgraded Tool Steel Pin (0.225\" Wall)",
      Application: "BMW G20 340i B58 Gen 2 / TU"
    },
    isFeatured: true
  },
  {
    id: "b58-gen1-pro-xtreme-pistons",
    name: "OgarageG Spec Forged Pistons (BMW 340i F30 B58 Gen 1)",
    price: 1150,
    engine: "B58 Gen 1",
    category: "pistons",
    image: "/photo/S__54026245_0.jpg",
    description: "The ultimate forged pistons for the Gen 1 B58 engine (BMW 340i F30). Tailored for extreme thermal resistance in high-RPM street and drag racing. Engineered to minimize cylinder wall wear under heavy boost loads.",
    specs: {
      Material: "2618 Forged Alloy",
      "Bore Size": "82.00mm (Standard)",
      "Compression Ratio": "10.0:1 (Safe for 900+ HP applications)",
      "Wrist Pin": "Upgraded heavy wall tool steel pin",
      Application: "BMW F30 340i B58 Gen 1"
    },
    isFeatured: true
  },
  {
    id: "b58-carrillo-rods-h",
    name: "CP-Carrillo Pro-H-Beam Connecting Rod Set (BMW 340i B58)",
    price: 1549,
    engine: "All B58",
    category: "rods",
    image: "/photo/S__54026246_0.jpg",
    description: "Manufactured from Carrilloy steel, these connecting rods are designed specifically for all BMW 340i B58 inline-6 turbo engines pushed to their absolute limits. Fitted with ultra-high strength ARP Custom Age 625+ bolts to prevent rod stretch.",
    specs: {
      Material: "Carrilloy Proprietary Steel",
      Style: "Heavy-Duty H-Beam",
      Bolts: "ARP Custom Age 625+ (280,000 psi tensile strength)",
      Weight: "Balanced to +/- 1 gram",
      "HP Rating": "1,200+ HP Certified"
    },
    isFeatured: true
  },
  {
    id: "b58-carrillo-rods-a",
    name: "CP-Carrillo A-Beam Lightweight Connecting Rod Set (BMW 340i B58)",
    price: 1399,
    engine: "All B58",
    category: "rods",
    image: "/photo/S__54026246_0.jpg",
    description: "Lightweight A-beam connecting rods spec'd for high-response street and circuit racing BMW 340i builds. Reduces rotating mass for faster rev response while maintaining up to 800 HP capacity.",
    specs: {
      Material: "Carrilloy Steel Alloy",
      Style: "Lightweight A-Beam",
      Bolts: "ARP2000 Bolts standard",
      "Pin Diameter": "22mm",
      "HP Rating": "800 HP Certified"
    },
    isFeatured: false
  },
  {
    id: "b58-arp-head-studs-ca",
    name: "ARP Custom Age 625+ Head Stud Kit (BMW 340i B58)",
    price: 599,
    engine: "All B58",
    category: "hardware",
    image: "/photo/S__54026248_0.jpg",
    description: "Prevent cylinder head lifting and head gasket blowout under extreme boost on your B58 block. Custom Age 625+ head studs have a tensile strength of 260,000–280,000 psi, outperforming standard ARP2000 studs by over 20%.",
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
    id: "b58-arp2000-main-studs",
    name: "ARP 2000 Main Stud Kit (BMW 340i B58)",
    price: 249,
    engine: "All B58",
    category: "hardware",
    image: "/photo/S__54026248_0.jpg",
    description: "Provide maximum block rigidity and eliminate main cap walk under heavy load. Essential upgrade for any high-horsepower BMW 340i B58 inline-6 engine building project.",
    specs: {
      Material: "ARP2000 Chrome-Moly Alloy",
      Strength: "220,000 psi tensile strength",
      Application: "Main Cap Studs",
      Benefit: "Prevents crankshaft flexing and bearing distortion"
    },
    isFeatured: false
  },
  {
    id: "b58-darton-sleeves-block",
    name: "Darton Mid-Sleeve Kit (BMW 340i B58 block)",
    price: 899,
    engine: "All B58",
    category: "sleeves",
    image: "/photo/S__54026247_0.jpg",
    description: "Engineered for high boost! Replaces the factory aluminum closed-deck block sleeves with heavy-duty Darton ductile iron sleeves. Absolutely necessary for BMW 340i builds shooting for 1,000+ wheel horsepower.",
    specs: {
      Material: "Darton Ductile Iron",
      "Bore Range": "82.00mm to 83.50mm",
      "Wall Thickness": "Premium heavy-wall design",
      "Engine Machining": "Required (In-house sleeve installation available)"
    },
    isFeatured: false
  },
  {
    id: "b58-pro-turbo-kit-gen2",
    name: "OgarageG Pro-Series Stage 2 Build Kit (BMW 340i G20 B58 Gen 2)",
    price: 2199,
    engine: "B58 Gen 2",
    category: "kits",
    image: "/photo/S__54026249.jpg",
    description: "An all-in-one arsenal of engine internals to bulletproof your BMW 340i G20 B58 Gen 2 engine for up to 900 HP. Includes forged pistons, Carrillo steel rods, rod bearings, main bearings, and heavy-duty ARP hardware.",
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
    id: "b58-pro-turbo-kit-1200",
    name: "OgarageG Stage 3 1,200+ HP Engine Build Kit (BMW 340i B58)",
    price: 4499,
    engine: "All B58",
    category: "kits",
    image: "/photo/S__54026249.jpg",
    description: "The absolute ultimate package for building a world-record BMW 340i drag or track car. We put everything we use in our shop 1,200HP builds into this kit. Complete forged internal, hardware, gasket, and sleeving package.",
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
    id: "b58-billet-crank-stroker",
    name: "OgarageG 4340 Billet Steel Stroker Crankshaft (BMW B58 3.2L)",
    price: 2999,
    engine: "B58 Stroker",
    category: "crankshafts",
    image: "/photo/S__54026249.jpg",
    description: "Bespoke engineered 3.2L stroker crankshaft for absolute high-boost applications. Machined from a single block of aerospace-grade 4340 billet steel, featuring knife-edged counterweights and custom oiling channels.",
    specs: {
      Material: "4340 Billet Steel",
      Stroke: "94.6mm (Standard) or 97.0mm (Stroker for 3.2L)",
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
  return products.filter((p) => p.engine.toLowerCase() === eng.toLowerCase() || p.engine === "All B58");
};
