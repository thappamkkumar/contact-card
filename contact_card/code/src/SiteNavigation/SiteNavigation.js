import './SiteNavigation.scss';  

  import { NavLink } from 'react-router-dom';
	const SiteNavigation=()=>
	{
		var Pimage="";
		var username=""; 
		if(sessionStorage.getItem('userid')!==null   )
		{
			username=sessionStorage.getItem('userid');
			Pimage=sessionStorage.getItem('image');
		}
		else
		{
			username="userName";
			Pimage="profile_icon.png";
		}
		var profileimage="userProfileImage/"+Pimage;
		 
		 
		return (
		
			<nav className="sitenavigation_container">
				<div className="useridcontainer">
					<img src={profileimage}  alt={"profile"} />
					<h3>{username}</h3>
				</div>
				<div className="sitenavigation">
						<NavLink to="/"  className={({isActive})=>isActive ? "activeLink " : "link"}>Home</NavLink>
						{ sessionStorage.getItem('userid')===null  && <NavLink to="/login"  className={({isActive})=>isActive ? "activeLink " : "link"}>Login</NavLink> }
						{ sessionStorage.getItem('userid')===null  && <NavLink to="/register"  className={({isActive})=>isActive ? "activeLink " : "link"}>Register</NavLink> }
						{ sessionStorage.getItem('userid')!==null  && <NavLink to="/contact"  className={({isActive})=>isActive ? "activeLink " : "link"}>Contacts</NavLink>}
						{ sessionStorage.getItem('userid')!==null  &&  <NavLink to="/add_contact"  className={({isActive})=>isActive ? "activeLink " : "link"}>Add Contact</NavLink>}
						{ sessionStorage.getItem('userid')!==null  && <NavLink to="/logout"  className={({isActive})=>isActive ? "activeLink " : "link"}>Logout</NavLink>}
				
				</div>
			</nav>
		);
	}
	export default SiteNavigation;