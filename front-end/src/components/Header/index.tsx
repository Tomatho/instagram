import React, { useState, useCallback } from 'react';
import { BiSearch, BiHome } from 'react-icons/bi';
import { BsFillXCircleFill } from 'react-icons/bs';

import { Link } from 'react-router-dom';
import { Container, CenterNav, RightNav } from './style';
import Logo from '../../assets/logo.png';

const Header: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const handleSubmitIsFocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  const handleSubmitIsBlur = useCallback(() => {
    setIsFocus(false);
  }, []);

  return (
    <Container isFocus={isFocus}>
      <nav>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <CenterNav>
          <BiSearch size={14} />
          <input
            type="text"
            placeholder="Pesquisar"
            value={inputText}
            onChange={event => setInputText(event.target.value)}
            onFocus={handleSubmitIsFocus}
            onBlur={handleSubmitIsBlur}
          />
          <BsFillXCircleFill
            className={isFocus ? 'active' : 'deactive'}
            onClick={() => setInputText('')}
          />
        </CenterNav>
        <RightNav>
          <Link to="/">
            <BiHome size={22} />
          </Link>
          <Link to="/">
            <BiHome size={22} />
          </Link>
          <Link to="/">
            <BiHome size={22} />
          </Link>
          <Link to="/">
            <BiHome size={22} />
          </Link>
        </RightNav>
      </nav>
    </Container>
  );
};

export default Header;
