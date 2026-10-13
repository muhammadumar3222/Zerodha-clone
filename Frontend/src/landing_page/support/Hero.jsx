
const Hero = () => {
  return (
    <section className='container-fluid' id="supportHero">
      <div className="p-3" id='supportWrapper'>
        <h5>Support Portal</h5>
        <a href="">Track Tickets</a>
      </div>
      <div className=" row p-5 m-3">
        <div className="col-5  ml-3">
          <h1 className='fs-4'>Search fro an answer or browse help topics to create a ticket</h1>
          <input  placeholder='Eg. how do i activate F&O'/> <br />
          <a href=""> Track account opening </a>
          <a href=""> Track segment activation </a>
          <a href=""> Intraday margins</a>
          <a href=""> Kite user manual</a>
        </div>
        <div className="col-2"></div>
        <div className="col-5">
          <h1 className='fs-4'>Featured</h1>
          <ol>
            <li><a href="">Current Takeovers and Delisting - Junary 2024</a></li>
            <li><a href="">Latest Intraday leverages - MIS & CO</a></li>
          </ol>
          
          
        </div>
      </div>
    </section>
  )
}

export default Hero