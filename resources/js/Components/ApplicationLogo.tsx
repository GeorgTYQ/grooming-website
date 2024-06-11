import React from 'react'; // Import React module
import logo from '../../images/logo.png'; // Adjust the path as necessary

interface ApplicationLogoProps {
  // Define the type for props
  [key: string]: any; // Allows any other props to be passed
}

const ApplicationLogo: React.FC<ApplicationLogoProps> = (props) => {
  return <img {...props} src={logo} alt="Application Logo" />;
};

export default ApplicationLogo;
