import React, { useState } from 'react'
import { motion } from 'framer-motion';
import "./Contact.css"
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', delay: 0.5 }
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
};
const imageVariants = {
  hover: {
    scale: 1.1,

    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity
    }
  }
}
const primaryStyle = {
  fill: '#000000',
};

const secondaryStyle = {
  fill: 'rgb(44, 169, 188)',
};
const icons = [
  { contact: "LinkedIn", img: <svg width="10px" height="10px" viewBox="0 0 24 24" id="meteor-icon-kit__solid-linkedin" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M22.2857 0H1.70893C0.766071 0 0 0.776786 0 1.73036V22.2696C0 23.2232 0.766071 24 1.70893 24H22.2857C23.2286 24 24 23.2232 24 22.2696V1.73036C24 0.776786 23.2286 0 22.2857 0ZM7.25357 20.5714H3.69643V9.11786H7.25893V20.5714H7.25357ZM5.475 7.55357C4.33393 7.55357 3.4125 6.62679 3.4125 5.49107C3.4125 4.35536 4.33393 3.42857 5.475 3.42857C6.61071 3.42857 7.5375 4.35536 7.5375 5.49107C7.5375 6.63214 6.61607 7.55357 5.475 7.55357ZM20.5875 20.5714H17.0304V15C17.0304 13.6714 17.0036 11.9625 15.1821 11.9625C13.3286 11.9625 13.0446 13.4089 13.0446 14.9036V20.5714H9.4875V9.11786H12.9V10.6821H12.9482C13.425 9.78214 14.5875 8.83393 16.3179 8.83393C19.9179 8.83393 20.5875 11.2071 20.5875 14.2929V20.5714Z" fill="#758CA3" /></svg> ,link:"https://www.linkedin.com/in/ahmedalsawalmeh/"},
  {
    contact: "FaceBook", img: <svg fill="#000000" width="10px" height="10px" viewBox="0 0 24 24" id="facebook-square" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" className="icon flat-color">
      <rect id="primary" x="2" y="2" width="20" height="20" rx="2" style={primaryStyle}></rect>
      <path id="secondary" d="M10,15h2v7h2V15h2a1,1,0,0,0,0-2H14V10a1,1,0,0,1,1-1h2a1,1,0,0,0,0-2H15a3,3,0,0,0-3,3v3H10a1,1,0,0,0,0,2Z" style={secondaryStyle} />
    </svg>,link:"https://web.facebook.com/ahmed.swalmeh/"
  },
  { contact: "GitHub", img: <svg width="10px" height="10px" viewBox="0 -0.5 24 24" id="meteor-icon-kit__regular-github" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.2047 0.00001C6.56031 -0.005731 1.74628 4.08615 0.842541 9.6577C-0.061195 15.2293 3.2126 20.6331 8.56941 22.4118C9.14823 22.5177 9.35294 22.1577 9.35294 21.8541C9.35294 21.5506 9.35294 20.8588 9.35294 19.8988C6.14117 20.5977 5.46353 18.3529 5.46353 18.3529C5.25046 17.6572 4.79779 17.0595 4.18588 16.6659C3.14823 15.96 4.27059 15.96 4.27059 15.96C5.00761 16.0641 5.65578 16.5014 6.02823 17.1459C6.34368 17.7179 6.87393 18.1406 7.50179 18.3208C8.12965 18.5009 8.8034 18.4236 9.37411 18.1059C9.41842 17.5252 9.66876 16.9794 10.08 16.5671C7.5247 16.2777 4.84235 15.2894 4.84235 10.92C4.82481 9.7786 5.24688 8.67412 6.02117 7.8353C5.67632 6.84285 5.71662 5.7571 6.13412 4.79295C6.13412 4.79295 7.10117 4.48236 9.29647 5.97177C11.1816 5.45419 13.1713 5.45419 15.0565 5.97177C17.2518 4.48236 18.2118 4.79295 18.2118 4.79295C18.6351 5.74689 18.6854 6.82486 18.3529 7.81412C19.1272 8.65294 19.5493 9.7574 19.5318 10.8988C19.5318 15.3177 16.8424 16.2847 14.28 16.5459C14.8359 17.1047 15.1218 17.8774 15.0635 18.6635C15.0635 20.2024 15.0635 21.4447 15.0635 21.8188C15.0635 22.1929 15.2682 22.4824 15.8541 22.3694C21.1473 20.5447 24.3569 15.1728 23.4554 9.6469C22.5539 4.1211 17.8034 0.04779 12.2047 0.00001z" fill="#758CA3" /></svg> ,link:"https://github.com/AhmedAlSawalmeh"},
  {},
  {},


]
const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your own Service ID, Template ID, and User ID
    const serviceId = 'service_asfgucg';
    const templateId = 'template_irpot6w';
    const userId = 'U7V9FqXmxdbK_bmwL';

    emailjs.send(serviceId, templateId, {

      from_email: email,
      message: message,
    }, userId)
      .then((response) => {
        console.log('Email sent successfully!', response.text);
        // Add any success message or behavior here
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        // Add any error handling here
      });

    // Clear the form inputs

    setEmail('');
    setMessage('');
  };
  return (
    <motion.div variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className='flex-col flex items-center justify-center   mt-10'>


      <svg className="intro " viewBox="0 0 200 100">

        <foreignObject x="10" y="10" width="200" height="100">
          <dev className="flex">
            <div className='flex-col  justify-around'>
              {icons.map((elem, i) => {
                return (
                  <motion.div key={i} className='mb-1 mr-2' variants={imageVariants}
                  whileHover="hover">
                    <Link to={elem.link}>
                    {elem.img}
                    </Link>
                  </motion.div>
                )
              })}
            </div>
            <div className='flex-col'>
              <p className='mb-1'>Your Email:</p>
              <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500  w-32 block h-1  mb-1 email" placeholder="examble@gmail.com" required onChange={(e) => {
                setEmail(e.target.value)
              }}></input>
              <p className='mb-1'>Your Message:</p>
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 h-4   message " required
                onChange={(e) => {
                  setMessage(e.target.value)
                }}></input>
            </div>
          </dev>
          <motion.p onClick={handleSubmit} className='  ml-4 mt-1 font-normal text-gray-300 dark:text-gray-400 test3 cursor-pointer text-xs submit'
            whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
            transition={{ type: 'spring', stiffness: 300 }}>
            Submit &nbsp;  〉
          </motion.p>
        </foreignObject>

        <foreignObject>

        </foreignObject>

      </svg>









    </motion.div>
  )
}

export default Contact