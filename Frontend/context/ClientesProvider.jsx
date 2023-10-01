import { useState, createContext } from 'react';
import { useRouter } from 'next/router';

const ClientesContext = createContext();

const ClientesProvider = ({ children }) => {
    const [clientes, setClientes] = useState([]);
    const [clienteModal, setClienteModal] = useState({});
    const [modal, setModal] = useState(false);
    const [filtro, setFiltro] = useState([]);
    const [filtroActivado, setFiltroActivado] = useState(false);

    const router = useRouter();

    const registrarCliente = async (e) => {
        e.preventDefault();

        let datos = {};

        for (let i = 0; i < e.target.length - 1; i++) {
            datos[e.target[i].id] = e.target[i].value;
        }

        try {
            await fetch(process.env.NEXT_PUBLIC_BACKEND + '/clientes', {
                method: 'POST',
                body: JSON.stringify(datos), 
                headers: { 
                    'Content-Type': 'application/json'
                }
            })

            router.push('/');
        } catch (error) {
            console.log(error)
        }
    }

    const editarCliente = async (e, id) => {
        e.preventDefault();

        let datos = {};

        for (let i = 0; i < e.target.length - 1; i++) {
            datos[e.target[i].id] = e.target[i].value;
        }

        try {
            await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/clientes/${id}`, {
                method: 'PUT',
                body: JSON.stringify(datos),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
    
            router.push('/');
        } catch (error) {
            console.log(error)
        }
    }

    const eliminarCliente = async (id) => {
        if (!confirm('¿Deseas eliminar este cliente?')) return;

        try {
            await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/clientes/${id}`, { method: 'DELETE' });

            router.push('/');
        } catch (error) {
            console.log(error);
        }

        setModal(false);
    }

    const informacionCliente = (id) => {
        const dato = clientes.filter((cliente) => cliente._id === id);

        setClienteModal(dato[0]);

        setModal(true);
    }

    //onChange
    const filtrador = (texto) => {
        if(texto === ''){
            setFiltroActivado(false);
            return;
        }
        
        const busqueda = clientes.filter(cliente => cliente.nombre.toLowerCase().includes(texto.toLowerCase()))

        setFiltro(busqueda);

        setFiltroActivado(true);
    }

    const cerrarModal = () => {
        setModal(false);
    }

    return (
        <ClientesContext.Provider
            value={{
                clientes,
                informacionCliente,
                clienteModal,
                modal,
                cerrarModal,
                eliminarCliente,
                registrarCliente,
                setClientes,
                editarCliente,
                filtrador,
                filtro,
                filtroActivado,
                setFiltroActivado,
            }}
        >
            {children}
        </ClientesContext.Provider>
    )
};

export {
    ClientesProvider
}

export default ClientesContext;