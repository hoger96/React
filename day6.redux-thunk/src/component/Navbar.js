import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate} from "react-router-dom";

const Navbar = ({authenticate, setAuthenticate}) => {
    //메뉴리스트 배열
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    }

    const search = (event) => {
        if(event.key === "Enter"){
            //입력한 검색어를 읽어와서 url를 바꿔주기
            let keyword = event.target.value;
            navigate(`/?q=${keyword}`);
        }
    }
    
    return (
    <div>
        <div>
            <div className="login-button">
                <FontAwesomeIcon icon={faUser} />
                {authenticate ? (
                    <div onClick={() => setAuthenticate(false)}>
                        <span>로그아웃</span>
                    </div>
                ) : (
                    <div className='login-btn' onClick={goToLogin}>
                        <span>로그인</span>
                    </div>
                )}
            </div>
        </div>
        <div className="nav-section">
            <img 
            width={100} 
            src="data:image/png;base64,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" 
            />
        </div>
        <div className="menu-area">
            <ul className="menu-list">
                   {menuList.map((menu) => (
                        <li>{menu}</li>
                   ))}
            </ul>
            <div className="search-item">
                <FontAwesomeIcon icon={faSearch} />
                <input onKeyPress={(event) => search(event)} type="text" className='search-input' placeholder='제품검색'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar