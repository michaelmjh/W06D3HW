const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const locations = this.journeys.map(journey => journey.startLocation);
  return locations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const locations = this.journeys.map(journey => journey.endLocation);
  return locations;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeysByTransport = this.journeys.filter(journey => journey.transport === transport);
  return journeysByTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeysByMinDistance = this.journeys.filter(journey => journey.distance >= minDistance);
  return journeysByMinDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const runningTotal = 0;
  const totalRunTime = this.journeys.reduce((runningTotal, journey) => runningTotal += journey.distance, runningTotal);
  return totalRunTime;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const allModesOfTransport = this.journeys.map(journey => journey.transport);
  
  const unique = (value, index, self) => { 
    return self.indexOf(value) === index
  }
  
  const uniqueTransport = allModesOfTransport.filter(unique);
  
  return uniqueTransport;
};

module.exports = Traveller;
