import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

import useClientes from '@/hooks/useClientes';

import Layout from '@/components/Layout';
import Formulario from '@/components/Formulario';
import Aviso from '@/components/Aviso';

export async function getServerSideProps({ params }) {
    const { id } = params;

    try {
        const respuesta = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/clientes/${id}`);

        const resultado = await respuesta.json();

        if(resultado.nombre){
            return {
                props: {
                    cliente: resultado
                }
            }
        } else {
            return {
                props: {
                    cliente: null
                }
            }
        }
    } catch (error) {
        return {
            props: {
                cliente: null
            }
        }
    }
}

const Page = ({ cliente }) => {
    const router = useRouter();

    const { cerrarModal, setFiltroActivado, aviso} = useClientes();

    //cierra el modal al cambiar de sitio, ya que si regresamos al inicio el modal seguira abierto y no es una buena experiencia de usuario
    useEffect(() => {
        cerrarModal();

        setFiltroActivado(false);
    })

    return (
        <>
            <Head>
                <title>CRM Clientes | Editar cliente</title>
                <meta name="description" content="Pagina para editar clientes" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                {cliente ? (
                    <>
                        <h1 className="text-center font-black text-3xl xl:text-4xl text-blue-900">Editar Cliente</h1>
                        <p className="mt-3 text-center font-bold xl:text-xl">Llena todos los campos para editar cliente</p>

                        {aviso && <Aviso />}

                        <div className="flex justify-center mt-5">
                            <button
                                className="bg-blue-800 hover:bg-blue-600 text-white px-4 py-2 font-bold"
                                onClick={() => router.push('/')}
                            >
                                Ver todos los clientes
                            </button>
                        </div>

                        <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-7'>
                            <Formulario
                                cliente={cliente}
                            />
                        </div>
                    </>
                ) : (
                    <div className='w-full mt-40'>
                        <h1 className="text-center font-black text-3xl xl:text-4xl text-blue-900">Cliente no encontrado</h1>
                        <p className="mt-3 text-center font-bold xl:text-xl">Vuelve al inicio para ver o agregar clientes</p>
                    </div>
                )}
            </Layout>
        </>
    )
}

export default Page;