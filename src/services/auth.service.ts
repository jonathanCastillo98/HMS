const tokenUrl = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCZpC9dgIcL3LEwi77H-sEuP1zQndiPoG8"
const createDoctorUrl = "http://localhost:3000/admin/doctors/"

export const getUserToken = (email: string, password: string) => {

    const data = {
        email: email,
        password: password,
        "returnSecureToken": true
    }
    return fetch(tokenUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk3OWVkMTU1OTdhYjM1Zjc4MjljZTc0NDMwN2I3OTNiN2ViZWIyZjAiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiYWRtaW4iLCJyb2xlIjoiYWRtaW4iLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vaG1zLWpvbmF0aGFuY2FzdGlsbG8iLCJhdWQiOiJobXMtam9uYXRoYW5jYXN0aWxsbyIsImF1dGhfdGltZSI6MTY4MDMwNDI5NiwidXNlcl9pZCI6InRBMGZWaHdVT1RWSEFOQTRsOWllbHlDN0FFZDIiLCJzdWIiOiJ0QTBmVmh3VU9UVkhBTkE0bDlpZWx5QzdBRWQyIiwiaWF0IjoxNjgwMzA0Mjk2LCJleHAiOjE2ODAzMDc4OTYsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFkbWluQGFkbWluLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.iY4CPX_w9eNAv4EZwhi-Yj1NonzOZiixEgHBGK8Rt710BhPib0foT9yVDVOMj9ezieH3xYtv1jDhXN9BjtW5DiPpdBC525Zqyd_NxON2ZRnL6M5FVnIIczkzgPWRe7cuzxumlfjdtJRPVdCDVvgQSjC1AV96B0VRHptRqoKO2EesV8siJh5DRn_cJbjMYNQx-yJ6PBwBYTTJgarEwG26xOPNo1IqvDH9yT4gLEhEOciq98sHsf7ZlOeTmxNAP1QrU8F3YxH4R-534lhSDzptFcpxPPy-txS7BZyoqsgrs1dZ1EdTztw9zsrptXtzoVZysnJLMnSwgSCme97b7Jc2Sw`
        }
    }).then(res => res.json())
        .catch(error => console.error(error))
        .then(res => console.log(res))
}

export const createDoctor = () => {

    const data = {
        displayName: "doctorReact",
        email: "doctorReact@gmail.com",
        password: "test123",
    }
    return fetch(tokenUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(error => console.error(error))
        .then(res => console.log(res))
}