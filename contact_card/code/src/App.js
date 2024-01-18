import './App.css';  
import SiteHeader from './SiteHeader/SiteHeader';
import SiteNavigation from './SiteNavigation/SiteNavigation';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Contact from './Components/Contact';
import AddContact from './Components/AddContact';
import Logout from './Components/Logout';
import MessageBox from './MessageBox/MessageBox';

import { Routes, Route} from 'react-router-dom';

import {useSelector} from 'react-redux';
 

function App() {
	const msgboxStatus=useSelector((state)=>state.msg.status);
	 
  return (
   <>
		
			<SiteHeader />
			<SiteNavigation />
			
			<Routes>
					 <Route path="/" element={<Home />} />
					 <Route path="/login" element={<Login />} />
					 <Route path="/register" element={<Register />} />
					 <Route path="/contact" element={<Contact />} />
					 <Route path="/add_contact" element={<AddContact />} />
					  <Route path="/logout" element={<Logout />} />
			</Routes>
			{msgboxStatus===true&&<MessageBox />}
		
		 
	</>
  );
}

export default App;
