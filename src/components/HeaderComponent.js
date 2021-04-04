
import { Jumbotron } from 'reactstrap';
import React from 'react'

const HeaderComponent = ({title, description}) => {
    return (
        <Jumbotron>
           
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                </div>
            
        </Jumbotron>

    )
}

export default HeaderComponent
