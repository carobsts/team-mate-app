import { FC } from 'react'; 
import CardItem from '../../../common/cardItem/CardItem';
import './styles.css';

interface ResultItemProps {
    item: any;
    style: any
};

const ResultItem: FC<ResultItemProps> = (
    props: ResultItemProps
) => {

    const {
        item,
        style
    } = props;

    return (
        <CardItem
        styles={{ ...style, borderTop: `6px solid #478610` }}>
            <div className='ResultsComponent__container--item'>
                <div>
                    <div> { item.date } </div>
                </div>
                <div>
                    <div>
                        Taladro Fem
                    </div>
                    <div>
                        { item.result }
                    </div>
                    <div>
                        { item.contra }
                    </div>
                </div>
            </div>
        </CardItem>
    )
};

export default ResultItem;