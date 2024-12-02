const Register = async ({ role, username, fullName, email, password, mobileNumber, degree, specialization, startYear, endYear, companyName, designation, startDate, endDate, currentlyWorking }) => {
    const localData = JSON.parse(localStorage.getItem('user'));
    let response = await fetch('https://alumni-server-1vvj.onrender.com/api/v1/admin/users', {
        method: 'post',
        body: JSON.stringify(
            { role, username, fullName, email, mobileNumber, password, degree, specialization, startYear, endYear, companyName, designation, startDate, endDate, currentlyWorking }
        ),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localData?.accessToken}`,
        },
        credentials: "include"
    });
    if (!response.ok) {
        return { response: await response.json(), status: response.status, statusText: response.statusText };
    }
    return response.json();

}

export { Register };