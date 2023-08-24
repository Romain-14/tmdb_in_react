import { Fragment } from 'react'

function Detail({companies}) {

    function checkCompany(company){
        if(company.homepage)
            return (
                <li>
                    <a href={company.homepage} target="_blank" rel="noreferrer">{company.name}
                    </a>
                </li>
            )
        return <li>{company.name}</li>
    }

    return (
        <aside>
            <ul>
            {   companies.map(company => (
                    <Fragment key={company.id}>
                        {checkCompany(company)}
                    </Fragment>)
                )
            }
            </ul>
        </aside>
    )
}

export default Detail