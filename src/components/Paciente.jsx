import React from 'react'

function Paciente() {
  return (
    <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
          <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre:{' '}
            <span className='font-normal normal-case'>Benji</span>
          </p>
          
          <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario:{' '}
            <span className='font-normal normal-case'>Gabriel</span>
          </p>

          <p className='font-bold mb-3 text-gray-700 uppercase'>Email:{' '}
            <span className='font-normal normal-case'>gabypretel@gmail.com</span>
          </p>

          <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha de alta:{' '}
            <span className='font-normal normal-case'>10 de Diciembre</span>
          </p>

          <p className='font-bold mb-3 text-gray-700 uppercase'>Síntomas:{' '}
            <span className='font-normal normal-case'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam minus sit deleniti quae voluptates! Optio nam aut, facilis placeat repellendus perferendis architecto neque doloremque laudantium voluptatum. Ullam architecto officiis accusamus.</span>
          </p>

      </div>
  )
}

export default Paciente

