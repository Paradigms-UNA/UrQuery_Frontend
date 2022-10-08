import React, { useState } from 'react'

export const ResultArea = ({ res }) => {

    const [data, setData] = useState(res);

    return (
        <div className='row'>
            <h3> Result Area </h3>
            <div className='col d-flex flex-row align-items-center'>
                <section className='result-area'>
                    <p className='p-3 m-3'>{data}</p>
                </section>
            </div>
        </div>
    )
}
