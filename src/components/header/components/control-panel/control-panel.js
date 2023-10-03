import {Link, useNavigate} from 'react-router-dom'
import {Icon} from '../../../../components'
import styled from 'styled-components'

const RightAligned = styled.div`
    display:flex;
    justify-content:flex-end;
`

const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 32px;
    border: 1px solid #000;
    background-color: #eee;
`
const StyledButton = styled.div`
    &:hover {
        cursor: pointer;
    }
`

const ControlPanelContainer = ({className}) => {
    const navigate = useNavigate();
    return (
        <div className={className}>
            <RightAligned>
                <StyledLink to="/login">Войти</StyledLink>
            </RightAligned>
            <RightAligned>
                <StyledButton  onClick={()=>navigate(-1)}>
                    <Icon icon_id="fa-backward" margin="10px 0 0 0" />
                </StyledButton>
                <Link to="/post"><Icon icon_id="fa-file-text-o" margin="10px 0 0 16px" /></Link>
                <Link to="/users"><Icon icon_id="fa-users" margin="10px 0 0 16px"/></Link>
            </RightAligned>
        </div>
    );
}



export const ControlPanel = styled(ControlPanelContainer)``;
