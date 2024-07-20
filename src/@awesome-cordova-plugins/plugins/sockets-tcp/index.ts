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
 * @name SocketsTcp
 * @description
 * This plugin provides TCP client sockets for Android and iOS.
 * @usage
 * ```typescript
 * import { SocketsTcp } from '@awesome-cordova-plugins/sockets-tcp/ngx';
 *
 * constructor(private socketsTcp: SocketsTcp) { }
 *
 * ...
 *
 * this.platform.ready().then(() => {
 *    this.socketsTcp.getSockets()
 *      .then((result: any) => console.log(res))
 *      .catch((error: any) => console.error(error));
 * })
 *
 * ```
 */
@Plugin({
  pluginName: 'SocketsTcp',
  plugin: 'cordova-plugin-chrome-apps-sockets-tcp',
  pluginRef: 'chrome.sockets.tcp',
  repo: 'https://github.com/KoenLav/cordova-plugin-chrome-apps-sockets-tcp',
  install: 'ionic cordova plugin add https://github.com/KoenLav/cordova-plugin-chrome-apps-sockets-tcp',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class SocketsTcp extends AwesomeCordovaNativePlugin {
  @CordovaProperty()
  onReceive: SocketCommonEvent;

  @CordovaProperty()
  onReceiveError: SocketCommonEvent;

  /**
   * @param properties
   */
  @Cordova()
  create(properties: any): Promise<SocketInfo> {
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
   * @param enabled
   * @param delay
   */
  @Cordova()
  setKeepAlive(socketId: number, enabled: any, delay: any): Promise<any> {
    return;
  }

  /**
   *
   * @param socketId
   * @param noDelay
   */
  @Cordova({
    platforms: ['Android'],
  })
  setNoDelay(socketId: number, noDelay: any): Promise<any> {
    return;
  }

  /**
   *
   * @param socketId
   * @param peerAddress
   * @param peerPort
   */
  @Cordova()
  connect(socketId: number, peerAddress: any, peerPort: number): Promise<any> {
    return;
  }

  /**
   *
   * @param socketId
   */
  @Cordova()
  disconnect(socketId: number): Promise<any> {
    return;
  }

  /**
   *
   * @param socketId
   * @param options
   */
  @Cordova()
  secure(socketId: number, options: any): Promise<any> {
    return;
  }

  /**
   *
   * @param socketId
   * @param data
   */
  @Cordova()
  send(socketId: number, data: any): Promise<any> {
    return;
  }

  /**
   *
   * @param socketId
   */
  @Cordova()
  close(socketId: number): Promise<any> {
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
  getSockets(): Promise<SocketInfo[]> {
    return;
  }

  /**
   *
   * @param socketId
   * @param options
   */
  @Cordova()
  pipeToFile(socketId: number, options: any): Promise<any> {
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

export interface SocketInfo {
  socketId: number;
  persistent?: boolean;
  bufferSize?: number;
  connected?: boolean;
  name?: string;
  paused?: boolean;
  localAddress?: string;
  localPort?: number;
  peerAddress?: string;
  peerPort?: number;
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
