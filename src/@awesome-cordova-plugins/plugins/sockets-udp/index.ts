import { Injectable } from '@angular/core';
import {
  Plugin,
  Cordova,
  AwesomeCordovaNativePlugin,
  CordovaInstance,
  CordovaProperty,
  InstanceProperty,
} from '@awesome-cordova-plugins/core';
import { Observable, Observer, fromEventPattern } from 'rxjs';
import { filter } from 'rxjs/operators';

declare const window: Window & { chrome: any };

/**
 * @name SocketsUdp
 * @description
 * This plugin provides UDP sockets for Android and iOS.
 * @usage
 * ```typescript
 * import { SocketsUdp } from '@awesome-cordova-plugins/sockets-udp/ngx';
 *
 * constructor(private socketsUdp: SocketsUdp) { }
 *
 * ...
 *
 * this.platform.ready().then(() => {
 *    this.socketsUdp.getSockets()
 *      .then((result: any) => console.log(res))
 *      .catch((error: any) => console.error(error));
 * })
 *
 * ```
 */
@Plugin({
  pluginName: 'SocketsUdp',
  plugin: 'cordova-plugin-chrome-apps-sockets-udp',
  pluginRef: 'chrome.sockets.udp',
  repo: 'https://github.com/MobileChromeApps/cordova-plugin-chrome-apps-sockets-udp',
  install: 'ionic cordova plugin add cordova-plugin-chrome-apps-sockets-udp',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class SocketsUdp extends AwesomeCordovaNativePlugin {
  @CordovaProperty()
  onReceive: SocketCommonEvent;

  @CordovaProperty()
  onReceiveError: SocketCommonEvent;

  /**
   *
   * @param properties
   */
  @Cordova()
  create(properties: any): Promise<any> {
    return;
  }

  /**
   *
   * @param socketId
   * @param properties
   */
  @Cordova()
  update(socketId: number, properties: any): Promise<any> {
    return;
  }

  /**
   *
   * @param socketId
   * @param paused
   */
  @Cordova()
  setPaused(socketId: number, paused: any): Promise<any> {
    return;
  }

  /**
   *
   * @param socketId
   * @param address
   * @param port
   */
  @Cordova()
  bind(socketId: number, address: string, port: number): Promise<any> {
    return;
  }

  /**
   *
   * @param socketId
   * @param data
   * @param address
   * @param port
   */
  @Cordova()
  send(socketId: number, data: any, address: string, port: number): Promise<any> {
    return;
  }

  /**
   *
   * @param socketId
   */
  @Cordova()
  close(socketId: number) {
    return;
  }

  /**
   *
   * @param socketId
   */
  @Cordova()
  getInfo(socketId: number): Promise<any> {
    return;
  }

  /**
   *
   */
  @Cordova()
  getSockets(): Promise<any> {
    return;
  }

  /**
   *
   * @param socketId
   * @param enabled
   */
  @Cordova()
  setBroadcast(socketId: number, enabled: any): Promise<any> {
    return;
  }

  /**
   *
   * @param socketId
   * @param address
   */
  @Cordova()
  joinGroup(socketId: number, address: number): Promise<any> {
    return;
  }

  /**
   *
   * @param socketId
   * @param address
   */
  @Cordova()
  leaveGroup(socketId: number, address: string): Promise<any> {
    return;
  }

  /**
   *
   * @param socketId
   * @param ttl
   */
  @Cordova()
  setMulticastTimeToLive(socketId: number, ttl: any): Promise<any> {
    return;
  }

  /**
   *
   * @param socketId
   * @param enabled
   */
  @Cordova()
  setMulticastLoopbackMode(socketId: number, enabled: any): Promise<any> {
    return;
  }

  /**
   *
   * @param socketId
   */
  @Cordova()
  getJoinedGroups(socketId: number): Promise<any> {
    return;
  }

  /**
   * Watch all incoming data event
   */
  public onReceiveData(): Observable<SocketDataInfo> {
    return fromEventPattern(
      (eventHandler) => this.onReceive.addListener(eventHandler),
      (errorEventHandler) => this.onReceive.removeListener(errorEventHandler)
    );
  }

  /**
   * Watch socket incoming data
   * @param socketId
   */
  public onReceiveDataBySocketId(socketId: number): Observable<SocketDataInfo> {
    return this.onReceiveData().pipe(filter((socketDataInfo) => socketDataInfo.socketId === socketId));
  }

  /**
   * Watch all sockets incoming error event listener
   */
  public onReceiveDataError(): Observable<SocketErrorInfo> {
    return fromEventPattern(
      (eventHandler) => this.onReceiveError.addListener(eventHandler),
      (errorEventHandler) => this.onReceiveError.removeListener(errorEventHandler)
    );
  }

  /**
   * Watch socket incoming error event listener
   * @param socketId
   */
  public onReceiveDataErrorBySocketId(socketId: number): Observable<SocketErrorInfo> {
    return this.onReceiveDataError().pipe(filter((socketDataInfo) => socketDataInfo.socketId === socketId));
  }
}

export interface SocketCommonEvent {
  addListener(cb: any): void;

  removeListener(cb: any): void;

  fire(): void;

  hasListener(): boolean;

  hasListeners(): boolean;

  // Stub
  addRules(): void;

  // Stub
  getRules(): void;

  // Stub
  removeRules(): void;
}

export interface SocketDataInfo {
  socketId: number;
  uri: string;
  bytesRead: number;
  /**
   * Android only
   */
  data?: ArrayBuffer;
}

export interface SocketErrorInfo {
  message: string;
  resultCode: number;
  socketId: number;
  e?: boolean;
}
