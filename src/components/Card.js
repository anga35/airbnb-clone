

export default function Card(props){
    // console.log(props)
    let status
    if(props.openSpot===0){
        status='Sold out'
    }
    else if(props.onlineStatus===true){
        status='Online'
    }


    // console.log(img)
return(

    <div className="card">

        <div className='card-pic-container'>
        <img className='card-pic' src={`../images/${props.img}`}></img>
        <div className='status-card'>
            {status && <p className='status-text'>{status}</p>}

        </div>
        </div>

        


            <div className='rating'>
            <img className='star' src={props.star} />
            <p className='rating-text'>{props.rating} </p>
            <p className='gray-text'>&nbsp;({props.reviews})</p>
            <p className='gray-text'>&nbsp;{props.country}</p>
            
            </div>
            <p className='rating-text'>{props.card_title}
</p>

<div className='rating'>
<p className='price-span'>From ${props.price}</p>
<p className='rating-text'>/ person</p>
</div>
 

    </div>
)


}