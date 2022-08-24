import React from 'react';
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

function Paciente({paciente, setPaciente, eliminarPaciente}) {
    const {nombre,propietario,email,alta,sintomas,id}= paciente;

    const handleEliminar = ()=>{
        Swal.fire({
            title: 'Estás seguro de eliminar?',
            text: "No puedes revertir esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminalo!'
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarPaciente(id);  //llamar el prop y enviar el id
                Swal.fire(
                'Eliminado!',
                'Tu cita se ha eliminado.',
                'success'
                )
            }
        })
    }

  return (
    <div className='mx-3 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre:{' '}
            <span className='font-normal normal-case'>{nombre}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario:{' '}
            <span className='font-normal normal-case'>{propietario}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Email:{' '}
            <span className='font-normal normal-case'>{email}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha de alta:{' '}
            <span className='font-normal normal-case'>{alta}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Síntomas:{' '}
            <span className='font-normal normal-case'>{sintomas}</span>
        </p>
        <div className='flex justify-between mt-10'>
            <button onClick={()=>setPaciente(paciente)}  type='button' className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'>Editar</button>
            <button onClick={handleEliminar}  type='button'className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'>ELiminar </button>
        </div>
    </div>
)
}

export default Paciente

