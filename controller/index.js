import {
  Router,
} from '../common-utils/express-utils';
import {
  reqErrorHandle as rEH,
} from '../common-utils/utils';
import {
  reqValidation,
} from './validationCatcher';
import {
  home,
} from './home';
import {
  apiDocumentation,
} from './api-documentation';
import {
  preLogin,
  login,
} from './login';

const router = new Router();

router.get('/', rEH(home));

router.get('/documentation', rEH(apiDocumentation));

router.post('/login', preLogin, reqValidation, rEH(login));

export default router;
