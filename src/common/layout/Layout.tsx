import { FC } from 'react'; 
import './Layout.css';

interface LayoutProps {
    children: any
};

const Layout: FC<LayoutProps> = (props: LayoutProps) => {
    const {
        children
    } = props;
    return (
        <section className='Layout__container--wrapper'>
            { children }
        </section>
    )
};

export default Layout;