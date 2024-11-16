
export default function validInfoAdmin(data) {
    for (let e of data) {
        if (!e || e.trim() === '') {
            alert('Vui lòng nhập đầy đủ thông tin');
            return false;
        }
        if (data[0] !== e && containWhiteSpace(e)) return false;
    }

    if (!isValidEmail(data[1])) {
        alert('Email không hợp lệ');
        return false;
    }

    if (data[2] !== data[3]) {
        alert('Mật khẩu không trùng khớp')
        return false;
    }

    if (data[2] <= 8 && data[3] <=8 ) {
        alert('Mật khẩu có ít nhất 8 ký tự');
    }

    if (!isValidPhone(data[4])) {
        alert('Số điện thoại không hợp lệ');
        return false;
    }

    return true;
}

export const containWhiteSpace = (word) => {
    if (word.includes(' ')){
        alert(`Thông tin không được phép chứa khoảng trắng`);
        return true;
    }
    return false;
}

export const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    const emailPattern2 = /^[a-zA-Z0-9._-]+@vku\.udn\.vn$/;
    if (!emailPattern.test(email) && !emailPattern2.test(email)) {
        return false;
    }
    return true;
}

export const isValidPhone = (phone) => {
    const phonePattern = /^(0[1-9])[0-9]{8}$/;
    if (!phonePattern.test(phone)) return false;
    return true;
}