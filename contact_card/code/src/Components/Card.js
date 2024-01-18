import './Style/Card.scss';
import {useState} from 'react';
const Card = (props)=>
{
	 
	const [detail_btn, set_detail_btn]=useState(false);
	 
	var back_style=
	{
		backgroundImage:'url(/'+props.val.Image+')'
	};
	
	const showDetails=()=>
	{
		set_detail_btn(!detail_btn);
	}
	const facebook=()=>
	{
		window.location.href=props.val.Facebook;
	}
	const whatsapp=()=>
	{
		window.location.href=props.val.Whatsapp;
	}
	const instagram=()=>
	{
		window.location.href=props.val.Instagram;
	}
	const twitter=()=>
	{
		window.location.href=props.val.Twitter;
	}
	 
	return( 
	 
			<div className="card" style={back_style}  >
				 
				{ detail_btn===true && <div className="card_details">
					<h2>Contact Details</h2>
					<table>
						<tbody>
							<tr><th>Name</th><td>{props.val.Name}</td></tr>
							<tr><th>Phone no.</th><td>{props.val.Phone_No}</td></tr>
							<tr><th>Email </th><td>{props.val.E_mail}</td></tr>
							<tr><th>Address</th><td>{props.val.Address}</td></tr>
							 
						</tbody>
					</table>
					<button type="buuton" style={{backgroundImage:'url(/facebook.png)'}}  onClick={facebook}></button>
					<button type="buuton" style={{backgroundImage:'url(/whatsapp.png)'}}  onClick={whatsapp}></button>
					<button type="buuton" style={{backgroundImage:'url(/instagram.png)'}}   onClick={instagram}></button>
					<button type="buuton"  style={{backgroundImage:'url(/twitter.png)'}}   onClick={twitter}></button>
				 </div>
				}
				 
					<button type="button" className="card_btn" onClick={showDetails}>{detail_btn===false&& <span>View Contact</span>}{detail_btn===true&& <span>View  Image</span>}</button>
			 
			</div>
		 
	 
		
	);
}
export default Card;