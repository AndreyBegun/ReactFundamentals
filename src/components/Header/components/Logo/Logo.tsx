import * as React from 'react';
import logo from '../../../../assets/logo.svg';
import { LOGO } from 'src/constants';

const Logo: React.FC = () => (
	<img src={logo} alt={LOGO} width='110' height='48' />
);

export default Logo;
