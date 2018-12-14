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
  authenticateRequest,
} from '../middlewares/authenticateRequest';


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

router.get('/documentation', authenticateRequest, rEH(apiDocumentation));

router.post('/login', preLogin, reqValidation, rEH(login));

export default router;
