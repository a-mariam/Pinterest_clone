import React from 'react';

class Card extends React.Component<{ src: any, id:string }> {
    render() {
        let {src, id} = this.props;
        return (
            <div
                key={id}
                className={`w-fit h-fit rounded-md bg-purple-300 `}
            >
                <img key={id} id={id} data-testid={id} style={{width: 'inherit'}} alt={'image'} src={src} className={`h-fit rounded-md`}/>
            </div>
        );
    }
}

export default Card;