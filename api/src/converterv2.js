const thousandsMap = new Map();
['M','MM','MMM'].forEach((element, index) => thousandsMap.set(index+1, element));
const hundredsMap = new Map();
['C','CC','CCC','CD','D','DC','DCC','DCCC','CM'].forEach((element, index) => hundredsMap.set(index+1, element));
const tensMap = new Map();
['X','XX','XXX','XL','L','LX','LXX','LXXX','XC'].forEach((element, index) => tensMap.set(index+1, element));
const singlesMap = new Map();
['I','II','III','IV','V','VI','VII','VIII','IX'].forEach((element, index) => singlesMap.set(index+1, element));

const romanNumeralsMapList = [singlesMap, tensMap, hundredsMap, thousandsMap];

export function romanNumeralConverter(num) {
    let current = num;
    let output = '';
    for (let i = 0; i < romanNumeralsMapList.length; i++) {
        let remainder = current % 10;
        if (remainder != 0) {
            output = romanNumeralsMapList[i].get(remainder) + output;
        }
        current = (current - remainder) / 10;
    }
    return output;
}