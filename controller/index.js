import {
  Router,
} from '../common-utils/express-utils';
import {
  home,
} from './home';

const router = new Router();

router.get('/', home);

export default router;
