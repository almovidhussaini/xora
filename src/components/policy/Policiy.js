import React from 'react';

const Policiy = () => {
    return (
        <section id="tnc" className=" contact-bg" style={{backgroundColor: '#080B2A', color: 'white', marginBottom:'-3rem', paddingBottom:'-4rem', paddingTop:'2rem', height:'100vh'}}>
        <div className="container">
          {/* section title */}
          <div className="row  justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-70">
             
                <h2 className="title">
                  <span> Privacy & Policy</span>
                </h2>
              </div>
            </div>
          </div>
  
          {/* secction info */}
          <div className="contact-info-wrap">
            <div className=" col-lg-12 ">
              <strong>- Information Collection: </strong>
              We collect personal information such as name, email address, wallet address, and other necessary data for the token pre-sale.
              <br />
              <br />
              <strong>- Use of Information: </strong>
              Your information is used to facilitate the token sale, ensure regulatory compliance, and provide customer support. We do not sell your personal data to third parties.
              <br />
              <br />
              <strong>- Security: </strong>
              We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or loss.
              <br />
              <br />
              <strong>- Data Retention: </strong>
              We retain your information as long as necessary for legal and regulatory compliance or until you request its deletion.
              <br />
              <br />
              <strong>- Third-Party Disclosure: </strong>
              Your data may be shared with legal or regulatory authorities if required by law.
              <br />
              <br />
              <strong>- User Rights: </strong>
             You have the right to access, update, or delete your personal data by contacting us at
  crnt369@gmail.com
              <br />
              <br />
           
            </div>
          </div>
  
          {/* section form */}
          {/* <ContactOneForm /> */}
        </div>
      </section>
    );
}

export default Policiy;