// import logo from './logo.svg';
// import './App.css';\
import { GoBell, GoDesktopDownload, GoDownload, GoShareAndroid } from "react-icons/go";
import Button from "../Components/button";

function ButtonPage() {
const handleSubmit = ()=>{
    console.log("click me")
}

  return (
    <div>
      <div>
        <Button primary rounded onClick={handleSubmit}>
          <GoBell />
          Hello there
        </Button>  
      </div>
      <div>
        <Button secondary outline onMouseEnter={handleSubmit}>
          <GoDownload/>
          Click me
        </Button>  
      </div>
      <div>
        <Button warning>
          < GoDesktopDownload/>
          Download
        </Button>  
      </div>
      <div>
        <Button success outline>
          <GoShareAndroid/>
          upload
        </Button>  
      </div>
      <div>
        <Button danger outline >
          Reset
        </Button>  
      </div>
    </div>
  );
}

export default ButtonPage;
