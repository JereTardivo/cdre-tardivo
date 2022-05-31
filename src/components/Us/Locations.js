import React from 'react'

const Locations = () => {
 
  return (
    <>
      <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Nuestra Ubicacion</h1>
      <br></br>
      <iframe
        className='w-full'
        title='maps'
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30604.012603533974!2d-151.73067165243592!3d-16.500756833633844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1653336745404!5m2!1ses!2sar"
        height="250"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade" />
      <br></br>
    </>
  )
}

export default Locations