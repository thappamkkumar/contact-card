import './Style/Contact.scss';
import Card from './Card';
import {useState, useEffect} from 'react';
import axios from 'axios';
import PageChangeBTNS from './PageChangeBTNS/PageChangeBTNS';


import {useSelector, useDispatch} from 'react-redux';
import {cardactions} from '../Store/Store';


const Contact=()=>
{
	const cardVal=useSelector((state)=>state.card.cards); 
	const dispatch=useDispatch();
	 
	const [count, setCount]=useState(0);
	const [limits, setLimits]=useState({start:0, limit:12});
	
	const setCardVal=(serverdata)=>
	{
		dispatch(cardactions.setCard(serverdata));
	}
	
	useEffect(()=>{
		const url2='http://localhost/contact_card/count_contact.php ';
		 
		var val2=JSON.stringify({username:sessionStorage.getItem('userid')});
		axios.post(url2,val2).then((response)=>{setCount(response.data);});
	},[]);
	
	useEffect(()=>{
		 
		const url='http://localhost/contact_card/get_contact.php ';
		var val=JSON.stringify({username:sessionStorage.getItem('userid'), start:limits.start, limits:limits.limit});
		axios.post(url,val).then((response)=>{setCardVal(response.data);});
		
		 
		
	},
	[limits]);
	
	const scrollTop=()=>
	{
		 window.scrollTo({top:0, behavior:'smooth'});
	 
	}
	return(
		<main className="contactContainer">
			{
				  cardVal.length>0 && cardVal.map((cards,index)=>{
																	return(
																			 <div className="contact_card" key={index}>
																				<Card val={cards} /> 
																			</div>
																			);
																}
									)
				
			}	
		
			{  cardVal.length>0&&<PageChangeBTNS  scroltop={scrollTop} totalPages={count}  dataLimit={limits} setDataLimit={setLimits}/>}
			 
			  
		</main>
	);
}
export default Contact;