import React from "react";

import Layout from "@/components/Layout";

export default function Custom404() {
    return (
        <>
            <Layout>
                <div className='w-full mt-40'>
                    <h1 className="text-center font-black text-3xl xl:text-4xl text-blue-900">Página no encontrada</h1>
                    <p className="mt-3 text-center font-bold xl:text-xl">Vuelve al inicio para ver o agregar clientes</p>
                </div>
            </Layout>
        </>
    )
}