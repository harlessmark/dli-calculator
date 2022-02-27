type Data = {
  title: string;
  text: string;
  default?: number;
}[];

const initialState: Data = [
  {
    title: "Calculate Average PPF",
    text: "",
    default: 0,
  },
  {
    title: "Calculate Growing Area",
    text: "",
    default: 0,
  },
  {
    title: "Calculate Degradation",
    text: "",
    default: 0.8,
  },
  {
    title: "Your Plant's PPFD",
    text: "",
  },
  {
    title: "Calculate Light Hours",
    text: "",
    default: 12,
  },
  {
    // user can select plant's light requirements to compare with DLI
    title: "Your Plant's DLI",
    text: "",
  },
];

export default initialState;
