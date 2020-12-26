import React, { Fragment } from 'react'
import styled from '@emotion/styled';

const Seccion = styled.div`
    font-weight: bold;
`

function Error({mensaje}) {
    return (
        <Fragment>
            <Seccion>
                <p className="my-3 p-4 text-center alert alert-primary">{mensaje}</p>
            </Seccion>
        </Fragment>
    )
}

export default Error
