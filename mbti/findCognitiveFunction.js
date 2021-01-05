/**
 * @param {string} mbti
 * @return {{
 *  dominant: string,
 *  auxiliary: string,
 *  tertiary: string,
 *  inferior: string,
 * }}
 */
export function findCognitiveFunction(mbti) {
  const temp = mbti;
  const attitude = temp[3];
  const data = findExtroverted(attitude, temp);
  const extroverted = `${data.extroverted}e`;
  const introverted = `${data.introverted}i`;
  const result = findDominant({ extroverted, introverted, sign: data.sign });

  const tertiary = flipAuxiliaryAndDominant(result.auxiliary);
  const inferior = flipAuxiliaryAndDominant(result.dominant);

  return {
    dominant: result.dominant,
    auxiliary: result.auxiliary,
    tertiary: tertiary,
    inferior: inferior,
  };
  throw new Error("Not implemented");
}

const findExtroverted = (attitude, temp) => {
  if (attitude === "P") {
    return {
      extroverted: temp[1],
      introverted: temp[2],
      sign: "e",
    };
  } else {
    return {
      extroverted: temp[2],
      introverted: temp[1],
      sign: "i",
    };
  }
};

const findDominant = (data) => {
  if (data.extroverted[1] === data.sign) {
    return { dominant: data.extroverted, auxiliary: data.introverted };
  }
  return { dominant: data.introverted, auxiliary: data.extroverted };
};

const flipAuxiliaryAndDominant = (value) => {
  const function1 = ["T", "F"];
  const function2 = ["S", "N"];
  const temp = ["i", "e"];

  const functionMap = function1.includes(value[0]) ? function1 : function2;
  return (
    functionMap.filter((d) => d !== value[0])[0] +
    temp.filter((d) => d !== value[1])[0]
  );
};
const flipDominant = (value) => {
  const function2 = ["S", "N"];
  const temp = ["i", "e"];

  return (
    function2.filter((d) => d !== value[0])[0] +
    temp.filter((d) => d !== value[1])[0]
  );
};
