import my_pic from '../images/temp.jpg'
import star from '../images/star.svg'
export default function Card(){
return(

    <div className="card">

        <img className='card-pic' src={my_pic}></img>
        <br></br>


            <div className='rating'>
            <img class='star' src={star}></img>
            <p className='rating-text'>5.0 </p>
            <p className='gray-text'>&nbsp;(6) USA</p>
 
            
            </div>
            <p className='rating-text'>Life lessons with Katie Zaferes
</p>

<div className='rating'>
<p className='price-span'>From $136</p>
<p className='rating-text'>/ person</p>
</div>
 

    </div>
)


}