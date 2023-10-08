import 'styled-components';
import { light } from './light';

declare module 'styled-components' {
  type CustomTheme = typeof light;

  export interface DefaultTheme extends CustomTheme { }
}

