import EmailUtils from './EmailUtils';
import PasswordUtils from './PasswordUtils';
import { Mixin } from 'ts-mixer'; // https://www.npmjs.com/package/ts-mixer
import HTMLElementsUtils from './HTMLElementsUtils';
import ZipCodeUtils from './ZipCodeUtils';

class Utils extends Mixin(EmailUtils, PasswordUtils, HTMLElementsUtils, ZipCodeUtils) {}

export default Utils;
