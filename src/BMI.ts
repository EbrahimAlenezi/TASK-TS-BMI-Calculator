/**
 * Calculate BMI
 * - Accepts weight in KG as a parameter (type number)
 * - Accepts height in CM as a parameter (type number)
 * - returns the calculated BMI (type number)
 * - The equation for BMI is (weight (kg) / height^2(m)).
 */
function calculateBMI(weight: number, height: number): number {
  // Write your code here 👇🏼
  const heightInMeters = height / 100;
  const BMI = weight / (heightInMeters * heightInMeters);

  // Stop making changes here!
  return BMI;
}

/**
 * Get BMI State
 * - Accepts BMI as a parameter (type number)
 * - returns a BMIStatus type indicating the BMI category (type BMIStatus)
 */

// Don't change this type
type BMIStatus = "underweight" | "healthy" | "overweight" | "obese";

function getBMIState(BMI: number): BMIStatus {
  // Don't change this variable
  let BMIState: BMIStatus = "obese";
  // Write your code here 👇🏼
  if (BMI < 18.5) {
    BMIState = "underweight";
  } else if (BMI >= 18.5 && BMI < 25) {
    BMIState = "healthy";
  } else if (BMI >= 25 && BMI < 30) {
    BMIState = "overweight";
  } else {
    BMIState = "obese";
  }

  // Stop making changes here!
  return BMIState;
}

/**
 * Get BMI State by Age
 * - Accepts BMI as a parameter (type number)
 * - Accepts age as a parameter (type number)
 * - returns a HealthStatus type indicating the BMI state (type HealthStatus)
 */

// Don't change this type
type HealthStatus = "not healthy" | "healthy";

function getBMIStateByAge(BMI: number, age: number): HealthStatus {
  // Don't change this variable
  let BMIState: HealthStatus = "not healthy";
  // Age-based healthy BMI ranges
  const ageRanges = [
    { minAge: 19, maxAge: 24, minBMI: 19, maxBMI: 24 },
    { minAge: 25, maxAge: 34, minBMI: 20, maxBMI: 25 },
    { minAge: 35, maxAge: 44, minBMI: 21, maxBMI: 26 },
    { minAge: 45, maxAge: 54, minBMI: 22, maxBMI: 27 },
    { minAge: 55, maxAge: 64, minBMI: 23, maxBMI: 28 },
    { minAge: 65, maxAge: Infinity, minBMI: 24, maxBMI: 29 },
  ];
  if (age < 18) {
    if (BMI >= 14 && BMI <= 20) {
      BMIState = "healthy";
    }
  } else {
    const range = ageRanges.find(r => age >= r.minAge && age <= r.maxAge);
    if (range && BMI > range.minBMI && BMI < range.maxBMI) {
      BMIState = "healthy";
    }
  }

  // Stop making changes here!
  return BMIState;
}

export { calculateBMI, getBMIState, getBMIStateByAge };
