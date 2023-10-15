import styled from "styled-components";
import { Icon } from '../../../../components';

const SpecialPanelContainer = ({className, publishedAt, editButton}) => {

return (<div className={className}>
                    <div className="published-at">
                        <Icon
                            icon_id="fa-calendar-o"
                            size="18px"
                            margin="0 6px 0 0"
                            onClick={()=>{}}/>
                        {publishedAt}
                    </div>
                    <div className="buttons">
                        {editButton}
                        <Icon icon_id="fa-trash-o" size="21px" onClick={()=>{}}/>
                    </div>
                </div>);
}

export const SpecialPanel = styled (SpecialPanelContainer)`
    display: flex;
    justify-content: space-between;
    margin: ${({margin})=>margin};

    & .buttons {
        display: flex;
    }

    & i {
        top: -1px;
        posision: relative;
    }

    & .published-at{
        display: flex;
        font-size: 18px;
    }

`
