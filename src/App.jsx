import { Route, Routes ,Link} from "react-router"
import Home from "./ReactRoutingComp/Home";
import About from "./ReactRoutingComp/About";
function App() {
  return (
    <>
      {/* <FormTask /> */}
      {/* <ControlledComp /> */}
      {/* <Checkbox /> */}
      {/* <RadioButtonDropdown /> */}
      {/* <LoopInJsxMap /> */}
      {/* <ReuseCompInLoop /> */}
      {/* <Clock /> */}
      {/* <NestedLooping /> */}
      {/* <UseEffectComp /> */}
      {/* <LifeCycleMethod /> */}
      {/* <h1 className='heading'>App Profile : Here we do not imported the style.css but it will still apply it's</h1>
      <UserProfile /> */}
      {/* <StyledComponent /> */}
      {/* <UseRef /> */}
      {/* <UncontrolledComp /> */}
      {/* <PassFunction />
      <PassFunction />
      <PassFunction />
      <PassFunction /> */}
      {/* <ForwardRef /> */}
      {/* <UseFormStatus /> */}
      {/* <UseTransition /> */}
      {/* <DerivedState /> */}
      {/* <LiftingUpStateParent /> */}
      {/* <UpdateObectUsingState /> */}
      {/* <UseActionState /> */}
      {/* <UseIdHook/>    
      <UseIdHook/> */}
      {/* If i am calling UseIdHook twice , i want for each component call my form input should have unique id */}
      {/* <College /> */}
      {/* <ToggleComp /> */}

        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>

        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="about" element={<About />} />
        </Routes>

    </>
  )
}

export default App
