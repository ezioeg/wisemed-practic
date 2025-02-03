import { View, Text, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { medicData, pacientData } from "@/app/mockData";
import { MedicalInfoItemProps, MedicCardProps } from "@/app/types";
import { LABELS } from "@/app/utils/constants";
import styles from "./styles";

const MedicalInfoItem = ({ label, value }: MedicalInfoItemProps) => (
    <Text style={styles.medicalDetail}>
        <Text style={styles.medicalLabel}>{label}: </Text>
        <Text style={styles.medicalValue}>{value}</Text>
    </Text>
);

export default function MedicCard({
    options,
    selectedValue,
    setSelectedValue,
}: MedicCardProps) {
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
                        source={require("../../../assets/images/card-icon.png")}
                        style={styles.iconImage}
                    />
                </View>
            </View>

            {/* Body */}
            <View style={styles.cardBody}>
                <View style={styles.patientInfo}>
                    <Image
                        source={require("../../../assets/images/pacient-icon.png")}
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
                    <MedicalInfoItem
                        label={LABELS.file}
                        value={pacientData.file}
                    />
                    <MedicalInfoItem
                        label={LABELS.diagnosis}
                        value={pacientData.diagnosis}
                    />
                    <MedicalInfoItem
                        label={LABELS.intervention}
                        value={pacientData.intervention}
                    />
                    <MedicalInfoItem
                        label={LABELS.preAnestheticEvaluation}
                        value={pacientData.preAnestheticEvaluation}
                    />
                    <MedicalInfoItem
                        label={LABELS.requestTime}
                        value={pacientData.requestTime}
                    />
                    <MedicalInfoItem
                        label={LABELS.suspensions}
                        value={pacientData.suspensions}
                    />
                    <View style={[styles.medicalDetail, styles.imageRow]}>
                        <Image
                            source={require("../../../assets/images/cardio-icon.png")}
                            style={styles.medicalImage}
                        />
                        <Image
                            source={require("../../../assets/images/anestesia-icon.png")}
                            style={styles.medicalImage}
                        />
                    </View>
                </View>
            </View>

            {/* Footer*/}
            <View style={styles.pickerContainer}>
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
