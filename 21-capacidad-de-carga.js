function canCarry(capacity, trip) {
  const deliveryPoints = new Map()
  let actualCap = 0

  for (const point of trip) {
    const [gifts, pickupPoint, deliveryPoint] = point
    
    for (const pointOfDeliveryList of deliveryPoints) {
      if (pointOfDeliveryList[0] <= pickupPoint) {
        actualCap -= pointOfDeliveryList[1]
        deliveryPoints.delete(pointOfDeliveryList[0])
      }
    }

    actualCap += gifts
    if (actualCap > capacity) return false
    deliveryPoints.set(deliveryPoint, gifts)
  }
  return true
}