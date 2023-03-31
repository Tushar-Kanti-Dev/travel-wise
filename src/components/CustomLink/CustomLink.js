import { Link, useMatch, useResolvedPath } from "react-router-dom";
import './CustomLink.css';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div className="custom-link">
        <Link 
          style={{color: match ? 'orange' : 'white', textDecoration: match ? "underline" : "none" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
        
      </div>
    );
  }

  export default CustomLink;