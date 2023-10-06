import {Link, useNavigate} from 'react-router-dom'
import {Icon, Button} from '../../../../components'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {ROLE}   from '../../../../bff/constants'
import {selectUserRole, selectUserLogin, selectUserSession} from '../../../../selectors'
import {logout} from '../../../../actions'


const RightAligned = styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:center;
`



const StyledBackIcon = styled.div`
    &:hover {
        cursor: pointer;
    }
`
const StyledIcon = styled.div`

    &:hover {
        cursor: pointer;
    }
`

const UserName = styled.div`
    font-size: 18px;
    font-weight: bold;
`

const ControlPanelContainer = ({className}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const roleId = useSelector(selectUserRole);
    const login = useSelector(selectUserLogin);
    const session = useSelector(selectUserSession);

    console.log(`role = ${roleId} `);

    return (
        <div className={className}>
            <RightAligned>

                    { (roleId === undefined || roleId === ROLE.GUEST)  ?
                        ( <Button> <Link to="/login">Войти</Link> </Button>) :

                        (
                            <>
                                <UserName> {login} </UserName>
                                <StyledIcon>
                                    <Icon
                                        icon_id="fa-sign-out"
                                        margin="0 0 0 10px"
                                        onClick={() => dispatch(logout(session))}
                                    />
                                </StyledIcon>
                            </>
                        ) }

            </RightAligned>
            <RightAligned>
                <StyledBackIcon  onClick={()=>navigate(-1)}>
                    <Icon icon_id="fa-backward" margin="10px 0 0 0" />
                </StyledBackIcon>
                <Link to="/post"><Icon icon_id="fa-file-text-o" margin="10px 0 0 16px" /></Link>
                <Link to="/users"><Icon icon_id="fa-users" margin="10px 0 0 16px"/></Link>
            </RightAligned>
        </div>
    );
}

export const ControlPanel = styled(ControlPanelContainer)``;
