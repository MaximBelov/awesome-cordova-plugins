import { Injectable } from '@angular/core';
import { CordovaProperty, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name Locale
 * @description
 * This plugin defines a global Locale object, which describes the device's locale info like current language, preferred languages and region.
 * @usage
 * ```typescript
 * import { Locale } from '@awesome-cordova-plugins/locale/ngx';
 *
 * constructor(private locale: Locale) { }
 *
 * ...
 *
 * console.log('Device language is: ' + this.locale.language);
 * ```
 */
@Plugin({
  pluginName: 'Locale',
  plugin: 'cordova-plugin-locale',
  pluginRef: 'Locale',
  repo: 'https://github.com/angjelkom/cordova-plugin-locale',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class Locale extends AwesomeCordovaNativePlugin {
  /** Get the device region */
  @CordovaProperty()
  region: string;

  /**
   * Get the current language on the device.
   */
  @CordovaProperty()
  language: string;

  /**
   * Get the preferred languages on the device.
   * These are the list of languages the user has picked for the devices.
   */
  @CordovaProperty()
  preferredLanguages: string[];
}
