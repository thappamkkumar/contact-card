import './Style/Home.scss';
import Card from './Card';  

const Home=()=>
{
	var demoData=[
								{Name:'Palak', Phone_No:98565373, E_mail:'Palak@gmail.com', Address:'xyz', Facebook:'http://www.facebook.com',Whatsapp:'http://www.whatsapp.com', Instagram:'http://www.instagram.com', Twitter:'http://www.twitter.com', Image:'profile40.jpg'},
								{Name:'Jasmine', Phone_No:98565373, E_mail:'Jasmine@gmail.com', Address:'xyz', Facebook:'http://www.facebook.com',Whatsapp:'http://www.whatsapp.com', Instagram:'http://www.instagram.com', Twitter:'http://www.twitter.com', Image:'profile30.jpg'},
								{Name:'Mohamad saif', Phone_No:98565373, E_mail:'Mohamad_saif@gmail.com', Address:'xyz', Facebook:'http://www.facebook.com',Whatsapp:'http://www.whatsapp.com', Instagram:'http://www.instagram.com', Twitter:'http://www.twitter.com', Image:'profile41.jpg'}
							];
	 
	
	return(
		<>
			<main className="homeContainer">
				 <section className="subHomeContainer1">
					<div>
						<h1>CONTACTS </h1>
						<p>It is a  platform for storing and retreving contact of peoples. Here you can add contracts of user and it will converted into cards to display contacts for viewers.</p>
						 <p>It is just a project for  practice .  There is no important motive to create the project</p>
						 <p>It is design to practice the concept of HTML, CSS (SASS/SCSS), JAVASCRIPT (REACT JS), PHP (API)</p>
					</div>
				 </section>
				 <section  className="subHomeContainer2">
					<div className="home_card_container">
							 <div className="sub_home_card_container">
								 <Card val={demoData[0]} /> 
							</div>
							<div className="sub_home_card_container">
								 <Card  val={demoData[1]}/> 
							</div>
							<div className="sub_home_card_container">
								 <Card  val={demoData[2]} /> 
							</div>
							 
					</div>
				 </section>
			</main>
			<div   style={{  padding:'30px 10px 30px 10px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',}}>
				<h2>Developer Contact</h2> 
				<p style={{padding:'10px 10px 10px 10px', display:'flex',  flexWrap:'wrap', justifyContent:'center', alignItems:'center',}}>
					<a href="tel:6005819576" style={{textDecoration:'none',}}>6005819576  </a>, <a  href="mailto:thappamkkumar@gmail.com" style={{textDecoration:'none', paddingLeft:'10px',}}> thappamkkumar@gmail.com</a>
				</p>
			</div>
		</>
	);
}
export default Home;