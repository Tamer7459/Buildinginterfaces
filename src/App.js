import './App.css';
import Header from "./Header";
import Post from "./post";
import SideMenu from './SideMenu';


function App() {
  return (
    <div className="App">
      <Header/>

      <div style={{display: "flex", justifyContent: "center",}}>

        {/* post & side menu container */}
        <div style={{display: "flex", width: "60%"}}>
          {/* post container */}
          <div style={{width: "70%"}}>
            <Post>
              <h1>20</h1>
              <h2>اكادمية ثامر</h2>
              <hr/>
              <p>اكادمية مختصة لتعليم البرمجة بمختلف الغات وتقنياتها</p>
            </Post>
            <Post> 
              <h1>hello world</h1>
              <hr/>
              <p>this is the hello world article</p>
            </Post> 
            <Post>  
              <h1>Post 3</h1>
              <hr/>
              <p>This is the body of post </p>
            </Post>

          </div>
          {/***  post container ***/}
          {/* side menu container */}
          <div style={{width: "30%"}}>
            <SideMenu>
              <button>جديدة</button>
              <button>الاكثر قرائة</button>
              <button>مقالات مميزة</button>
            </SideMenu>
          </div>
          {/*** side menu container ***/}
        </div>
        {/***  post & side menu container ***/ }
      </div>
    </div>
  );
} 

export default App;
