const UI = ['HTML', 'CSS'];
const FRONTENDLANGUAGE = ['JAVASCRIPT', 'TYPESCRIPT'];
const FRONTENDFRAMEWORK = ['REACT.JS', 'VUE.JS', 'ANGULAR', 'EMBER.JS', 'SVELTE'];

const BACKENDLANGUAGE = ['PYTHON', 'NODEJS', 'PHP', 'GO', 'JAVA', 'RUBY', '.NET', 'LUA', 'C', 'C++', 'RUST', 'HASKELL'];
const BACKENDFRAMEWORK = ['FLASK', 'DJANGO', 'EXPRESS', 'FASTAPI', 'SPRING BOOT', 'LARAVEL', 'RAILS', '.NET CORE'];
const DATABASE = ['MYSQL', 'POSTGRESQL', 'MONGODB', 'SQLITE', 'MARIADB'];
const GIT = ['GIT'];
const BUILD = ['MAVEN'];
const CI = ['JENKINS'];
const CM = ['CHEF', 'PUPPET', 'ANSIBLE'];
const CONTAINER = ['DOCKER', 'KUBERNETES'];
const CLOUD = ['AMAZON WEB SERVICE', 'GOOGLE CLOUD', 'AZURE DEVOPS'];
const MONITOR = ['SPLUNK'];
const TEST = ['SELENIUM'];

const UIWEIGHT = 0.2;
const FRONTENDFRAMEWORKWEIGHT = 0.3;
const FRONTENDLANGUAGEWEIGHT = 0.5;

const BACKENDFRAMEWORKWEIGHT = 0.2;
const BACKENDLANGUAGEWEIGHT = 0.5;
const DBWEIGHT = 0.3;

const GITWEIGHT = 0.1;
const BUILDWEIGHT = 0.1;
const CMWEIGHT = 0.1;
const CIWEIGHT = 0.1;
const CONTAINERWEIGHT = 0.2;
const CLOUDWEIGHT = 0.2;
const MONITORWEIGHT = 0.1;
const TESTWEIGHT = 0.1;

/**
 * Function that calculates average
 * @param {Array} numbers
 * @returns {Number}
 */
const getAverage = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; ++i) {
    sum += numbers[i];
  }
  return sum / numbers.length;
};

/**
 * Function that calculates weighted average
 * @param {Number} score This is the avergage score
 * @param {Number} wa This is the weighted
 * @returns {Number}
 */
const weightedAverageScore = (score, wa) => {
  return score * wa;
};

/**
 * Function that calculates sum
 * @param {Number} arr array of numners
 * @returns {Number}
 */
const getSum = (arr) => {
  return arr.reduce(function (a, b) {
    return a + b;
  }, 0);
};

module.exports = {
  UI,
  FRONTENDLANGUAGE,
  FRONTENDFRAMEWORK,
  BACKENDLANGUAGE,
  BACKENDFRAMEWORK,
  DATABASE,
  GIT,
  BUILD,
  CI,
  CM,
  CONTAINER,
  CLOUD,
  MONITOR,
  TEST,
  UIWEIGHT,
  FRONTENDFRAMEWORKWEIGHT,
  FRONTENDLANGUAGEWEIGHT,
  BACKENDFRAMEWORKWEIGHT,
  BACKENDLANGUAGEWEIGHT,
  DBWEIGHT,
  GITWEIGHT,
  BUILDWEIGHT,
  CMWEIGHT,
  CIWEIGHT,
  CONTAINERWEIGHT,
  CLOUDWEIGHT,
  MONITORWEIGHT,
  TESTWEIGHT,
  getAverage,
  weightedAverageScore,
  getSum
};
