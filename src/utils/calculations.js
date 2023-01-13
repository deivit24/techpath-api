const {
  UI,
  FRONTENDFRAMEWORK,
  FRONTENDLANGUAGE,
  FRONTENDLANGUAGEWEIGHT,
  FRONTENDFRAMEWORKWEIGHT,
  UIWEIGHT,
  getAverage,
  weightedAverageScore,
} = require('./consts');

/**
 * Function to calculate front end
 * @param {Array} tools
 * @returns {Number} score
 */
const calculateFrontend = (tools) => {
  let uiExp = [];
  let langExp = [];
  let frameworkExp = [];

  for (const t of tools) {
    if (UI.includes(t.name.toUpperCase())) {
      uiExp.push(t.experience);
    } else if (FRONTENDLANGUAGE.includes(t.name.toUpperCase())) {
      langExp.push(t.experience);
    } else if (FRONTENDFRAMEWORK.includes(t.name.toUpperCase())) {
      frameworkExp.push(t.experience);
    }
  }

  const uiScore = uiExp.length > 0 ? getAverage(uiExp) : 0;
  const langScore = langExp.length > 0 ? getAverage(langExp) : 0;
  const frameworkScore = frameworkExp.length > 0 ? getAverage(frameworkExp) : 0;

  const uiWA = weightedAverageScore(uiScore, UIWEIGHT);
  const langWA = weightedAverageScore(langScore, FRONTENDLANGUAGEWEIGHT);
  const frameworkWA = weightedAverageScore(frameworkScore, FRONTENDFRAMEWORKWEIGHT);

  return ((uiWA + langWA + frameworkWA) / 10) * 100;
};

module.exports = {
  calculateFrontend,
};
