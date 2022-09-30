import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';

/**
 * @name Mobile Accessibility
 * @description
 * This plugin set preferred scaling for text.
 *
 * @usage
 * ```typescript
 * import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';
 *
 *
 * constructor(private mobileAccessibility: MobileAccessibility) { }
 *
 * ...
 *
 * this.mobileAccessibility.getTextZoom();
 *
 * ```
 */
@Plugin({
  pluginName: 'MobileAccessibility',
  plugin: 'phonegap-plugin-mobile-accessibility',
  pluginRef: 'window.MobileAccessibility',
  repo: 'https://github.com/MaximBelov/phonegap-mobile-accessibility',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class MobileAccessibility extends AwesomeCordovaNativePlugin {
  /**
   *
   * * @returns {Promise<number>} Returns the result
   */
  @Cordova()
  getTextZoom(): Promise<number> {
    return;
  }

  /**
   * @param textZoom {number} A percentage value by which text in the WebView should be scaled.
   */
  @Cordova({ sync: true })
  setTextZoom(textZoom: number): void {}

  /**
   *
   */
  @Cordova({ sync: true })
  updateTextZoom(): void {}

  /**
   * A Boolean value which specifies whether to use the preferred text zoom of a default percent value of 100.
   * @param value {boolean} Returns the result
   */
  @Cordova({ sync: true })
  usePreferredTextZoom(value: boolean): void {}
}
