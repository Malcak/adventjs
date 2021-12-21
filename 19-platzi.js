function learn(time, courses) {
  let pairOfCourses;
  for (let i = 0; i < courses.length; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      const timeToExpend = courses[i] + courses[j]
      const maximumPreviousTime = pairOfCourses 
        ? courses[pairOfCourses[0]] + courses[pairOfCourses[1]] 
        : 0
      if (timeToExpend <= time && timeToExpend > maximumPreviousTime) {
        pairOfCourses = [i, j]
      }
    }
  }
  return pairOfCourses ? pairOfCourses : null
}