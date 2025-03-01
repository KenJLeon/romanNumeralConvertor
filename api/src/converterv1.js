const number = [1,5,10,50,100,500,1000];
const romanNumerals = ['I','V','X','L','C','D','M'];

export function converter(num) {
    let current = num;
    let currentFloorIndex = 0;
    let currentMidIndex = 1;
    let currentCeilingIndex = 2;
    
    let output = '';
    while (current > 0) {
        let remainder = current % 10;
        let currentRomanNumeral = '';
        if (remainder === 9) {
            currentRomanNumeral = romanNumerals[currentFloorIndex] + romanNumerals[currentCeilingIndex];
        }
        else if (remainder === 4) {
            currentRomanNumeral = romanNumerals[currentFloorIndex] + romanNumerals[currentMidIndex];
        }
        else {
            if (remainder >= 5 && remainder < 9) {
                currentRomanNumeral = romanNumerals[currentMidIndex];
                remainder -= 5;
            }
            for (let i = 0; i < remainder; i++) {
                currentRomanNumeral += romanNumerals[currentFloorIndex];
            }
        }

        output = currentRomanNumeral + output;
        currentFloorIndex = currentCeilingIndex;
        currentMidIndex = currentCeilingIndex + 1;
        currentCeilingIndex = currentCeilingIndex + 2;
        current = Math.floor(current / 10);
    }
    if (current != 0) {
        for (let i = 0; i < current; i++) {
                output = romanNumerals[currentCeilingIndex] + output;
            }
    }
    return output;
}