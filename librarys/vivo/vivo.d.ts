export as namespace vivo;

export function init(version: Number, gameId: Number, gameKey: string, gameSecret: string): void;
export function getRoomInfo(): void;
export function quit(reason: string): void;
export function finish(result: Number): void;
export function setOrientation(orientation: Number): void;
export function setAudio(enable: Number, volume: Number): void;
export function ready(userData: string): void;
export function gameOver(result: Number): void;
export function setOnInitCB(callback: Function): void;
export function setOnRoomInfoCB(callback: Function): void;
export function setOnReadyCB(callback: Function): void;
export function setOnStartCB(callback: Function): void;
export function setOnFinishCB(callback: Function): void;
export function setOnAudioCB(callback: Function): void;
