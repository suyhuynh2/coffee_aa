import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* eslint-disable react/prop-types */
export default function CusInfoCPN({isUnlockInput, fileInputRef, handleUploadClick}) {
    return(
        <>
        
        <div className="-add-prd-form" >
                <label className="value_box" htmlFor="">
                    <p>ID khách hàng</p>
                    <input type="text" disabled/>
                </label>

                <label className="value_box" htmlFor="">
                    <p>Giới tính</p>
                    <select name="" id=""  disabled={!isUnlockInput}>
                        <option value="">Chưa cập nhật</option>
                        <option value="">Nam</option>
                        <option value="">Nữ</option>
                        <option value="">Khác</option>
                    </select>
                </label>

                <label className="value_box" htmlFor="">
                    <p>Họ và tên</p>
                    <input type="text" disabled={!isUnlockInput} />
                </label>

                <label className="value_box" htmlFor="">
                    <p>Số điện thoại</p>
                    <input type="phone"  disabled={!isUnlockInput}/>
                </label>

                <label className="value_box" htmlFor="">
                    <p>Email</p>
                    <input type="email" disabled={!isUnlockInput} />
                </label>

                <label className="value_box" htmlFor="">
                    <p>Ngày sinh</p>
                    <input type="date" disabled={!isUnlockInput} />
                </label>

                <label className="value_box" htmlFor="">
                    <p>Ngày đăng ký</p>
                    <input type="date" disabled={!isUnlockInput} />
                </label>

                <label className="value_box" htmlFor="">
                    <p>Địa chỉ</p>
                    <input type="text" />
                </label>

                <label className="value_box" htmlFor="">
                    <p>Tổng chi tiêu</p>
                    <input type="number" disabled={!isUnlockInput} />
                </label>

                <label className="value_box" htmlFor="">
                    <p>Trang thái</p>
                    <select name="" id=""  disabled={!isUnlockInput}>
                        <option value="">Online</option>
                        <option value="">Offline</option>
                    </select>
                </label>

                <label htmlFor="" className="value_box">
                    <p>Hình ảnh</p>
                    <input type="file" name="" id="" ref={fileInputRef}  disabled={!isUnlockInput}/>
                    <div className="-upload-file" onClick={handleUploadClick} >
                        <FontAwesomeIcon icon={faUpload} />
                        <p>UPLOAD FILE</p>
                    </div>
                </label>

                {isUnlockInput && (
                    <div className="-add-prd-btn">Cập nhật</div>
                )}
            </div>
        </>
    )
}