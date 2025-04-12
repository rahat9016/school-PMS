import api from "./baseAPI"

export const admissionRequest = async <T,>(data: T) => {
    try {
        const response = await api.post('/student/admission', data)
        return response.data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
        // console.log(error)
        return error.response.data
    }
}

export const appointmentRequest = async <T,>(data: T) => {
    try {
        const response = await api.post('/student/online-appointment', data)
        return response.data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
        // console.log(error)
        return error.response.data
    }
}

export const schoolTourBookingRequest = async <T,>(data: T) => {
    try {
        const response = await api.post('/student/school-tour-booking', data)
        return response.data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
        // console.log(error)
        return error.response.data
    }
}