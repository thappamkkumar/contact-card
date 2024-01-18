import './Style/Login.scss';
import {useDispatch} from 'react-redux';
import { msgactions} from '../Store/Store';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
const Login=()=>
{
	const navigate=useNavigate();
	const dispatch=useDispatch();
	const submitLoginForm=(event)=>
	{
		event.preventDefault();
		var i=event.target.username.value;
		var p=event.target.password.value;
		
		var d=JSON.stringify({id:i, password:p}); 
		const url='http://localhost/contact_card/login.php ';
		axios.post(url, d).then((response)=>{
			if(response.data.status===true)
			{
				 
				sessionStorage.setItem('userid',i);
				sessionStorage.setItem('image',response.data.image);
				
				dispatch(msgactions.changeHeading("Message"));
				dispatch(msgactions.changeMsg("Successfully login into your account"));
				dispatch(msgactions.changeStatus());
				navigate("/");
				 
			}
			else
			{
				 
				dispatch(msgactions.changeHeading("Message"));
				dispatch(msgactions.changeMsg("Enable login into your account"));
				dispatch(msgactions.changeStatus());
			}
		});
		
	}
	return(
		<main className="login_container">
			 <section className="login">
				<img src="hello.png" alt="wellcome" />
				<h2>WELCOME BACK</h2>
			 </section>
			 <section className="login">
				<div className="sub_login">
					<img src="login.png" alt="login" className="login_logo"/>
					<form onSubmit={submitLoginForm}>
						<div className="input_container">
							
							<input type="text" id="username" name="username" required/>
							<label htmlFor="username">Username</label>
							
						</div>
						<div className="input_container">
							
							<input type="password" id="password" name="password" required/>
							<label htmlFor="password">Password</label>

						</div>
						 

						<button type="submit" className="login_btn" >LOGIN</button>
						 
						
					</form>
				</div>
			 </section>
		</main>
	);
}
export default Login;