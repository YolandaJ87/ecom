import React, { Component } from 'react';

class Details extends Component{
    render (){
        const {title, links} = this.props;
        return (
            <div className="detail">  
                <div className="details__tittle">{title}</div>
                <div className="details__links">
                    {links.map(link => {
                        return (<a key={link._id} onClick={link.onClick} className="details_link"> {linkl.title} </a>)
                    })}
                </div>
            </div>
        )
    };
}   

export default Details;