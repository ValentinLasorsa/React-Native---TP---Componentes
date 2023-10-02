import AsyncStorage from "@react-native-async-storage/async-storage";

const USERNAME_KEY='LOGIN_Usuario';
const PASSWORD_KEY='LOGIN_Password';

class ServicioUsuario{

    login = async(username,password) => {
        let isValid = false;
        if ((username != null) && (password != null)) {
            isValid = ((username.toLowerCase() === 'Yogui') && (password.toLowerCase()=== 'monty'))
        }
        console.log('ServicioUsuario.login', isValid);
        return isValid;
    }

    autoLogin = async() => {
        let isValid = false;
        const storedCredentials = await this.obtenerCredenciales();
        isValid = await this.login(storedCredentials.username, storedCredentials.password);
        console.log('ServicioUsuario.autoLogin', isValid);
        return isValid;
    }

    getCredenciales = async() => {
        let storedUserName = null;
        let storedPassword = null;

        try{
            storedUserName = await AsyncStorage.getItem(USERNAME_KEY);
            storedPassword = await AsyncStorage.getItem(PASSWORD_KEY);
        }catch(error){
            console.log('Error tratando de obtener credenciales.', error);
        }
        const returnValue = {'username': storedUserName, 'password' : storedPassword};

        console.log('ServicioUsuario.getCredenciales', returnValue);
        return returnValue;
    }

    deleteCredenciales = async() => {
        console.log('ServicioUsuario.deleteCredenciales');
        try{
            await AsyncStorage.removeItem(USERNAME_KEY);
            await AsyncStorage.removeItem(PASSWORD_KEY);
        }catch(error){
            console.log('Error tratando de eliminar credenciales.', error);
        }
    }

    storageCredenciales = async(username,password) => {
        console.log('ServicioUsuario.storageCredenciales');
        try{
            await AsyncStorage.setItem(USERNAME_KEY, username);
            await AsyncStorage.setItem(PASSWORD_KEY, password);
        }catch(error){
            console.log('Error tratando de almacenar credenciales.', error);
        }
    }
}
export default ServicioUsuario;