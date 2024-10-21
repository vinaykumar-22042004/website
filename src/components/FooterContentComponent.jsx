import React from 'react'
import { Link } from 'react-router-dom'
const FooterContentComponent = () => {
    return (
        <div>
            {/* -------- footer content start here ---------- */}
            <div className="container-fluid">
                <div className="row bg-dark justify-content-evenly pb-3">
                    <div className="col-md-3">
                        <h5 className='text-white'>Company Name</h5>
                        <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sequi ducimus non aspernatur!</p>
                    </div>
                    <div className="col-md-3">
                        <h5 className='text-white'>Important Links</h5>
                        <div>
                            <Link to={'/home'} class="text-white text-decoration-none" >Home</Link>
                        </div>
                        <div>
                            <Link to={'/services'} class="text-white text-decoration-none" >Services</Link>
                        </div>
                        <div>
                            <Link to={'/contact'} class="text-white text-decoration-none" >Contact Us</Link>
                        </div>
                        <div>
                            <Link to={'/about'} class="text-white text-decoration-none" >About Us</Link>
                        </div>

                    </div>
                    <div className="col-md-3">
                        <h5 className='text-white'>Address</h5>
                        <p className='text-white'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/>
                            Unde iure repudiandae culpa modi, error sint vitae molestias.<br/>                         
                            <i class="bi bi-telephone-inbound"></i>: 080-123-456-789
                        </p>
                    </div>
                </div>
            </div>
            {/* -------- footer content End here ---------- */}
        </div>
    )
}

export default FooterContentComponent