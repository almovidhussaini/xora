import React, { useState } from 'react';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
          question: 'What is XORA and why should I care?',
          answer: 'XORA is a gaming token that rewards players for winning and participating in fun, skill-based games. Whether you are a casual gamer or a competitive one, you can earn real value just by playing.'
        },
        {
          question: ' How do I take part in the ICO?',
          answer: 'You can join the ICO by visiting our official website, connecting your crypto wallet, and purchasing XORA tokens using ETH or USDT. Early buyers get more bonus tokens, so the earlier you join, the better.'
        },
        {
          question: 'What makes XORA different from other game projects?',
          answer: 'XORA combines addictive mobile games, real rewards, a deflationary token model (tokens get burned when airdrop token sell), and a long-term vision that supports both players and investors.'
        },
        {
          question: ' Will I be able to use the tokens in the games?',
          answer: 'Yes! You can use XORA tokens to join exclusive tournaments, unlock upgrades, access premium features, and even stake them for extra rewards.'
        },
        {
          question: 'Is XORA safe and secure?',
          answer: 'Absolutely. All smart contracts are audited, your tokens are held securely, and the platform is built with full transparency. We’re committed to earning your trust and growing the community long-term.'
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