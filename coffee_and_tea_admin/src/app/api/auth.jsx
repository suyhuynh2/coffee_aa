import axios from 'axios';
import validInfoAdmin from '../valid/audthValid';

export const RegisterAPI = async (name, email, password, re_password, phone, setForm) => {
    try {
        const data = [name, email, password, re_password, phone];
        if (validInfoAdmin(data)) {    
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

            if (response.status === 201) {
                alert("Đăng ký thành công");
                setForm('login');
            }
        }
    }catch (error) {
        console.log('Đăng nhập thất bại\n', 
            error.response ? error.response.data : error.message
        );
        alert('Đăng ký thất bại');
    }   
}
