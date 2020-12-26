import React, { Fragment } from 'react';
import styled from '@emotion/styled';

const Title = styled.div`
    h3{
        margin: 20px auto 10px ;
        font-weight: bold;
    }
`

function Header({ title }) {
    return (
        <Fragment>
            <Title><h3>{title}</h3></Title>
        </Fragment>
    )
}

export default Header;
