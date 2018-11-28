/// <reference types="node" />
import { EventEmitter } from 'events';
export declare enum Value {
    HIGH = 1,
    LOW = 0
}
export interface IBase {
    init(cb: (err?: Error) => void): void;
}
export interface IPinInfo {
    pins: string[];
    peripherals: string[];
    gpio: number;
}
export interface IBoard {
    getPins(): {
        [pin: number]: IPinInfo;
    };
    getPinNumber(alias: string | number): number | null;
    getGpioNumber(alias: string | number): number | null;
}
export interface IPeripheral extends EventEmitter {
    readonly alive: boolean;
    readonly pins: number[];
    destroy(): void;
    validateAlive(): void;
}
export interface IGPIOConfig {
    pin: number | string;
    pullResistor?: number;
}
export interface IDigitalOutput extends IPeripheral {
    readonly value: number;
    write(value: Value): void;
}
export interface IDigitalInput extends IPeripheral {
    readonly value: Value;
    read(): number;
}
export interface IGPIOModule {
    PULL_NONE: number;
    PULL_DOWN: number;
    PULL_UP: number;
    createDigitalInput: (config: number | string | IGPIOConfig) => IDigitalInput;
    createDigitalOutput: (config: number | string | IGPIOConfig) => IDigitalOutput;
}
export declare type I2CReadCallback = (err: null | Error | string, data: null | Buffer | number) => void;
export declare type I2CWriteCallback = (err: null | Error | string) => void;
export interface II2C extends IPeripheral {
    read(address: number, length: number, cb: I2CReadCallback): void;
    read(address: number, register: number, length: number, cb: I2CReadCallback): void;
    readByte(address: number, cb: I2CReadCallback): void;
    readByte(address: number, register: number, cb: I2CReadCallback): void;
    readWord(address: number, cb: I2CReadCallback): void;
    readWord(address: number, register: number, cb: I2CReadCallback): void;
    write(address: number, buffer: Buffer, cb?: I2CWriteCallback): void;
    write(address: number, register: number, buffer: Buffer, cb?: I2CWriteCallback): void;
    writeByte(address: number, byte: number, cb?: I2CWriteCallback): void;
    writeByte(address: number, register: number, byte: number, cb?: I2CWriteCallback): void;
    writeWord(address: number, word: number, cb?: I2CWriteCallback): void;
    writeWord(address: number, register: number, word: number, cb?: I2CWriteCallback): void;
}
export interface II2CModule {
    createI2C: () => II2C;
}
export interface ILED extends IPeripheral {
    hasLed(): boolean;
    read(): Value;
    write(value: Value): void;
}
export interface ILEDModule {
    createLED: () => ILED;
}
export interface IPWMConfig {
    pin: number | string;
    frequency?: number;
    range?: number;
}
export interface IPWM extends IPeripheral {
    write(dutyCycle: number): void;
}
export interface IPWMModule {
    createPWM: (config: IPWMConfig) => IPWM;
}
export interface ISerialOptions {
    portId?: string;
    baudRate?: 115200 | 57600 | 38400 | 19200 | 9600 | 4800 | 2400 | 1800 | 1200 | 600 | 300 | 200 | 150 | 134 | 110 | 75 | 50 | number;
    dataBits?: 8 | 7 | 6 | 5;
    stopBits?: 1 | 2;
    parity?: 'none' | 'even' | 'mark' | 'odd' | 'space';
}
export declare type SerialCallback = () => void;
export declare type SerialErrorCallback = (err: Error | string) => void;
export interface ISerial extends IPeripheral {
    readonly port: string;
    readonly baudRate: number;
    readonly dataBits: number;
    readonly stopBits: number;
    readonly parity: string;
    open(cb?: SerialCallback): void;
    close(cb?: SerialErrorCallback): void;
    write(data: Buffer | string, cb?: SerialCallback): void;
    flush(cb?: SerialErrorCallback): void;
}
export interface ISerialModule {
    createSerial: (options?: ISerialOptions) => ISerial;
}