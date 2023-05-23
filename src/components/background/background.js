import './background.css';

function BackGround() {
    return (

        <div>
        //floating pyramid 
        <div className='container'>
        <div className="pyramid">
        <div className="base"></div>
        <div className="side one"></div>
        <div className="side two"></div>
        <div className="side three"></div>
        <div className="side four"></div>
        <div className="spin"></div> 
        </div>
        </div>

        //grid lines
     <section className="grid-container">
        <div className="grid-line"></div>
    	<div className="grid-line"></div>
	    <div className="grid-line"></div>
	    <div className="grid-line"></div>
	    <div className="grid-line"></div> 
	    <div className="grid-line"></div>
	    <div className="grid-line"></div>
	    <div className="grid-line"></div>
	    <div className="grid-line"></div>
	    <div className="grid-line"></div>
	    <div className="grid-line"></div>
     </section>
     </div>
    );
  }
  
  export default BackGround;