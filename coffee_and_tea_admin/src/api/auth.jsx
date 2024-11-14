import axios from 'axios';

export const RegisterAPI = async (name, email, password, re_password, phone, setForm) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/register', {
            name: name,
            email: email,
            password: password,
            phone: phone
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log("name", name);

        if (response.status === 201) {
            alert(response.data);
            setForm('login');
        }
    }catch (error) {
        console.log('Đăng nhập thất bại\n', error);
        alert('Đăng ký thất bại');
    }
}
