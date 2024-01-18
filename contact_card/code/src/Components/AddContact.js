import './Style/Add_Contact.scss'; 

import {useRef, useEffect} from 'react';
import axios from 'axios';


import {useDispatch} from 'react-redux';
import { msgactions} from '../Store/Store';

const Add_Contact=()=>
{
	 const dispatch=useDispatch();
	 
	const name=useRef();
	const phone=useRef();
	const email=useRef();
	const address=useRef();
	const facebook=useRef();
	const instagram=useRef();
	const twitter=useRef();
	const whatsapp=useRef();
	const image=useRef();
	
	const emptyfield=()=>
	{
		name.current.value="";
		phone.current.value=null;
		email.current.value="";
		address.current.value="";
		facebook.current.value="";
		instagram.current.value="";
		twitter.current.value="";
		whatsapp.current.value="";
		image.current.value=null;
	}
	useEffect(()=>{ emptyfield();		
						},[]);
						
	const upload_contact=(event)=>
	{
		event.preventDefault();
		  													
		 
		 
		const formdata2=new FormData();
		formdata2.append('file[]', event.target.image.files[0]);
		formdata2.append('name', event.target.name.value);
		formdata2.append('phone', event.target.phone.value);
		formdata2.append('email', event.target.email.value);
		formdata2.append('address', event.target.address.value);
		formdata2.append('facebook', event.target.facebook.value);
		formdata2.append('instagram', event.target.instagram.value);
		formdata2.append('twitter', event.target.twitter.value);
		formdata2.append('whatsapp', event.target.whatsapp.value);
		formdata2.append('userID', sessionStorage.getItem('userid'));
		 
		const url2='http://localhost/contact_card/upload_contact.php ';
		axios.post(url2,formdata2 ).then( (response)=>{
												if(response.data.status===true){
																		emptyfield();
																		 
																		dispatch(msgactions.changeHeading("Message"));
																		dispatch(msgactions.changeMsg("Successfully upload contact."));
																		dispatch(msgactions.changeStatus());
																		}
																		else
																		{
																			dispatch(msgactions.changeHeading("Message"));
																			dispatch(msgactions.changeMsg("Enable to upload contact."));
																			dispatch(msgactions.changeStatus());
																									} 
										 }) ;
															
	}
	
	return(
		<main className="add_contact_conatainer">
			 <section className="add_contact">
				<form onSubmit={upload_contact} >
					<div className="add_contact_input_container">
						<label>Name</label>
						<input type="text"   ref={name}  name="name" id="name" className="input1" required />
					</div>
					
					<div className="add_contact_input_container">
						<label >Phone</label>
						<input type="number"  ref={phone}  name="phone" id="phone" className="input1" required />
					</div>
					
					<div className="add_contact_input_container">
						<label  >E-mail</label>
						<input type="email"  ref={email}  name="email" id="email" className="input1" />
					</div>
					
					<div className="add_contact_input_container">
						<label >Address</label> 
						<textarea rows="1"  ref={address}  name="address" id="address"  className="input1" ></ textarea>
					</div>
					<div className="add_contact_input_container">
						<label >Image</label> 
						<input type="file"  ref={image}     name="image" id="image" className="input1" />
					</div>
					<div className="add_contact_input_container">
						<label  >Facebook id link</label>
						<input type="url"  ref={facebook}  name="facbook" id="facebook" className="input1" />
					</div>
					
					<div className="add_contact_input_container">
						<label >Whatsapp number</label>
						<input type="text"  ref={whatsapp}  name="whatsapp" id="whatsapp"  className="input1" />
					</div>
					
					<div className="add_contact_input_container">
						<label  >Instagram id link</label>
						<input type="url"  ref={instagram}  name="instagram" id="instagram"  className="input1" />
					</div>
					
					<div className="add_contact_input_container">
						<label  >Twitter id link</label>
						<input type="url"  ref={twitter}  name="twitter" id="twitter"  className="input1" />
					</div>
					<div className="add_contact_input_container">
						<button type="submit" className="add_contact_btn">Upload</button>
					</div>
					
				</form>
			 </section>
		</main>
	);
}
export default Add_Contact;