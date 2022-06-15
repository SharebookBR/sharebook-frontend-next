import EmailUtils from './EmailUtils';
import PasswordUtils from './PasswordUtils';
import { Mixin } from 'ts-mixer'; // https://www.npmjs.com/package/ts-mixer
import HTMLElementsUtils from './HTMLElementsUtils';
import PostalCodeUtils from './PostalCodeUtils';
import PhoneUtils from './PhoneUtils';
import DateUtils from './DateUtils';
import AgeUtils from './AgeUtils';

class Utils extends Mixin(EmailUtils, PasswordUtils, HTMLElementsUtils, PostalCodeUtils, PhoneUtils, DateUtils, AgeUtils) {}

export default Utils;
