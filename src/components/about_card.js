import React from 'react'
import Style from './about_card.module.css'

export default props => {

    if(props.typeCard.localeCompare(".Bclass")) {
        return (
            <div className={Style.aclass}>
                <div className={Style.colForm25}>
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
                <div className={Style.colForm75}>
                    <img src={props.src} alt="" />
                </div>
            </div>
        )
    } else if(props.typeCard.localeCompare(".Aclass")){
        return (
            <div className={Style.bclass}>
                <div className={Style.colForm75}>
                    <img src={props.src} alt="" />
                </div>
                <div className={Style.colForm25}>
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>                
            </div>
        )
    } else {
        return <div>Error</div>
    }
}

            
          
