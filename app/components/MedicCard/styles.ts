import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 24,
        color: "#FFFFFF",
    },
    headerSubtitle: {
        fontFamily: "Poppins",
        fontWeight: "bold",
        fontSize: 12,
        lineHeight: 18,
        color: "#FFFFFF",
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
        fontFamily: "Poppins",
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 21,
        color: "#000000",
    },
    patientAge: {
        fontFamily: "Poppins",
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 21,
        color: "#000000",
    },
    medicalInfo: {
        // Espaciado opcional
    },
    medicalDetail: {
        marginBottom: 2,
    },
    medicalLabel: {
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: 12,
        lineHeight: 18,
        color: "#154FBF",
    },
    medicalValue: {
        fontFamily: "Poppins",
        fontWeight: "500",
        fontSize: 12,
        lineHeight: 18,
        color: "#000000",
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
        height: 81,
        justifyContent: "center",
        alignItems: "center",
    },
    pickerContainer: {
        padding: 20,
    },
    pickerTitle: {
        color: "#154FBF",
        fontSize: 14,
        fontWeight: "bold",
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

export default styles;
