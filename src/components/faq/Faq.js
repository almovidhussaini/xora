import React, { useState } from 'react';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
          question: 'What is Xora?',
          answer: 'Xora is a secure and user-friendly BTC staking platform that allows users to earn rewards by staking their Bitcoin. By holding and staking BTC on Xora, users can passively grow their crypto holdings with competitive returns.'
        },
        {
          question: 'How does BTC staking work on Xora?',
          answer: 'Detailed explanation of how BTC staking works on the Xora platform.'
        },
        {
          question: 'Who can use Xora?',
          answer: 'Information about who is eligible to use the Xora platform.'
        },
        {
          question: 'How do I start staking BTC on Xora?',
          answer: 'Step-by-step guide on how to begin staking Bitcoin on Xora.'
        }
      ];

      const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
      };

    return (
        <div style={{ backgroundColor: "#080B2A" , padding:'7rem 0 0 0'}} id='faq'>
           <h1 className='text-white text-center'>FAQ</h1>
           <p className='text-white text-center mb-5'>The largest and unique Super rare Xora marketplace For crypto-collectibles </p>

           <div 
      className="container-fluid" 
      style={{ 
         
        minHeight: 'fit-content', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}
    >
      <div className="container">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="card mb-3"
            style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)", // 5% opacity white
                border: "2px solid transparent",
                borderRadius: "15px",
                marginBottom: "15px",
                borderImage:
                "linear-gradient(to right, #6F5CEA, #AE5BFF, #F2946D) 1",
              }}
          >
            <div 
              className="card-header d-flex justify-content-between align-items-center"
              onClick={() => toggleFAQ(index)}
              style={{
                backgroundColor: 'transparent',
                cursor: 'pointer',
                padding: '15px'
              }}
            >
              <h5 className="text-white mb-0">{faq.question}</h5>
              <button 
                className="btn btn-link text-white"
                style={{ textDecoration: 'none' }}
              >
                {activeIndex === index ? '−' : '+'}
              </button>
            </div>
            
            {activeIndex === index && (
              <div 
                className="card-body" 
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.05)', 
                  borderTop: '1px solid rgba(255,255,255,0.1)' 
                }}
              >
                <p className="text-white">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
            
        </div>
    );
}

export default Faq;