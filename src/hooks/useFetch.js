const localData = JSON.parse(localStorage.getItem('user'));

const Fetch = async ({ email, password }) => {
    let response = await fetch('https://alumni-server-1vvj.onrender.com/api/v1/users/login', {
        method: 'post',
        body: JSON.stringify({ email, password }),
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

const FetchAllUser = async (query) => {
    try {
        const response = await fetch(`https://alumni-server-1vvj.onrender.com/api/v1/users?${query}`, {
            method: 'get',
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
    } catch (error) {
        return error;
    }
};

const FetchUserWithQuery = async (query) => {
    try {
        const response = await fetch(`https://alumni-server-1vvj.onrender.com/api/v1/users?query=${query}`, {
            method: 'get',
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
    } catch (error) {
        return error;
    }
};

const FetchSingleuser = async (id) => {
    let User = await fetch(`https://alumni-server-1vvj.onrender.com/api/v1/users/p/${id}`, {
        method: "get",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localData?.accessToken}`,
        },
        credentials: "include"
    });
    if (User.ok) {
        return User.json();
    } else {
        return { response: await User.json(), status: User.status, statusText: User.statusText };
    }
}

const WhoAmI = async () => {
    let User = await fetch(`https://alumni-server-1vvj.onrender.com/api/v1/users/whoami`, {
        method: "get",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localData?.accessToken}`,
        },
        credentials: "include"
    });
    if (User.ok) {
        return User.json();
    } else {
        return { response: await User.json(), status: User.status, statusText: User.statusText };
    }
}
const UpdateExperience = async (companyName, designation, startDate, currentlyWorking, endDate) => {
    let User = await fetch(`https://alumni-server-1vvj.onrender.com/api/v1/users/experience`, {
        method: "put",
        body: JSON.stringify({
            companyName, designation, startDate, currentlyWorking, endDate
        }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localData?.accessToken}`,
        },
        credentials: "include"
    });
    if (User.ok) {
        return User.json();
    } else {
        return { response: await User.json(), status: User.status, statusText: User.statusText };
    }
}



const UpdateUser = async ({ id, username, fullName, email, mobileNumber, role, degree, specialization, startYear, endYear, companyName, designation, startDate, currentlyWorking, endDate }) => {
    let UpdateUser = await fetch(`https://alumni-server-1vvj.onrender.com/api/v1/admin/users/${id}`, {
        method: "put",
        body: JSON.stringify({
            username,
            fullName,
            email,
            mobileNumber,
            role,
            degree,
            specialization,
            startYear,
            endYear,
            companyName,
            designation,
            startDate,
            currentlyWorking,
            endDate,
        }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localData?.accessToken}`,
        },
        credentials: "include"
    });
    if (UpdateUser.ok) {
        return UpdateUser.json();
    } else {
        return { response: await UpdateUser.json(), status: UpdateUser.status, statusText: UpdateUser.statusText };
    }
}
const UpdateAccount = async ({ fullName, email, mobileNumber }) => {
    let Update = await fetch(`https://alumni-server-1vvj.onrender.com/api/v1/users/update-account`, {
        method: "put",
        body: JSON.stringify({
            fullName,
            email,
            mobileNumber,
        }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localData?.accessToken}`,
        },
        credentials: "include"
    });
    if (Update.ok) {
        return Update.json();
    } else {
        return { response: await Update.json(), status: Update.status, statusText: Update.statusText };
    }
}

const UserDelete = async (id) => {
    let deleteUser = await fetch(`https://alumni-server-1vvj.onrender.com/api/v1/admin/users/${id}`, {
        method: "delete",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localData?.accessToken}`,
        },
        credentials: "include"
    });
    if (deleteUser.ok) {
        return deleteUser.json();
    } else {
        return { response: await deleteUser.json(), status: deleteUser.status, statusText: deleteUser.statusText };
    }
}

const AvatarUpload = async (file) => {

    const formData = new FormData();
    formData.append('avatar', file);
    let response = await fetch(`https://alumni-server-1vvj.onrender.com/api/v1/users/avatar`, {
        method: "put",
        body: formData,
        headers: {
            'Authorization': `Bearer ${localData?.accessToken}`,
        },
        credentials: "include"
    });
    if (response.ok) {
        return response.json();
    }
    else {
        return { response: await response.json(), status: response.status, statusText: response.statusText };
    }
}

const passwordChange = async ({ oldPassword, newPassword }) => {
    let response = await fetch('https://alumni-server-1vvj.onrender.com/api/v1/users/change-password', {
        method: 'put',
        body: JSON.stringify({ oldPassword, newPassword }),
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

const logOut = async () => {
    let response = await fetch('https://alumni-server-1vvj.onrender.com/api/v1/users/logout', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localData?.accessToken}`,
        },
        credentials: "include"
    });
    if (!response.ok) {
        localStorage.setItem("user", "")
        return { response: await response.json(), status: response.status, statusText: response.statusText };
    }
    return response.json();

}

export { Fetch, FetchAllUser, UserDelete, UpdateUser, FetchSingleuser, WhoAmI, AvatarUpload, passwordChange, logOut, UpdateAccount, FetchUserWithQuery, UpdateExperience };
