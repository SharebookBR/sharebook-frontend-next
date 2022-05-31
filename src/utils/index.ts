import EmailUtils from './EmailUtils';
import PasswordUtils from './PasswordUtils';
import { Mixin } from 'ts-mixer'; // https://www.npmjs.com/package/ts-mixer
import HTMLElementsUtils from './HTMLElementsUtils';
import PostalCodeUtils from './PostalCodeUtils';
import PhoneUtils from './PhoneUtils';

class Utils extends Mixin(EmailUtils, PasswordUtils, HTMLElementsUtils, PostalCodeUtils, PhoneUtils) {}

export default Utils;
