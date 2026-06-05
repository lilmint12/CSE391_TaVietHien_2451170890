import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ProductInfo from './ProductInfo'
import UserProfile from './UserProfile'
import LifecycleDemo from './LifecycleDemo'
import BadCounter from './BadCounter'
import GoodCounter from './GoodCounter'
import ToDoList from './ToDoList'
function App() {

    return (
        <div>
            <h1>Tạ Viết Hiên</h1>
            <p>Hôm nay là ngày đẹp trời</p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
              <UserProfile/>
              <ProductInfo/>
              <LifecycleDemo/>
              <BadCounter/>
              <GoodCounter/>
        </div>
    );
}
 export default App;


