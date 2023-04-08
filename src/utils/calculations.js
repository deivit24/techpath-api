const {
  UI,
  FRONTENDFRAMEWORK,
  FRONTENDLANGUAGE,
  FRONTENDLANGUAGEWEIGHT,
  FRONTENDFRAMEWORKWEIGHT,
  BACKENDFRAMEWORK,
  BACKENDLANGUAGE,
  BACKENDLANGUAGEWEIGHT,
  BACKENDFRAMEWORKWEIGHT,
  DBWEIGHT,
  DATABASE,
  UIWEIGHT,
  GIT,
  GITWEIGHT,
  BUILD,
  BUILDWEIGHT,
  CI,CIWEIGHT,CLOUD,CLOUDWEIGHT,CM, CMWEIGHT, CONTAINER, CONTAINERWEIGHT, MONITOR,MONITORWEIGHT,TEST,TESTWEIGHT,
  getAverage,
  weightedAverageScore,
  getSum
} = require('./consts');

/**
 * Function to calculate front end
 * @param {Array} tools
 * @returns {Number} score
 */
const calculateFrontend = (tools) => {
  let uiYears = [];
  let langYears = [];
  let frameworkYears = [];

  for (const t of tools) {
    if (UI.includes(t.name.toUpperCase())) {
      uiYears.push(t.experience * 10);
    } else if (FRONTENDLANGUAGE.includes(t.name.toUpperCase())) {
      langYears.push(t.experience * 10);
    } else if (FRONTENDFRAMEWORK.includes(t.name.toUpperCase())) {
      frameworkYears.push(t.experience * 10);
    }
  }

  const uiScore = calculateWeightedCategoryScore(uiYears, 0.1)
  const langScore = calculateWeightedCategoryScore(langYears, 0.3)
  const frameworkScore = calculateWeightedCategoryScore(frameworkYears, 0.2)

  const uiWA = weightedAverageScore(uiScore, UIWEIGHT);
  const langWA = weightedAverageScore(langScore, FRONTENDLANGUAGEWEIGHT);
  const frameworkWA = weightedAverageScore(frameworkScore, FRONTENDFRAMEWORKWEIGHT);

  return uiWA + langWA + frameworkWA
};

const calculateBackend = (tools) => {
  let dbYears = [];
  let langYears = [];
  let frameworkYears = [];

  for (const t of tools) {
    if (DATABASE.includes(t.name.toUpperCase())) {
      dbYears.push(t.experience * 10);
    } else if (BACKENDLANGUAGE.includes(t.name.toUpperCase())) {
      langYears.push(t.experience * 10);
    } else if (BACKENDFRAMEWORK.includes(t.name.toUpperCase())) {
      frameworkYears.push(t.experience * 10);
    }
  }

  const langScore = calculateWeightedCategoryScore(langYears, 0.3)
  const dbScore = calculateWeightedCategoryScore(dbYears, 0.2)
  const frameworkScore = calculateWeightedCategoryScore(frameworkYears, 0.1)

  const dbWA = weightedAverageScore(dbScore, DBWEIGHT);
  const langWA = weightedAverageScore(langScore, BACKENDLANGUAGEWEIGHT);
  const frameworkWA = weightedAverageScore(frameworkScore, BACKENDFRAMEWORKWEIGHT);

  return dbWA + langWA + frameworkWA;
};

const calculateFullStack = (frontendScore, backendScore) => {
  if (frontendScore === 0 || backendScore === 0) return 0;
  const backendWeight = 0.5 * frontendScore;
  const frontendWeight = 0.5 * backendScore;
  return Math.floor(backendWeight + frontendWeight);
};

const calculateDevOps = (tools) => {
  const GITYEARS = [];
  const BUILDYEARS = [];
  const CMYEARS = [];
  const CIYEARS = [];
  const CONTAINERYEARS = [];
  const CLOUDYEARS = [];
  const MONITORYEARS = [];
  const TESTYEARS = [];

  for (const t of tools) {
    if (GIT.includes(t.name.toUpperCase())) {
      GITYEARS.push(t.experience);
    } else if (BUILD.includes(t.name.toUpperCase())) {
      BUILDYEARS.push(t.experience);
    } else if (CM.includes(t.name.toUpperCase())) {
      CMYEARS.push(t.experience);
    } else if (CI.includes(t.name.toUpperCase())) {
      CIYEARS.push(t.experience);
    } else if (CONTAINER.includes(t.name.toUpperCase())) {
      CONTAINERYEARS.push(t.experience);
    } else if (CLOUD.includes(t.name.toUpperCase())) {
      CLOUDYEARS.push(t.experience);
    } else if (MONITOR.includes(t.name.toUpperCase())) {
      MONITORYEARS.push(t.experience);
    } else if (TEST.includes(t.name.toUpperCase())) {
      TESTYEARS.push(t.experience);
    }
  }
  const GITSCORE = GITYEARS.length > 0 ? getAverage(GITYEARS) : 0;
  const BUILDSCORE = BUILDYEARS.length > 0 ? getAverage(BUILDYEARS) : 0;
  const CMSCORE = CMYEARS.length > 0 ? getAverage(CMYEARS) : 0;
  const CISCORE = CIYEARS.length > 0 ? getAverage(CIYEARS) : 0;
  const CONTAINERSCORE = CONTAINERYEARS.length > 0 ? getAverage(CONTAINERYEARS) : 0;
  const CLOUDSCORE = CLOUDYEARS.length > 0 ? getAverage(CLOUDYEARS) : 0;
  const MONITORSCORE = MONITORYEARS.length > 0 ? getAverage(MONITORYEARS) : 0;
  const TESTSCORE = TESTYEARS.length > 0 ? getAverage(TESTYEARS) : 0;

  const GITWA = weightedAverageScore(GITSCORE, GITWEIGHT);
  const BUILDWA = weightedAverageScore(BUILDSCORE, BUILDWEIGHT);
  const CIWA = weightedAverageScore(CISCORE, CIWEIGHT);
  const CMWA = weightedAverageScore(CMSCORE, CMWEIGHT);
  const CONTAINERWA = weightedAverageScore(CONTAINERSCORE, CONTAINERWEIGHT);
  const CLOUDWA = weightedAverageScore(CLOUDSCORE, CLOUDWEIGHT);
  const MONITORWA = weightedAverageScore(MONITORSCORE, MONITORWEIGHT);
  const TESTWA = weightedAverageScore(TESTSCORE, TESTWEIGHT);
  const sum = getSum([GITWA, BUILDWA, CIWA, CMWA, CONTAINERWA, CLOUDWA, MONITORWA, TESTWA]);

  return (sum / 10) * 100;
};

const calculateWeightedCategoryScore = (scores, weight) => {
  let langScore = 0;
  if (scores.length === 0) {
      langScore = 0;
  } else if (scores.length === 1) {
      langScore = getAverage(scores);
  } else {
      scores.sort((a, b) => a - b);
      let maxScore = scores[scores.length - 1];
      let otherScores = scores.slice(0, scores.length - 1);
      const otherScoresWeight = otherScores.map((score) => score * weight);
      const otherScoresWeightedAvergage = getSum(otherScoresWeight);

      let totalScore = maxScore + otherScoresWeightedAvergage;
      if (totalScore >= 100) langScore = 100;
      else langScore = totalScore;
  }
  return langScore;
}

module.exports = {
  calculateFrontend,
  calculateBackend,
  calculateDevOps,
  calculateFullStack
};
