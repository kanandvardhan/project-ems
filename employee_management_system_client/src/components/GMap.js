import React from "react";

const GMap = () => {
  return (
    <>
      <iframe
        className="w-full aspect-[1/1] sm:aspect-[16/9] shadow-3-strong rounded"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.34203554125!2d78.24323218367766!3d17.412281015453893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1683079717656!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default GMap;
