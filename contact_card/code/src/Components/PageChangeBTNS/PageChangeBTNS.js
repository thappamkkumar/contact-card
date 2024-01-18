import './PageChangeBTNS.scss';  
 
function  PageChangeBTNS(props) { 
  
const setPrePage=()=>
{
	if(props.dataLimit.start>0)
	{
		var f_start = props.dataLimit.start-props.dataLimit.limit;
		props.setDataLimit({start:f_start, limit:props.dataLimit.limit});
		props.scroltop();
	}
} 
const setNextPage=()=>
{
		var f_start = props.dataLimit.start+props.dataLimit.limit;
		props.setDataLimit({start:f_start, limit:props.dataLimit.limit});
	 props.scroltop();
} 

  return (
			<div className="PageButtonContainer" >
				{ props.dataLimit.start>0&&<button type="button" onClick={setPrePage} className="recordTableDataEdit_BTN" id="prebtn">pre</button> }
				 <span className="pageNumber"> { (props.dataLimit.start+props.dataLimit.limit)/props.dataLimit.limit }/{Math.ceil(props.totalPages/props.dataLimit.limit)}</span>
				{  (props.dataLimit.start+props.dataLimit.limit)/props.dataLimit.limit<Math.ceil(props.totalPages/props.dataLimit.limit)  && <button type="button"  onClick={setNextPage}  className="recordTableDataEdit_BTN" id="nextbtn">next</button>}
			</div>
				
		 
  );
}

export default PageChangeBTNS;
