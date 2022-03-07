const instructions = [
  {
    title: "Average PPF",
    text: "PPF is the measurement of PAR your light source emits per second. The amount of light is measured in micromoles (one millionth of a mole) per second, expressed as μmol/second. A mole is a unit of measurement for photons. We can use this measurement, along with a few others, to calculate your plant's PPFD which will then be used to get your plant's DLI.",
    directions: "Using a quantum flux meter, or an app on your phone that measures PAR light (μmol/s), collect light measurements from various areas of your plant canopy. We will use these measurements to get the average PPF. Ideally, you'd want to take measurements throughout the day when your plant is exposed to light for better accuracy.",
    subtext: "Does your light meter already measure PPFD (μmol/m²/s)? Skip ahead here.",
    inputName: "ppf",
  },
  {
    title: "Growing Area",
    text: "Next, we want to measure the area of your plant's canopy. This is the area of the plant's canopy that is exposed to the sun.",
    directions: "",
    inputName: "growingArea",
  },
  {
    title: "Light Degradation",
    text: "testtesttest",
    inputName: "degredation",
  },
  {
    title: "Your Plant's PPFD",
    text: "",
  },
  {
    title: "Light Hours",
    text: "testtesttesttesttest",
    inputName: "lightHours",
  },
  {
    // user can select plant's light requirements to compare with DLI
    title: "Your Plant's DLI",
    text: "This is your plant's DLI",
    inputName: "",
  },
];

export default instructions;
