export interface GalleryItem {
  src: string;
  category: "engines" | "tuning" | "cars";
  title: string;
  description: string;
}

export const galleryItems: GalleryItem[] = [
  // Engines & Machining
  {
    src: "/photo/648448042_26251179264499077_3309831350860693678_n.jpg",
    category: "engines",
    title: "Darton Cylinder Sleeving",
    description: "In-house CNC block machining and press-fitting premium Darton iron sleeves for BMW B58."
  },
  {
    src: "/photo/700285747_27054805450803117_158015724386763124_n.jpg",
    category: "engines",
    title: "CNC Cylinder Head Porting",
    description: "Maximizing intake/exhaust port flow velocity for BMW S58 Twin-Turbo cylinder head."
  },
  {
    src: "/photo/700306268_27054805110803151_6200875956161866076_n.jpg",
    category: "engines",
    title: "Inline-6 Short Block Assembly",
    description: "Fully blueprinted short block featuring balanced rotating assembly and high boost ring gapping."
  },
  {
    src: "/photo/672653606_26711784711771861_9210966524023930249_n.jpg",
    category: "engines",
    title: "Block Deck Resurfacing",
    description: "CNC block decking and surface flattening to ensure flawless Athena head gasket sealing."
  },
  {
    src: "/photo/672677300_26711785435105122_3285091312195490304_n.jpg",
    category: "engines",
    title: "OgarageG Billet Piston Pairing",
    description: "Checking radial clearance and cylinder matching on a custom 2618 alloy forged piston kit."
  },
  {
    src: "/photo/672680188_26711784725105193_4252153212082604144_n.jpg",
    category: "engines",
    title: "Connecting Rods Balancing",
    description: "CP-Carrillo H-beam rods dynamic balancing down to +/- 0.1 gram variance."
  },
  {
    src: "/photo/S__54026244_0.jpg",
    category: "engines",
    title: "Billet Spec Custom Pistons",
    description: "Proprietary design OgarageG racing pistons with specialized skirt coatings and valve relief."
  },
  {
    src: "/photo/S__54026245_0.jpg",
    category: "engines",
    title: "High-Compression Dome Detail",
    description: "Analyzing specialized racing dome topography on CP-Carrillo high boost pistons."
  },
  {
    src: "/photo/S__54026246_0.jpg",
    category: "engines",
    title: "CNC Block Fire Grooving",
    description: "Machining specialized Cooper Ring grooves into the deck surface for extreme boost applications."
  },
  {
    src: "/photo/S__54026247_0.jpg",
    category: "engines",
    title: "Precision Cylinder Hone",
    description: "Achieving perfect plateau honing crosshatch angle for rapid piston ring seat-in."
  },
  {
    src: "/photo/S__54026248_0.jpg",
    category: "engines",
    title: "Main Caps Line Boring",
    description: "Ensuring perfect crankshaft rotational concentricity with billet main caps."
  },
  {
    src: "/photo/S__54026249.jpg",
    category: "engines",
    title: "B58 Turbo Internal Upgrade",
    description: "OgarageG Spec B58 heavy duty pistons and custom H-beam connecting rods package."
  },
  {
    src: "/photo/557575918_24909908745292809_8767376085136376854_n.jpg",
    category: "engines",
    title: "Race Valve Springs Upgrade",
    description: "Installing dual-coil high RPM valve springs to prevent valve float at 8,500+ RPM."
  },
  {
    src: "/photo/565655737_24987463157537367_4691886276897795684_n.jpg",
    category: "engines",
    title: "Titanium Retainer Assembly",
    description: "Ultra lightweight titanium retainers and high flow valves prepped for S58 racing head."
  },
  {
    src: "/photo/603848546_25635507029399640_1341411430193938757_n.jpg",
    category: "engines",
    title: "Bearing Shell Clearance Check",
    description: "Using digital micrometers and Plastigauge to double-check main bearing oil clearances."
  },

  // Dyno & Tuning Bays
  {
    src: "/photo/648178666_26251178824499121_2090250045273905207_n.jpg",
    category: "tuning",
    title: "BMW 340i B58 Dyno Calibration",
    description: "Fine-tuning the B58 engine map using Bootmod3 / MHD custom tuning on our rolling road."
  },
  {
    src: "/photo/648223733_26251178761165794_6778124099033751589_n.jpg",
    category: "tuning",
    title: "Big Turbo Dyno Power Run",
    description: "Validating boost response and exhaust backpressure at 2.5 bar boost pressure on a B58."
  },
  {
    src: "/photo/700800334_27099658192984509_6668226825757960123_n.jpg",
    category: "tuning",
    title: "MoTeC M150 wiring integration",
    description: "Custom motorsport spec wiring loom integration for clean standalone ECU interface."
  },
  {
    src: "/photo/700890498_27099657616317900_622019980774050453_n.jpg",
    category: "tuning",
    title: "Datalog Analytics",
    description: "Analyzing knock sensor threshold maps and ignition timing ramp rate in real-time."
  },
  {
    src: "/photo/700971182_27099657619651233_6905935125839873076_n.jpg",
    category: "tuning",
    title: "Wideband AFR Target Matching",
    description: "Dialing in target lambda values at full boost on E85 fuel for cold combustion charge."
  },
  {
    src: "/photo/701004042_27095896756693986_7826110624495653780_n.jpg",
    category: "tuning",
    title: "OgarageG Dyno Cell Overview",
    description: "Climate-controlled, high air-speed fan equipped dyno cell for repeatable testing."
  },
  {
    src: "/photo/701004042_27095896756693986_7826110624495653780_n (1).jpg",
    category: "tuning",
    title: "ECU Telemetry Log Checking",
    description: "Confirming cooling temps and engine oil pressure parameters remain within limits."
  },
  {
    src: "/photo/701663894_27095897016693960_7168697540923541747_n.jpg",
    category: "tuning",
    title: "Electronic Boost Control Setup",
    description: "Calibrating wastegate duty cycle table based on gear position for optimum traction."
  },
  {
    src: "/photo/701687229_27099657912984537_3013337661616302235_n.jpg",
    category: "tuning",
    title: "Engine Bay Vacuum Mapping",
    description: "Ensuring zero vacuum leaks on the dual-port wastegate solenoid plumbing."
  },

  // Finished Cars & Showcase
  {
    src: "/photo/584772139_25313103488306664_7245076373796934313_n.jpg",
    category: "cars",
    title: "BMW M240i Red Street Outlaw",
    description: "A fully built B58 block package combined with custom dynamic wheels. Racetrack ready."
  },
  {
    src: "/photo/653914375_26394704970146505_325215423282693049_n.jpg",
    category: "cars",
    title: "BMW G80 M3 Corner Weighting",
    description: "Conducting corner weight balancing and motorsport suspension alignment check."
  },
  {
    src: "/photo/657293651_26464839903133011_212894943760609327_n.jpg",
    category: "cars",
    title: "Engine Bay Cosmetic Cleanliness",
    description: "Billet parts, AN lines, and wire-tucked engine bay setup showing true OgarageG detail."
  },
  {
    src: "/photo/657417279_26465819353035066_3210606262633383033_n.jpg",
    category: "cars",
    title: "BMW M4 G82 Racetrack Prepped",
    description: "Pre-race checks on the track-prepped M4 prior to shakedown runs at Chang Circuit."
  },
  {
    src: "/photo/660453113_26574651502151850_3390599513455226332_n.jpg",
    category: "cars",
    title: "Trackside Diagnostic Review",
    description: "Inspecting live lap datalogs from race cars using professional MoTeC i2 analytics."
  },
  {
    src: "/photo/672672351_26711784485105217_295210917605046360_n.jpg",
    category: "cars",
    title: "Classic BMW E30 B58 Swap",
    description: "Classic BMW E30 chassis fitted with a built high-horsepower B58 inline-6 turbo engine."
  },
  {
    src: "/photo/699573108_27054805167469812_1791772490447201553_n.jpg",
    category: "cars",
    title: "BMW 340i B58 Turbo Street Tune",
    description: "800 HP package tuned on E85, maintaining street air-conditioning and full comfort."
  },
  {
    src: "/photo/701889442_27099657942984534_6808805249474279218_n.jpg",
    category: "cars",
    title: "Aero Underbody Splitters Setup",
    description: "Adjusting downforce splitters for high-speed stability at Nakornchaisri Circuit."
  },
  {
    src: "/photo/702703461_27095896783360650_8758496579318148763_n.jpg",
    category: "cars",
    title: "BMW E46 M3 Classic Restoration",
    description: "Complete powertrain build and historic restoration of a legendary classic inline-6 M3."
  },
  {
    src: "/photo/704147957_27126379846979010_4792559278647530933_n.jpg",
    category: "cars",
    title: "Full Carbon Track Weapon",
    description: "BMW G82 drag-spec beast featuring lightweight carbon body panels and custom race wheels."
  },
  {
    src: "/photo/704667893_27099658219651173_2729554671504691973_n.jpg",
    category: "cars",
    title: "BMW 335i N54 Dyno Finish",
    description: "Custom twin-turbocharged sleeper 335i packing high-horsepower street build."
  },
  {
    src: "/photo/708450915_27172140132402981_8754958205581360612_n.jpg",
    category: "cars",
    title: "OgarageG Showroom Display",
    description: "A gorgeous array of custom OgarageG built race and street performance cars at our shop."
  }
];
