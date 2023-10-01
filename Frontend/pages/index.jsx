import React, { useEffect, useReducer, useState } from "react";
import Head from "next/head";

import useClientes from "@/hooks/useClientes";

import Layout from "@/components/Layout";
import Cliente from "@/components/Cliente";
import Modal from "@/components/Modal";
import { useRouter } from "next/router";

export async function getServerSideProps() {
    try {
        const respuesta = await fetch(process.env.NEXT_PUBLIC_BACKEND + '/clientes');

        const resultado = await respuesta.json();

        return { props: { resultado } }
    } catch (error) {
        console.log(error);

        return { props: { resultado: [] } }
    }
}

export default function Home({ resultado }) {
    const { clientes, clienteModal, modal, setClientes, filtroActivado, filtro, setFiltroActivado, filtrador } = useClientes();

    useEffect(() => {
        setClientes(resultado);
    });

    return (
        <>
            <Head>
                <title>CRM Clientes | Inicio</title>
                <meta name="description" content="Pagina principal" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <h1 className="text-center font-black text-3xl xl:text-4xl text-blue-900">Clientes</h1>
                <p className="mt-3 text-center font-bold xl:text-xl">Administra tus Clientes</p>

                {clientes.length > 0 && (
                    <form 
                        className="bg-blue-900 w-full flex items-center justify-center px-2 py-3 md:py-5 xl:py-6  mt-4 sticky top-16 md:top-0"
                        onSubmit={(e) => {
                            e.preventDefault();

                            document.querySelector('#filtro').value = '';
                        }}
                    >
                        <label htmlFor="filtro" className="flex mr-2 xl:mr-4">
                            <span
                                className="material-symbols-outlined text-white cursor-pointer font-bold xl:text-3xl"
                            >
                                search
                            </span>
                        </label>

                        <input 
                            type="text" 
                            id="filtro" 
                            className="w-3/4 xl:w-1/2 py-1 px-3 xl:py-2 xl:text-lg xl:px-4" 
                            placeholder="Buscar por nombre de cliente"
                            onChange={(e) => filtrador(e.target.value)}
                        />
                    </form>
                )}

                {modal && <Modal clienteModal={clienteModal} />}

                {clientes.length ? (
                    <table className={`w-full bg-white shadow mt-5 table-auto ${filtroActivado && 'hidden'}`}>
                        <thead className='bg-blue-900 text-white sticky top-28 md:top-16 xl:top-20 shadow-md'>
                            <tr>
                                <th className='p-2'>Cliente</th>
                                <th className='p-2 hidden xl:table-cell'>Contacto</th>
                                <th className='p-2 hidden sm:table-cell'>Notas</th>
                                <th className='p-2'>Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {clientes.map(cliente => (
                                <Cliente
                                    cliente={cliente}
                                    key={cliente._id}
                                />
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className={`text-center mt-10 ${filtroActivado && 'hidden'} font-bold text-2xl`}>No Hay Clientes aún...</p>
                )}

                {filtro.length ? (
                    <table className={`w-full bg-white shadow mt-5 table-auto ${!filtroActivado && 'hidden'}`}>
                        <thead className='bg-blue-900 text-white sticky top-28 md:top-16 shadow-md'>
                            <tr>
                                <th className='p-2'>Cliente</th>
                                <th className='p-2 hidden xl:table-cell'>Contacto</th>
                                <th className='p-2 hidden sm:table-cell'>Notas</th>
                                <th className='p-2'>Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filtro.map(cliente => (
                                <Cliente
                                    cliente={cliente}
                                    key={cliente._id}
                                />
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className={`text-center mt-10 ${!filtroActivado && 'hidden'} font-bold text-2xl`}>No hay resultados relacionados</p>
                )}

                {clientes.length > 0 && (
                    <div className={`flex justify-center mt-5 ${!filtroActivado && 'hidden'}`}>
                        <button
                            className="bg-blue-800 hover:bg-blue-600 text-white px-4 py-2 font-bold"
                            onClick={() => {
                                document.querySelector('#filtro').value = '';

                                setFiltroActivado(false);
                            }}
                        >
                            Ver todos los clientes
                        </button>
                    </div>
                )}
            </Layout>
        </>
    )
}
