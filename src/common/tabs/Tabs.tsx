import { FC, useState } from 'react';
import './Tabs.css'; 

interface TabsProps {
    data: any[]
}; 

const Tabs: FC<TabsProps> = (props: TabsProps) => {
    const {
        data
    } = props;

    const [ index, setIndex ] = useState<number>(0); 

    return (
        <>
            <section className='TabsComponent__container--wrapper'>
                { data.map((tab, idx) => 
                    <div 
                    onClick={() => setIndex(idx)}
                    // eslint-disable-next-line
                    className={`TabsComponent__item ${index == idx ? '--active' : '--inactive'}`}>
                        <p> {tab.name} </p>
                    </div>
                )}
            </section>
            <section>
                { data[index].Component }
            </section>
        </>
    )
};

export default Tabs;