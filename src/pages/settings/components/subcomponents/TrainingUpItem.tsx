import { Edit } from '@mui/icons-material';
import { FC } from 'react'; 
import CardItem from '../../../../common/cardItem/CardItem';
import { StatusCodeColor, StatusColor } from '../../../../utils/statusColor.enum';
import './styles.css';

interface TrainingUpItemProps {
    item: {
        title: string,
        date: string,
        statusColor: StatusColor
    },
    editMode?: boolean;
    styles?: any;
}; 

const TrainingUpItem: FC<TrainingUpItemProps> = (
    props: TrainingUpItemProps
) => {

    const { item, editMode, styles } = props;

    function getColor(color: string) {
        switch (color) {
            case StatusColor.DONE:
                return StatusCodeColor.DONE; 
            case StatusColor.TO_BE_DONE:
                return StatusCodeColor.TO_BE_DONE;
            case StatusColor.SUSPENDED:
                return StatusCodeColor.SUSPENDED; 
        }
    };

    return (
        <CardItem styles={{ ...styles, borderLeft: `6px solid ${getColor(item.statusColor)}` }}>
            <div className='TrainingUpItemComponent__container--info'>
                <h3> { item.title } </h3>
                <p> { item.date } </p>
                <div style={{ backgroundColor: getColor(item.statusColor) }}>
                    <p> { item.statusColor } </p>
                </div>
            </div>
            { editMode &&
            <div className='TrainingUpItemComponent__container--editIcon'>
                <Edit/>
            </div> }
        </CardItem>
    )
};

export default TrainingUpItem;