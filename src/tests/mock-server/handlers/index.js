import { handlers as nanniesHandlers } from './nannies';
import { handlers as loginHandlers } from './login';
export default [...nanniesHandlers, ...loginHandlers];
