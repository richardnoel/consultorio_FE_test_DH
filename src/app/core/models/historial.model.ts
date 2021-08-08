export interface Historial {
    "idHistory": number,
    "history": string,
    "patient": {
        "patientId": number,
        "documentNumber": number,
        "firstName": string,
        "lastName": string,
        "birthDate": string,
        "address": string,
        "photo": string,
        "email": string,
        "cellNumber": string,
        "phoneNumber": null
    }
}