import {
  Router,
} from '../common-utils/express-utils';
import {
  home,
} from './home';
import {
  apiDocumentation,
} from './api-documentation';

const router = new Router();

router.get('/', home);

router.get('/documentation', apiDocumentation);

export default router;
