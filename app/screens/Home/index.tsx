import { useState, useEffect } from "react";
import { View, Text, StatusBar } from "react-native";
import MedicCard from "@/app/components/MedicCard";
import styles from "./styles";

const API_URL =
    "https://wisemed-interview.s3.us-east-2.amazonaws.com/react-native/emergency-kinds.json";

export default function Home() {
    const [options, setOptions] = useState([]);
    const [selectedValue, setSelectedValue] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();

                setOptions(data.emergencyKinds);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={styles.container.backgroundColor} />
            {loading ? (
                <Text>Cargando...</Text>
            ) : (
                <MedicCard
                    options={options}
                    selectedValue={selectedValue}
                    setSelectedValue={setSelectedValue}
                />
            )}
        </View>
    );
}
