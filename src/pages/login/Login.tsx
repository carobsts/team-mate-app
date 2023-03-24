import { FC } from 'react';
import { browserTitles } from '../../common/routes/browserTitles';
import useTitle from '../../hooks/useTitle';

interface LoginProps {}; 

const Login: FC<LoginProps> = () => {
    useTitle(browserTitles.login.root);
    return (
        <div>
            LOGIN
        </div>
    )
};

export default Login;