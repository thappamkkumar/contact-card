import './MessageBox.scss';

import {useSelector, useDispatch} from 'react-redux';
import {msgactions} from '../Store/Store';

const MessageBox =()=>
{
	const heading=useSelector((state)=>state.msg.heading);
	const message=useSelector((state)=>state.msg.message); 
	const dispatch=useDispatch();
	const hideBox=()=>
	{
		 
		dispatch(msgactions.changeStatus());
	}
	return(
		<main className="messageboxcontainer">
			<section className="messagebox">
				<h1>{heading}</h1>
				<p>{message}</p>
				<button type="button" onClick={hideBox}>ok</button>
			</section>
		</main>
	);
}
export default MessageBox;