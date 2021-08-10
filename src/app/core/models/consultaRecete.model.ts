export interface ConsultaRecete {
    "consultationId": number,
    "date": string,
    "doctor": {
        "firstName": string,
        "lastName":string,
        "speciality":string,
        "photo":string,
        "email":string,
        "cellNumber":string
    },
    "prescriptions": any
}