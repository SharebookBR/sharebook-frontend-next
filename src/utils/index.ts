import EmailUtils from './EmailUtils';
import PasswordUtils from './PasswordUtils';
import { Mixin } from 'ts-mixer'; // https://www.npmjs.com/package/ts-mixer

class Utils extends Mixin(EmailUtils, PasswordUtils) {}

export default Utils;
