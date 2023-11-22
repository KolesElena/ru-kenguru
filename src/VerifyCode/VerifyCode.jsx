import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const VerifyCode = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (code) {
      setLoading(true);
      axios.get(`http://localhost:3000/auth/verify-code/${code}`).then(() => setLoading(false));
    }
  }, []);
  return !loading ? (<div>Your account has been confirmed!
    <Link to='/'>Go to Home</Link>
  </div>) : <p>Loading</p>;
};

export default VerifyCode;
