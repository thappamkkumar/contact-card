import './Style/Login.scss';
import {useDispatch} from 'react-redux';
import { msgactions} from '../Store/Store';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
const Login=()=>
{
	const navigate=useNavigate();
	const dispatch=useDispatch();
	const submitRegisterForm=(event)=>
	{
		event.preventDefault();
		 
		const formdata2=new FormData();
		formdata2.append('file[]', event.target.image.files[0]);
		formdata2.append('username', event.target.username.value);
		formdata2.append('password', event.target.password.value);
		
		const url='http://localhost/contact_card/register.php ';
		axios.post(url, formdata2).then((response)=>{
			if(response.data.status===true)
			{
				  
				dispatch(msgactions.changeHeading("Message"));
				dispatch(msgactions.changeMsg(response.data.message));
				dispatch(msgactions.changeStatus());
				 navigate('/');
				 
			}
			else
			{
				 
				dispatch(msgactions.changeHeading("Message"));
				dispatch(msgactions.changeMsg(response.data.message));
				dispatch(msgactions.changeStatus());
			}
		});
		
	}
	return(
		<main className="login_container">
			 <section className="login">
				<img src="hello.png" alt="wellcome" />
				<h2>WELCOME</h2>
			 </section>
			 <section className="login">
				<div className="sub_login">
					<img src="login.png" alt="login" className="login_logo"/>
					<form onSubmit={submitRegisterForm}>
						<div className="input_container">
							
							<input type="text" id="registerusername" name="username" required/>
							<label htmlFor="registerusername">Username</label>
							
						</div>
						<div className="input_container">
							
							<input type="password" id="registerpassword" name="password" required/>
							<label htmlFor="registerpassword">Password</label>

						</div>
						<div className="input_container">
							
							<input type="file" id="registerimage" name="image" required/>
							<label htmlFor="registerimage">Image</label>

						</div>

						<button type="submit" className="login_btn" >LOGIN</button>
						 
						
					</form>
				</div>
			 </section>
		</main>
	);
}
export default Login;