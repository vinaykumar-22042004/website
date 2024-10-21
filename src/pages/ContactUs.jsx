import React from 'react'
import TitleComponent from '../components/TitleComponent'
import ContentComponent from '../components/ContentComponent'
import FooterContentComponent from '../components/FooterContentComponent'
const ContactUs = () => {
  return (
    <div>
      <TitleComponent title="Contact Page"></TitleComponent>
      <div className="container-fluid">
        <div className="row justify-content-evenly pb-5 " style={{ backgroundColor: '#f1f1f1' }}>
          <div className="col-md-5">
          <div className="mb-3">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="fullname" placeholder="Full Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="phonenumber" className="form-label">Phone Number</label>
              <input type="text" className="form-control" id="phonenumber" placeholder="Phone" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div>
              <button className='btn btn-primary me-2' type='submit'>Submit</button>
              <button className='btn btn-danger' type='reset'>Reset</button>
            </div>
          </div>
          <div className="col-md-5">
            <h5 className='text-dark'>Address</h5>
            <p className='text-dark'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/>
            Unde iure repudiandae culpa modi, error sint vitae molestias.<br/>
              <i class="bi bi-telephone-inbound"></i>: 080-123-456-789
            </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30773484.55170563!2d61.0245165611659!3d19.69009515037612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1729438629847!5m2!1sen!2sin"width="500" height="250" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <FooterContentComponent></FooterContentComponent>
    </div>
  )
}

export default ContactUs