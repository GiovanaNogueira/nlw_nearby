import { useEffect } from "react";
import { View, Text, Alert } from "react-native";

import {api} from "@/services/api";

export default function Home(){
    async function fetchCategories() {
        try {
            const { data } = await api.get("/categories")
            console.log(data)
        } catch (error) {
            console.log(error)
            Alert.alert("Categorias", "Não foi possível carregar as categorias")
        }     
    }

    useEffect(() => {
        fetchCategories()
    }, []) //chamado toda vez que a tela é carregada

    return(
        <View style ={{ flex: 1}} >
            <Text>Home</Text>
        </View>
    )
}