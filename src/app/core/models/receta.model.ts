export interface Receta {
    "prescriptionId": number,
    "description": string,
    "consultationId": number,
    "consultation": {
        "consultationId": number,
        "doctorId": number,
        "patientId": number,
        "date": string,
        "doctor": {
            "doctorId": number,
            "firstName": string,
            "lastName":string,
            "birthDate":string,
            "speciality":string,
            "address":string,
            "photo":string,
            "medicalRegister":string,
            "email":string,
            "cellNumber":string,
            "phoneNumber":string,
        },
        "patient": {
            "patientId": number,
            "documentNumber": number,
            "firstName":string,
            "lastName":string,
            "birthDate":string,
            "address":string,
            "photo":string,
            "email":string,
            "cellNumber":string,
            "phoneNumber":string
        }
    }
}