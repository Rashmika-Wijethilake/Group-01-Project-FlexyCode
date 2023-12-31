import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../ResetPassword/ResetPassword.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


function ResetPassword() {
  
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

  return (
    <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
      <div className="reset-password">
        <h5 className='heading'>Reset your password for the EVIDIO Learning Management System</h5>

        <form className='need-validation'>
            <div className='form-group '>
              <div className="new-password">
                <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="New Password" className='form-control' required></input>
                <div className='password-toggle-icon1' onClick={togglePasswordVisibility}>
                 <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </div>
              </div>
            </div>

            <div className='form-group'>
              <div className="confirm-password">
                <input type={showPassword ? "text" : "password"} id="password" name="newPassword" placeholder="Re enter your new password" className='form-control' required></input>
                <div className='password-toggle-icon2' onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
               </div>
              </div>
            </div>

            <button type="submit" className='btn-rp'>Create</button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
