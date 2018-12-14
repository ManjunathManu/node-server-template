import {
  Router,
} from '../common-utils/express-utils';
import {
  reqErrorHandle as rEH,
} from '../common-utils/utils';
import {
  home,
} from './home';
import {
  apiDocumentation,
} from './api-documentation';

const router = new Router();

router.get('/', rEH(home));

router.get('/documentation', rEH(apiDocumentation));

export default router;
