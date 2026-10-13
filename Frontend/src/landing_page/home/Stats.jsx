import React from 'react'

const Stats = () => {
  return (
    <div className='container'>
      <div className='row p-3'>
        <div className="col-6 p-5">
          <h1 className='fs-2 mb-5'>Trust with confidence</h1>
          <h2 className='fs-4'>Customer-frist always</h2>
          <p className='text-muted'>Thats's whayy 1.3+ crore people trust Zerodha with Rs3.5+ lakh crores worth of equity investments.</p>
          <h2 className='fs-4'>No spam or gimmicks</h2>
          <p className='text-muted'>No gimmicks, spam "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
          <h2 className='fs-4'>The Zerodha universe</h2>
          <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services. specific to your needs.</p>
          <h2 className='fs-4'>Do better with money</h2>
          <p className='text-muted'>With initiatives like Nudge and kill switch, we don't just facilltate transactions, but actively help you od better with your money</p>
        </div>
        <div className="col-6">
          <img src="media/images/ecosystem.png" alt="" style={{width: "85%"}} />
          <div className='text-center'>
            <a className='mx-5' href="" style={{textDecoration: "none"}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
            <a href="" style={{textDecoration: "none"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats;