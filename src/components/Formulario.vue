<script>
import { getFirestore, collection, onSnapshot, addDoc } from 'firebase/firestore';
import firebaseApp from '../firebaseconfig';
import ListaUsuarios from './ListaUsuarios.vue';

export default {
    name: 'Formulario',
    data() {
        return {
            nuevoUsuario: {},
            usuarios: [],
        };
    },    
    components:{
        ListaUsuarios,
    },

    mounted(){         
        const db = getFirestore(firebaseApp);
        const usuariosRef = collection(db, 'usuarios'); 
        onSnapshot(usuariosRef, (snapshot) => {
            this.usuarios = snapshot.docs.map((doc) => ({ id: doc.id,
            ...doc.data() }));
        });
    },

    methods: {  

        async addUsuario() {
            if (this.nuevoUsuario.nombre.trim() === '' || this.nuevoUsuario.correo.trim() === '' ) return;
            const db = getFirestore(firebaseApp);
            const usuariosRef = collection(db, 'usuarios');
            await addDoc(usuariosRef, { nombre: this.nuevoUsuario.nombre, correo: this.nuevoUsuario.correo });
            this.nuevoUsuario.nombre = ''; 
            this.nuevoUsuario.correo = '';
        },      
    },
};
</script>

<template>

  <div class=" d-flex flex-column gap-4">
        <div>
            <form class=" d-flex flex-column p-4 rounded-3 gap-4 bg-warning-subtle" @submit.prevent="addUsuario">
                <input v-model="nuevoUsuario.nombre" placeholder="Nombre" class="form-control" name="usuario" />
                <input v-model="nuevoUsuario.correo" placeholder="Correo electrónico" class="form-control" name="correo" />
                <button type="submit" class="btn btn-warning">Agregar</button>
            </form>
        </div>

        <div class="mt-4">
            <ListaUsuarios :usuarios="usuarios"/>        
        </div>
  </div>

</template>