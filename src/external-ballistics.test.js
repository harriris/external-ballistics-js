var { ExternalBallistics } = require("./external-ballistics");

test("ballistics", () => {
  const externalBallisticsVariables = {
    dragFunction: "G1",
    dragCoefficient: 0.5, // Bullet's Ballistic Coefficient, B.C.
    muzzleVelocity: 1200, // Bullet's muzzle velocity in feet per second
    windSpeed: 0, // Wind speed in Miles per Hour
    windAngle: 0, // Wind direction angle in degrees (0=headwind, 90=right to left, 180=tailwind, 270/-90=left to right),
    sightHeight: 1.6, // Height of the line of sight from the center of the barrel's bore in inches
    shootingAngle: 0, // Shooting angle in degrees (uphill / downhill)
    zeroRange: 100, // Zero range in yards
  };

  var externalBallistics = new ExternalBallistics();
  externalBallistics.setVariables(externalBallisticsVariables);
  externalBallistics.solveAll();

  expect(externalBallistics.getPath(0)).toBe(-1.6);
  expect(externalBallistics.getPath(100)).toBeCloseTo(0.021086942030323762, 1);
  expect(externalBallistics.getPath(200)).toBeCloseTo(-25.871778035601729, 1);
  expect(externalBallistics.getPath(300)).toBeCloseTo(-82.458422497938699, 1);
  expect(externalBallistics.getPath(400)).toBeCloseTo(-172.74938891261581, 1);
  expect(externalBallistics.getPath(500)).toBeCloseTo(-299.58523278666632, 1);
  expect(externalBallistics.getPath(600)).toBeCloseTo(-465.99531684228566, 1);
  expect(externalBallistics.getPath(700)).toBeCloseTo(-674.45631229315825, 1);
  expect(externalBallistics.getPath(800)).toBeCloseTo(-927.58052626524727, 1);
  expect(externalBallistics.getPath(900)).toBeCloseTo(-1229.0334190298465, 1);
  expect(externalBallistics.getPath(1000)).toBeCloseTo(-1580.0152706594765, 1);
});
