import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import UsersItem from "./UsersItem";
import {getUsers} from "../../redux/UsersReducer";
import styled from "styled-components";
import Slider from "../Gallery/Slider/Slider";

const StyledUsers = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 32px;
  padding: 20px;
  background-color: #fffeb4;
  justify-content: center;
`
const Users = () => {
    const dispatch = useDispatch();
    const getUsersThunk = useCallback(() => dispatch(getUsers()), [dispatch]);
    const users = useSelector(state => state.usersState.users);

    useEffect(() => {
        getUsersThunk()
    }, [getUsersThunk]);
    return (
        <StyledUsers>
            <h2>Swipe and Choose user</h2>
            <Slider>{users.length ? users.map(i => <UsersItem key={i.id} {...i}/>) : "LOADING..."}</Slider>
        </StyledUsers>
    )
}
export default Users;