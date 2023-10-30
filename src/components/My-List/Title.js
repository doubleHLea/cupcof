import { useNavigate } from 'react-router-dom';

const Title = () => {
  const navigate = useNavigate();

  function handleUseNavigate() {
    navigate('/')
  }

  return (
    <div>
      <header id="header">
        <a onClick={handleUseNavigate}>
          <h1>MY LIST</h1>
          </a>
      </header>
    </div>
  );
}

export default Title;