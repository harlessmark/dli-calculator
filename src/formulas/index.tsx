/**
 * Calculates the average PPFD measured over one square meter and in micromoles
 * per square meter per second (umol/m²/s).
 *
 * @param degredation {number} - The degredation of light measured as a percentage.
 * @param nums {array} - An array of the recorded PPF values measured as umol/second.
 * @returns {number} - The average PPFD with degredation.
 */
const calculateAveragePPFD = (degredation: number = 0.8, ...nums: number[]): number => {
  const averagePPFD = nums.reduce((acc, curr) => acc + curr, 0) / nums.length
  return averagePPFD * degredation;
};

/**
 * Calculates the plant's growing area (canopy) in square meters.
 *
 * @param width {number} - The width of the plant canopy.
 * @param height {number} - The height of the plant canopy.
 * @param unit {string} - The unit of measurement (in or cm) used as measurement.
 * @returns {number} - The area of the plant canopy in square meters.
 */
const calculateGrowingArea = (
  width: number,
  height: number,
  unit: string = "in"
): number => {
  if (unit === "in") {
    // gets the square feet of the plant canopy
    const averageGrowingArea = width * height / 12;

    // converts the square feet to square meters
    return averageGrowingArea / 10.7639;
  }

  // returns the area of the plant canopy in square meters
  return width * height / 100;
};

/**
 * Calculates the plant's Daily Light Integral (DLI) measured in moles per
 * square meter per day mol/m²/d.
 *
 * @param ppfd {number} - The average PPFD measured.
 * @param lightHours {number} - The number of hours of light the plant receives.
 * @param growingArea {number} - The area of the plant canopy in square meters.
 * @returns {number} - The plant's DLI.
 */
const calculateDLI = (
  ppfd: number,
  lightHours: number = 12,
  growingArea: number
): number => (
  ppfd * lightHours * growingArea
);

export { calculateAveragePPFD, calculateGrowingArea, calculateDLI };
