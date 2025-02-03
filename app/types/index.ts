export type MedicCardProps = {
    options: { id: number; name: string }[];
    selectedValue: string;
    setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
};

export type MedicalInfoItemProps = {
    label: string;
    value: string | number;
};
