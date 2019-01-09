## 1.4.0 (2019-01-08)

- Added `getActivePeripheral`, `setActivePeripheral`, and `getActivePeripherals` methods to the base module. This functionality existed in raspi-peripheral already, but wasn't exposed.

## 1.3.0 (2019-01-07)

- Added the `pullResistor` readonly property to `IDigitalInput`

## 1.2.0 (2018-12-7)

- Updated the `createPWM` method to take a number and string as well as config object

## 1.1.0 (2018-12-6)

- Added `frequency`, `range`, and `dutyCycle` readonly properties to IPWM

## 1.0.1 (2018-12-4)

- Renamed `IBoard` to `IBoardModule` and `IBase` to `IBaseModule`. Normally this should be semver major, but this module is so incredibly new  and I'm the only one using it, so I'm going to skip it this one time.

## 1.0.0 (2018-12-3)

- Initial version
