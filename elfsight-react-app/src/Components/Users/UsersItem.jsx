import React from "react";

import styled from "styled-components";
import {selectUser} from "../../redux/UsersReducer";
import {useDispatch, useSelector} from "react-redux";

const StyledUserItem = styled.div`
  display: block;
  min-width: 180px;
  margin: 20px;
  padding: 20px;
  background-color: #fff4a3;
  position:relative;
  cursor: pointer;
  transition: all ease 0.25s;
  &:hover{
    background-color: #aeffac;
    transform: translateY(-7%);
  }
  &:focus, &:active, &.active{ 
    background-color: #9fff9c;
    transform: translateY(-2%);
  }
    
  & > div:first-of-type{
    font-weight: 700;
    font-size: 1.1rem;
  }
`


const UsersItem = (props) => {
    const dispatch = useDispatch();
    const selUser = useSelector(state => state.usersState.selUser);
    return (
        <StyledUserItem  className={selUser === props.id ? 'active' : null}
                        onClick={() => dispatch(selectUser(props.id))}>
            <div>{props.name}</div>
            <div>{props.username}</div>
            <div>{props.address.city}</div>
            <div>{props.company.name}</div>
        </StyledUserItem>
    );
}

export default UsersItem;
