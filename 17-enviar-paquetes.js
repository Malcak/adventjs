function countPackages(carriers, carrierID) {
  const [, packages, team] = carriers.find(([id]) => id === carrierID)
  return team.reduce((total, subordinate) => total + countPackages(carriers, subordinate), packages)
}