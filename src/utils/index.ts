import EmailUtils from './EmailUtils';
import PasswordUtils from './PasswordUtils';
import { Mixin } from 'ts-mixer'; // https://www.npmjs.com/package/ts-mixer
import HTMLElementsUtils from './HTMLElementsUtils';

class Utils extends Mixin(EmailUtils, PasswordUtils, HTMLElementsUtils) {}

export default Utils;
