import { handlers as nanniesHandlers } from './nannies';
import { handlers as loginHandlers } from './login';
import { handlers as signUpHandlers } from './sign-up';
export default [...nanniesHandlers, ...loginHandlers, ...signUpHandlers];
