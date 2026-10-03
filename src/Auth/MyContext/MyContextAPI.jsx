import { createContext, useContext, useEffect, useState } from "react";
import { Api } from "../../API/Api";



const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [isUser, setUser] = useState('');



    const profile = () => {
        try {
            const res = Api.get("/profile");
            setUser(res.data);
        } catch (error) {
            console.log(error)
            setUser(null)
        }
    }

    useEffect(() => {
        profile();
    }, [])


    const login = async (data) => {
        try {
            const res = await Api.post('/login', data);

            return {
                message: res.data.message
            }
        } catch (error) {
            console.log(error)
        }
    }

    const signup = async (data) => {
        try {
            const res = await Api.post('/signup', data)
            return {
                message: res.data.message
            }
        } catch (error) {
            console.log(error)
        }
    }

    const logout = async () => {
        try {
            await Api.get('/logout');
            setUser(null);
        } catch (error) {
            console.log(error)

        }
    }


    return (
        <AuthContext.Provider value={{ login, signup, logout, isUser }}>
            {children}
        </AuthContext.Provider>
    )




}

export const useAuth = ()=> useContext(AuthContext)

