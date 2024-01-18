import './Style/Logout.scss';

import {useDispatch} from 'react-redux';
import {msgactions} from '../Store/Store';
import {useNavigate} from 'react-router-dom';

const Logout=()=>
{
	const navigate=useNavigate();
	const dispatch=useDispatch();
	
	const logout=()=>
	{	
		if(sessionStorage.getItem('userid')!==null   )
		{
			sessionStorage.removeItem('userid');
			sessionStorage.removeItem('image');
		}
		 
		dispatch(msgactions.changeHeading("Message"));
		dispatch(msgactions.changeMsg("Successfully logout from your account"));
		dispatch(msgactions.changeStatus());
		navigate("/");
	}
	return(
		<main className="logout_container">
			<section className="logout">
				<h1>Logout</h1>
				<p>Click logout to confirm to exit. </p>
				<button type="button" onClick={logout}>Logout</button>
			</section>
		</main>
	);
}
export default Logout;