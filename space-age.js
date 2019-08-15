//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (place, num) => {
  if(place === "earth") {
    let newNum = num / 60 / 60 / 24 / 365.25;
    newNum = newNum.toFixed(2)
    return parseFloat(newNum);
  }
  else if(place === "mercury") {
    let newNum = num / 60 / 60 / 24 / 365.25 / 0.2408467;
    newNum = newNum.toFixed(2)
    return parseFloat(newNum);
  }
  else if(place === "venus") {
    let newNum = num / 60 / 60 / 24 / 365.25 / 0.61519726;
    newNum = newNum.toFixed(2)
    return parseFloat(newNum);
  }
  else if(place === "mars") {
    let newNum = num / 60 / 60 / 24 / 365.25 / 1.8808158;
    newNum = newNum.toFixed(2)
    return parseFloat(newNum);
  }
  else if(place === "jupiter") {
    let newNum = num / 60 / 60 / 24 / 365.25 / 11.862615;
    newNum = newNum.toFixed(2)
    return parseFloat(newNum);
  }
  else if(place === "saturn") {
    let newNum = num / 60 / 60 / 24 / 365.25 / 29.447498;
    newNum = newNum.toFixed(2)
    return parseFloat(newNum);
  }
  else if(place === "uranus") {
    let newNum = num / 60 / 60 / 24 / 365.25 / 84.016846;
    newNum = newNum.toFixed(2)
    return parseFloat(newNum);
  }
  else if(place === "neptune") {
    let newNum = num / 60 / 60 / 24 / 365.25 / 164.79132;
    newNum = newNum.toFixed(2)
    return parseFloat(newNum);
  }
  else {
    return "Error";
  }
};
