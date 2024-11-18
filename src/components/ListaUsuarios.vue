<script>
import { getFirestore, doc, deleteDoc } from 'firebase/firestore';
import firebaseApp from '../firebaseconfig';

export default{ 
    name: 'ListaUsuarios',       
    props: ['usuarios'],  

    methods:{
        async deleteUsuario(usuarioId) {
            const db = getFirestore(firebaseApp);
            const usuarioRef = doc(db, 'usuarios', usuarioId);
            await deleteDoc(usuarioRef);
        },
    }   
};
</script>

<template>
    <div>
        <table class="table table-primary table-striped">
            <thead>
                <tr>                    
                    <th class="fw-bold" scope="col">Nombre </th>
                    <th class="fw-bold" scope="col">Correo</th>
                    <th class="fw-bold" scope="col">Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="usuario in usuarios" :key="usuario.index">
                    <th> 
                        {{ usuario.nombre }}
                    </th>
                    <td>
                        {{ usuario.correo}}
                    </td>
                    <td>
                        <button @click="deleteUsuario(usuario.id)" class="btn btn-light">Eliminar</button>
                    </td>                    
                </tr>                
            </tbody>
        </table>
    </div>
</template>