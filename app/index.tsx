import { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, StatusBar } from "react-native";
import { Picker } from "@react-native-picker/picker";

const API_URL =
    "https://wisemed-interview.s3.us-east-2.amazonaws.com/react-native/emergency-kinds.json";

const medicData = {
    area: "Traumatología",
    name: "Dr. José Pedro Sans",
};

const pacientData = {
    name: "Jorge Avendaño Pérez",
    age: 35,
    file: 77884,
    diagnosis: "Calcificación Talón",
    intervention: "Extirpación en talón",
    preAnestheticEvaluation: "Sí",
    requestTime: "3 días",
    suspensions: 2,
};

function Card({ options, selectedValue, setSelectedValue }) {
    return (
        <View style={styles.card}>
            {/* Header */}
            <View style={styles.cardHeader}>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerTitle}>{medicData.area}</Text>
                    <Text style={styles.headerSubtitle}>{medicData.name}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Image
                        source={require("../assets/images/card-icon.png")}
                        style={styles.iconImage}
                    />
                </View>
            </View>

            {/* Body */}
            <View style={styles.cardBody}>
                <View style={styles.patientInfo}>
                    <Image
                        source={require("../assets/images/pacient-icon.png")}
                        style={styles.patientImage}
                    />
                    <View style={styles.patientTextContainer}>
                        <Text style={styles.patientName}>
                            {pacientData.name}
                        </Text>
                        <Text style={styles.patientAge}>
                            {pacientData.age} años
                        </Text>
                    </View>
                </View>

                <View style={styles.medicalInfo}>
                    <Text style={styles.medicalDetail}>
                        <Text style={styles.medicalLabel}>Ficha médica: </Text>
                        <Text style={styles.medicalValue}>
                            {pacientData.file}
                        </Text>
                    </Text>
                    <Text style={styles.medicalDetail}>
                        <Text style={styles.medicalLabel}>Diagnóstico: </Text>
                        <Text style={styles.medicalValue}>
                            {pacientData.diagnosis}
                        </Text>
                    </Text>
                    <Text style={styles.medicalDetail}>
                        <Text style={styles.medicalLabel}>Intervención: </Text>
                        <Text style={styles.medicalValue}>
                            {pacientData.intervention}
                        </Text>
                    </Text>
                    <Text style={styles.medicalDetail}>
                        <Text style={styles.medicalLabel}>
                            Evaluación preanestésica:{" "}
                        </Text>
                        <Text style={styles.medicalValue}>
                            {pacientData.preAnestheticEvaluation}
                        </Text>
                    </Text>
                    <Text style={styles.medicalDetail}>
                        <Text style={styles.medicalLabel}>
                            Tiempo de solicitud:{" "}
                        </Text>
                        <Text style={styles.medicalValue}>
                            {pacientData.requestTime}
                        </Text>
                    </Text>
                    <Text style={styles.medicalDetail}>
                        <Text style={styles.medicalLabel}>Suspensiones: </Text>
                        <Text style={styles.medicalValue}>
                            {pacientData.suspensions}
                        </Text>
                    </Text>
                    <View style={[styles.medicalDetail, styles.imageRow]}>
                        <Image
                            source={require("../assets/images/cardio-icon.png")}
                            style={styles.medicalImage}
                        />
                        <Image
                            source={require("../assets/images/anestesia-icon.png")}
                            style={styles.medicalImage}
                        />
                    </View>
                </View>
            </View>

            {/* Footer*/}
            <View style={styles.cardFooter}>
                <Text style={styles.pickerTitle}>Tipo de Urgencia</Text>
                <View style={styles.pickerWrapper}>
                    <Picker
                        selectedValue={selectedValue}
                        onValueChange={(itemValue) =>
                            setSelectedValue(itemValue)
                        }
                        style={styles.picker}
                        itemStyle={styles.pickerItem}
                    >
                        <Picker.Item
                            label="Seleccionar"
                            value=""
                            style={styles.pickerLabel}
                        />
                        {options.map((option) => (
                            <Picker.Item
                                key={option.id}
                                label={option.name}
                                value={option.name}
                                style={styles.pickerLabel}
                            />
                        ))}
                    </Picker>
                </View>
            </View>
        </View>
    );
}

export default function HomeScreen() {
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
            <StatusBar backgroundColor="#F3EDF7" />
            {loading ? (
                <Text>Cargando...</Text>
            ) : (
                <Card
                    options={options}
                    selectedValue={selectedValue}
                    setSelectedValue={setSelectedValue}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F3EDF7",
    },
    card: {
        width: 276,
        height: 367,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#719EC0",
        backgroundColor: "#fff",
    },
    /* Header */
    cardHeader: {
        height: 60,
        backgroundColor: "#154FBF",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    headerTextContainer: {
        flexDirection: "column",
        justifyContent: "center",
    },
    headerTitle: {
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 24,
        color: "#fff",
    },
    headerSubtitle: {
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: 12,
        lineHeight: 18,
        color: "#fff",
    },
    iconContainer: {
        // Ajustes adicionales si se requieren
    },
    iconImage: {
        width: 50,
        height: 50,
        marginLeft: 8.68,
        transform: [{ rotate: "-10deg" }],
    },
    /* Body */
    cardBody: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    patientInfo: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    patientImage: {
        width: 20,
        height: 20,
        position: "relative",
        top: 2,
        left: 2,
        marginRight: 8,
    },
    patientTextContainer: {
        flexDirection: "column",
    },
    patientName: {
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 21,
        color: "#000",
    },
    patientAge: {
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 21,
        color: "#000",
    },
    medicalInfo: {
        // Espaciado opcional
    },
    medicalDetail: {
        marginBottom: 2,
    },
    medicalLabel: {
        fontWeight: "600",
        fontSize: 12,
        lineHeight: 18,
        color: "#154FBF",
    },
    medicalValue: {
        fontWeight: "500",
        fontSize: 12,
        lineHeight: 18,
        color: "#000",
    },
    imageRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    medicalImage: {
        width: 24,
        height: 24,
    },
    /* Footer */
    cardFooter: {
        padding: 20,
    },
    pickerTitle: {
        color: "#154FBF",
        fontSize: 14,
        lineHeight: 21,
        marginBottom: 5,
    },
    pickerWrapper: {
        borderWidth: 1,
        borderColor: "#154FBF",
        borderRadius: 6,
        overflow: "hidden",
    },
    picker: {
        height: 50,
        width: "100%",
        color: "#719EC0",
    },
    pickerItem: {
        // Personalizar las opciones del Picker si es necesario
    },
    pickerLabel: {
        fontSize: 16,
        lineHeight: 21,
        color: "#719EC0",
    },
});
